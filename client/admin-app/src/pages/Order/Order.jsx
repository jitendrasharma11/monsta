import React from 'react'
import { Link } from 'react-router'
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react'

export default function Order() {


    let [modelstatus, setModelstatus] = useState(false)
    return (
        <div>
            <section className='w-full'>
                <div className='border-b-2 text-gray-300'></div>
                <div className='py-3'>
                    <nav className='mt-1'>
                        <ul className='flex items-center'>
                            <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
                            <li> <Link to={'/order'}><span className='font-bold text-gray-800'>/&nbsp;Orders</span> </Link> </li>

                        </ul>

                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <div className='flex items-center justify-between bg-slate-100 py-3 px-4 border rounded-t-md border-slate-400'>

                            <h3 className='text-[26px] font-semibold'>Order's List</h3>

                        </div>
                        <div className='border border-slate-400 border-t-0 rounded-b-md'>

                            <div className='overflow-x-auto'>

                                <table className='w-full text-gray-500'>
                                    <thead className='text-gray-900 text-[12px] uppercase bg-gray-50'>
                                        <tr>
                                            <th>
                                                <th scope='col' className='px-6 py-3'>Delete</th>
                                            </th>
                                            <th scope='col' className='px-6 py-3'>S.no</th>
                                            <th scope='col' className='px-6 py-3'>Order Id</th>
                                            <th scope='col' className='px-6 py-3'>Name</th>
                                            <th scope='col' className='w-[12%]'>Quantity</th>
                                            <th scope='col' className='w-[15%]'>Price</th>
                                            <th scope='col' className='w-[11%]'>Date</th>
                                            <th scope='col' className='w[6%]'>Status</th>
                                            <th scope='col' className='w[6%]'>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bg-white hover:bg-gray-50'>
                                            <th className='w-4 p-4'>
                                                <input type='checkbox' className='text-blue-600 text-sm rounded-sm w-4 h-4 border-gray-400 ' />
                                            </th>
                                            <th scope='row' className=' text-[15px] px-6 py-4'>

                                                1

                                            </th>


                                            <th scope='row' className=' text-[15px] px-6 py-4'>

                                                Frank01

                                            </th>
                                            <th scope='row' className='  text-[15px] px-6 py-4'>
                                                Roshan Chaurasia


                                            </th>
                                            <th scope='row' className='  text-[15px] px-6 py-4'>

                                                2
                                                
                                            </th>
                                            <th className='px-6 py-4'>
                                                ₹ 3500
                                            </th>


                                            <th className='px-2 py-4 '>
                                                10/06/2024
                                            </th>


                                            <th className=' px-6 py-4'>

                                                Processing...

                                            </th>
                                            <th className=' px-6 py-4'>

                                                <button onClick={() => setModelstatus(true)} className='text-[14px] text-blue-500'>View</button>
                                                <div  className={`w-full max-h-full fixed left-0 right-0  top-0 bg-gray-200 ${modelstatus ? 'block' : 'hidden'} translate-x-[-50%] translate-y-[-50%]`}>
                                                </div>
                                                <div className={` max-w-full max-h-full fixed  left-[50%] top-[50%] p-4 rounded-lg bg-white duration-200  ${modelstatus ? 'scale-100' : 'scale-0'}
                                                    translate-x-[-50%] translate-y-[-50%]`}>
                                                    <div className='flex items-center justify-center border-b rounded-t p-6'>
                                                        <h3 className='absolute left-5 text-[16px] font-semibold  text-gray-700'>Product Image's & Price</h3>
                                                        <span onClick={() => setModelstatus(false)}
                                                            className='absolute right-2 text-3xl cursor-pointer'>&times;</span>
                                                    </div>

                                                    <div className='p-4 space-y-4'>
                                                        <div className='grid grid-cols-[62%_30%] gap-8'>
                                                           <div>
                                                            <div className='flex  gap-7'>
                                                            <img className='w-28' src='http://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg'/>
                                                            <div>
                                                                    <h3 className='text-red-600 font-semibold'>
                                                                    Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt  
                                                                    </h3>
                                                                    <ul className='space-y-2 mt-2'>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Price: 
                                                                                    <span className='text-[16px] font-normal'>
                                                                                   &nbsp; ₹ 1500
                                                                                    </span>
                                                                        </li>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Quantity:
                                                                                    <span className='text-[16px] font-normal'>
                                                                                 &nbsp; 1
                                                                                    </span>
                                                                        </li>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Size:
                                                                                    <span className='text-[16px] font-normal'>
                                                                                    &nbsp;XL
                                                                                    </span>
                                                                        </li>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Colour:
                                                                                    <span className='text-[16px] font-normal'>
                                                                                    &nbsp;Red
                                                                                    </span>
                                                                        </li>
                                                                    </ul>

                                                            </div>
                                                          
                                                            </div>
                                                            <div className='pt-6 flex  gap-7'>
                                                            <img className='w-28' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23644364/2023/10/6/2e563247-3f1e-4822-adf9-fa233c62e8fd1696582792046-Mast--Harbour-Men-Sweaters-8961696582791747-2.jpg'/>
                                                            <div>
                                                                    <h3 className='text-red-600 font-semibold'>
                                                                    Men Pink Pure Cotton T-shirt  
                                                                    </h3>
                                                                    <ul className='space-y-2 mt-2'>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Price: 
                                                                                    <span className='text-[16px] font-normal'>
                                                                                   &nbsp; ₹ 1500
                                                                                    </span>
                                                                        </li>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Quantity:
                                                                                    <span className='text-[16px] font-normal'>
                                                                                 &nbsp; 1
                                                                                    </span>
                                                                        </li>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Size:
                                                                                    <span className='text-[16px] font-normal'>
                                                                                    &nbsp;XL
                                                                                    </span>
                                                                        </li>
                                                                        <li className='font-semibold text-[18px] flex justify-items-start text-black'>
                                                                                    Colour:
                                                                                    <span className='text-[16px] font-normal'>
                                                                                    &nbsp;Red
                                                                                    </span>
                                                                        </li>
                                                                    </ul>

                                                            </div>
                                                                </div>

                                                           </div>
                                                            <div className='border-2 shadow-md rounded-md '>
                                                                <h3 className=' text-center font-semibold text-[18px] text-black '>Product Details</h3>
                                                                <p className='mt-1  font-normal pb-6 text-[14px]'>Roshan Chaurasia, First Floor , Laxmi Tower, Bhaskar Circle, Ratanada, 
                                                                    PRAYAGRAJ, UTTAR PRADESH 211003 India
                                                                    </p>
                                                                
                                                                    <h3 className=' text-center font-semibold text-[18px] text-black '>Order Summery</h3>
                                                                <ul className='mt-7 space-y-4'>
                                                                    <li className=' text-black font-semibold text-[14px]'>
                                                                    Item(s) Subtotal:
                                                                        <span className='font-normal text-[12px]'> &nbsp; ₹ 3000</span>
                                                                    </li>
                                                                    <li className=' text-black font-semibold text-[14px]'>
                                                                    Cash / Pay on Delivery:
                                                                        <span className='font-normal text-[12px]'> &nbsp; ₹ 0</span>
                                                                    </li>
                                                                    <li className='text-black font-semibold text-[14px]'>
                                                                    Shipping:
                                                                        <span className='font-normal text-[12px]'> &nbsp; ₹ 0</span>
                                                                    </li>
                                                                    <li className='text-black font-semibold text-[14px]'>
                                                                    Grand Total:
                                                                        <span className='font-normal text-[12px]'> &nbsp; ₹ 3000 </span>
                                                                    </li>
                                                                  

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section >








        </div>
    )
}
export { Order }