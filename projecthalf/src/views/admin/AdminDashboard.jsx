import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    const state={
        series:[
            {
                name :'Orders',
                data:[23,34,56,45,2,55,89,78]
           
            },
            {
                name :'Revenue',
                data:[73,44,56,45,98]
            },
            {
                name :'Sellers',
                data:[73,24,96,55,68]
            },
        ],
        options:{
            color:['#181ee8','#181ee8'],
            plotOptions:{
                radius:30
            },
            chart:{
                background : 'transparent',
                foreColor:'#d0d2d6'
            },

            dataLabels:{
                enable:false
            },

            strock:{
                show:true,
                curve:['smooth','straight','stepline'],
                lineCap:'butt',
                colors:'#f0f0fo',
                width:.5,
                dashArray:0
            },
            xaxis:{
                categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                
            },
            legend:{
                position:'top'
            },
            responsive:[
                {
                    breakpoint:565,
                    yaxis:{
                        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
                            'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                        },
                        options:{
                            plotOptions:{
                                bar:{
                                    horizontal:true
                                }
                            },
                            chart:{
                                height:"550px"
                            }
                       }
                }
            ]

        }
    } 

    return (
        <div>
            <div className='px-2 md:px-7 py-5'>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2
                  md:grid-col-2 lg:grid-cols-4 gap-7'>

                    <div className='flex justify-between items-center p-5 bg-[#f0d6d6]
                    rounded-md gap-3' >
                        <div className='flex flex-col justify-start items-start
                        text-[#292828]'>
                            <h1 className='text-2xl font-bold'>Rs.3450</h1>
                            <span className='text-md font-medium'>Total Sales</span>
                        </div>
                        <div className='w-[40px] h-[47px] rounded-full bg-[#f76e6e] flex justify-center 
                        items-center text-xl'>
                            <FaIndianRupeeSign className='text-[#fae8e8]'/>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-5 bg-[#f0c5e7]
                    rounded-md gap-3' >
                        <div className='flex flex-col justify-start items-start
                        text-[#292828]'>
                            <h1 className='text-2xl font-bold'>50</h1>
                            <span className='text-md font-medium'>Products</span>
                        </div>
                        <div className='w-[40px] h-[47px] rounded-full bg-[#f662e0] flex justify-center 
                        items-center text-xl'>
                            <MdOutlineProductionQuantityLimits className='text-[#fae8e8]'/>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-5 bg-[#ccebd8]
                    rounded-md gap-3' >
                        <div className='flex flex-col justify-start items-start
                        text-[#292828]'>
                            <h1 className='text-2xl font-bold'>5</h1>
                            <span className='text-md font-medium'>Sellers</span>
                        </div>
                        <div className='w-[40px] h-[47px] rounded-full bg-[#71eb52] flex justify-center 
                        items-center text-xl'>
                            <FaUsers className='text-[#fae8e8]'/>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-5 bg-[#d2d2f1]
                    rounded-md gap-3' >
                        <div className='flex flex-col justify-start items-start
                        text-[#292828]'>
                            <h1 className='text-2xl font-bold'>54</h1>
                            <span className='text-md font-medium'>Orders</span>
                        </div>
                        <div className='w-[40px] h-[47px] rounded-full bg-[#2c1fe7] flex justify-center 
                        items-center text-xl'>
                            <FaCartPlus className='text-[#fae8e8]'/>
                        </div>
                    </div>

                </div>

                <div className='w-full flex flex-wrap mt-7'>
                    <div className='w-full lg:w-7/12 lg:pr-3'>
                        <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
                            <Chart options={state.options}series={state.series} 
                            type='bar' height={350}/>
                        </div>
                    </div>

                    <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
                        <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]'>
                            <div className='flex justify-between items-center'>
                                <h2 className='font-semibold text-lg text-[#4575d5] pb-3'>
                                    Recent Seller Message</h2>
                                    <Link className='font-semibold text-sm text-[#d0d2d6]'>
                                    View All
                                    </Link>
                            </div>
                            <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
                                <ol className='relative border-1 border-slate-600 ml-4'>
                                    <li className='mb-3 ml-6'>
                                        <div className='flex absolute -left-5 shadow-lg justify-center
                                        items-center w-10 h-10 p-[6px] bg-[#1046b2] rounded-full z-10'>
                                            <img className='w-full rounded-full h-full shadow-lg'
                                             src="http://localhost:3000/images/admin.jpg" alt="" />
                                        </div>
                                        <div className='p-3 bg-slate-800 rounded-lg border border-slate-600
                                        shadow-sm'>
                                            <div className='flex justify-between items-center mb-2'>
                                                <Link className='text-md font-normal'>Admin</Link>
                                                <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>
                                                    2 days</time>
                                            </div>
                                            <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                              How are u
                                            </div>
                                        </div>
                                    </li>

                                    <li className='mb-3 ml-6'>
                                        <div className='flex absolute -left-5 shadow-lg justify-center
                                        items-center w-10 h-10 p-[6px] bg-[#1046b2] rounded-full z-10'>
                                            <img className='w-full rounded-full h-full shadow-lg'
                                             src="http://localhost:3000/images/admin.jpg" alt="" />
                                        </div>
                                        <div className='p-3 bg-slate-800 rounded-lg border border-slate-600
                                        shadow-sm'>
                                            <div className='flex justify-between items-center mb-2'>
                                                <Link className='text-md font-normal'>Admin</Link>
                                                <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>
                                                    2 days</time>
                                            </div>
                                            <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                              How are u
                                            </div>
                                        </div>
                                    </li>

                                    <li className='mb-3 ml-6'>
                                        <div className='flex absolute -left-5 shadow-lg justify-center
                                        items-center w-10 h-10 p-[6px] bg-[#1046b2] rounded-full z-10'>
                                            <img className='w-full rounded-full h-full shadow-lg'
                                             src="http://localhost:3000/images/admin.jpg" alt="" />
                                        </div>
                                        <div className='p-3 bg-slate-800 rounded-lg border border-slate-600
                                        shadow-sm'>
                                            <div className='flex justify-between items-center mb-2'>
                                                <Link className='text-md font-normal'>Admin</Link>
                                                <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>
                                                    2 days</time>
                                            </div>
                                            <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                              How are u
                                            </div>
                                        </div>
                                    </li>

                                </ol>

                            </div>

                        </div>
                    </div>


                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6'>
                        <div className='flex justify-between items-center'>
                           <h2 className='font-semibold text-sm text-[#d0d2d6] pb-3'>
                            Recent Orders</h2>
                            <Link className='font-semibold text-sm text-[#d0d2d6]'>View All
                            </Link>

                        </div>

                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left text-[#d0d2d6]  border-b border-slate-700'>
                                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                <tr>
                                    <th scope='col' className='py-3 px-4'>Order Id</th>
                                    <th scope='col' className='py-3 px-4'>Price</th>
                                    <th scope='col' className='py-3 px-4'>Payement Status</th>
                                    <th scope='col' className='py-3 px-4'>Order Status</th>
                                    <th scope='col' className='py-3 px-4'>Active</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1,2,3,4,5].map((d,i)=>  <tr key={i}>
                                        <td  className='py-3 px-4 font-medium 
                                        whitespace-nowrap'>#34562</td>
                                          <td  className='py-3 px-4 font-medium 
                                        whitespace-nowrap'>₹456</td>
                                          <td  className='py-3 px-4 font-medium 
                                        whitespace-nowrap'>Pending</td>
                                          <td  className='py-3 px-4 font-medium 
                                        whitespace-nowrap'>Pending</td>
                                       <td className='py-3 px-4 font-medium 
                                        whitespace-nowrap'><Link>View</Link></td>
                                    </tr>)
                                    }
                                   
                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}


export default AdminDashboard;
