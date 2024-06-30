const formidable = require("formidable");
const { responseReturn } = require("../../utiles/response");
const cloudinary = require('cloudinary').v2;
const productModel = require('../../models/productModel');

class productController {
    add_product = async (req, res) => {
        const { id } = req;
        const form = formidable({ multiples: true });

        form.parse(req, async (err, fields, files) => {
            let { name, category, description, stock, price, discount, shopName, brand } = fields;
            const { images } = files;

            name = name.trim();
            const slug = name.split(' ').join('-');

            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true,
            });

            try {
                let allImageUrl = [];

                if (images) {
                    const imageArray = Array.isArray(images) ? images : [images];
                    for (let i = 0; i < imageArray.length; i++) {
                        const result = await cloudinary.uploader.upload(imageArray[i].filepath, { folder: 'products' });
                        allImageUrl.push(result.url);
                    }
                }

                await productModel.create({
                    sellerId: id,
                    name,
                    slug,
                    shopName,
                    category: category.trim(),
                    description: description.trim(),
                    stock: parseInt(stock),
                    price: parseInt(price),
                    discount: parseInt(discount),
                    images: allImageUrl,
                    brand: brand.trim(),
                });

                responseReturn(res, 201, { message: 'Product Added Successfully' });
            } catch (error) {
                responseReturn(res, 500, { error: error.message });
            }
        });
    }

    products_get = async (req, res) => {
        const { page, searchValue, parPage } = req.query;
        const { id } = req;

        const skipPage = parseInt(parPage) * (parseInt(page) - 1);

        try {
            const query = { sellerId: id };
            if (searchValue) {
                query.$text = { $search: searchValue };
            }

            const products = await productModel.find(query)
                .skip(skipPage)
                .limit(parseInt(parPage))
                .sort({ createdAt: -1 });

            const totalProduct = await productModel.countDocuments(query);

            responseReturn(res, 200, { products, totalProduct });
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    }
}

module.exports = new productController();