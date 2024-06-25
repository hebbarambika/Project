import { lazy } from "react";


const Category = lazy(() => import("../../views/admin/Category"));
const AdminDashboard =lazy(()=>import ( "./../../views/admin/AdminDashboard"));
const Orders =lazy(()=>import ( "../../views/admin/Orders"));
const Sellers =lazy(()=>import ( "../../views/admin/Sellers"));
const PaymentRequest =lazy(()=>import ( "../../views/admin/PaymentRequest"));
const DeactiveSeller =lazy(()=>import ( "../../views/admin/DeactiveSeller"));
const SellerRequest =lazy(()=>import ( "../../views/admin/SellerRequest"));
const SellerDetails =lazy(()=>import ( "../../views/admin/SellerDetails"));
const ChatSeller =lazy(()=>import ( "../../views/admin/ChatSeller"));
const OrderDetails =lazy(()=>import ( "../../views/admin/OrderDetails"));


export const adminRoutes=[
    {
        path:'/admin/dashboard',
        element:<AdminDashboard/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/orders',
        element:<Orders/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/category',
        element:<Category/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/sellers',
        element:<Sellers/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/payment-request',
        element:<PaymentRequest/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/deactive-sellers',
        element:<DeactiveSeller/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/seller-request',
        element:<SellerRequest/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/seller/details/:sellerId',
        element:<SellerDetails/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/chat-sellers',
        element:<ChatSeller/>,
        role:'admin'
    },
    {
        path:'/admin/dashboard/order/details/:orderId',
        element:<OrderDetails/>,
        role:'admin'
    },
    

    

] 