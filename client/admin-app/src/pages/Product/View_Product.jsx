import React from 'react'
import { Link } from 'react-router'
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react'
export default function View_Product() {


  let [modelstatus, setModelstatus] = useState(false)
  return (
    <div>

      <section className='w-full'>
        <div className='border-b-2 text-gray-300'></div>
        <div className='py-3'>
          <nav className='mt-1'>
            <ul className='flex items-center'>
              <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
              <li> <Link to={'/view_product'}><span className='font-bold text-gray-800'>/&nbsp;Product</span> </Link> </li>
              <li> <span className='font-bold text-gray-800'>/&nbsp;View</span></li>
            </ul>

          </nav>
        </div>
        <div className='border-b-2 text-gray-300'></div>
        <div className='w-full min-h-[620px]'>
          <div className='max-w-[1220px] mx-auto py-5'>
            <div className='flex items-center justify-between bg-slate-100 py-3 px-4 border rounded-t-md border-slate-400'>

              <h3 className='text-[26px] font-semibold'>View Product</h3>

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
                      <th scope='col' className='px-6 py-3'>Product Name</th>
                      <th scope='col' className='px-6 py-3'>Description</th>
                      <th scope='col' className='w-[12%]'>Short Description</th>
                      <th scope='col' className='w-[15%]'>Thumbnails</th>
                      <th scope='col' className='w-[11%]'>Action</th>
                      <th scope='col' className='w[6%]'>Status</th>
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

                        Men

                      </th>
                      <th scope='row' className='  text-[15px] px-6 py-4'>

                        <p className='line-clamp-1 w-[180px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque impedit maiores molestiae molestias, atque consequuntur
                          nam deserunt necessitatibus ipsum voluptates et doloribus facere cum suscipit inventore deleniti beatae quas sapiente?
                        </p>
                        <button onClick={() => setModelstatus(true)} className='text-[14px] text-blue-500'>Read More</button>

                        <div className={`w-full max-h-full fixed left-0 right-0 top-0 bg-gray-200 ${modelstatus ? 'block' : 'hidden'} translate-x-[-50%] translate-y-[-50%]`}>
                        </div>
                        <div className={` max-w-full max-h-full fixed  left-[50%] top-[50%] p-4 rounded-lg bg-white duration-200  ${modelstatus ? 'scale-100' : 'scale-0'}
                        translate-x-[-50%] translate-y-[-50%]`}>
                          <div className='flex items-center justify-center border-b rounded-t p-6'>
                            <h3 className='absolute left-5 text-[16px] font-semibold  text-gray-400'>Product Image's & Price</h3>
                            <span onClick={() => setModelstatus(false)}
                              className='absolute right-2 text-3xl cursor-pointer'>&times;</span>
                          </div>

                          <div className='p-4 space-y-4'>
                            <div className='grid grid-cols-[22%_45%_27%] gap-10'>
                              <div className='border-2 shadow-md rounded-md p-4'>
                             <img src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/902af913-69be-4024-b22c-cd573b7dd13b1613028902744-Roadster-Men-Tshirts-9521613028900435-1.jpg'/>
                             </div>
                            <div className='grid grid-cols-3 gap-5 border-2 shadow-md rounded-md p-4'> 
                              <img  className='w-36' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/7f8383cc-07f5-4714-b451-fba7d49776921613028902727-Roadster-Men-Tshirts-9521613028900435-2.jpg' />
                              <img className='w-36' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/5d8249b2-cbfa-42a3-9b8a-9406fcb8af0c1613028902710-Roadster-Men-Tshirts-9521613028900435-3.jpg'/>
                              <img className='w-36' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/bf9e30b3-5b8e-4cf1-811b-81ea64d45ed81613028902692-Roadster-Men-Tshirts-9521613028900435-4.jpg' />
                              <img className='w-36' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/77451543-64cb-4294-8f82-24ac1d78dcf01613028902666-Roadster-Men-Tshirts-9521613028900435-5.jpg'/>

                            </div>
                            <div className='border-2 shadow-md rounded-md p-1 mr-6'> 
                             <h3 className=' text-center font-semibold text-[18px] '>Product Details</h3>
                             <ul className='mt-7 space-y-4'>
                            <li className='font-semibold text-[14px]'>
                              Price : 
                              <span className='font-normal text-[12px]'> &nbsp; ₹ 1500</span>
                            </li>
                            <li className='font-semibold text-[14px]'>
                              MRP : 
                              <span className='font-normal text-[12px]'> &nbsp; ₹ 3000</span>
                            </li>
                            <li className='font-semibold text-[14px]'>
                              Manage Stock : 
                              <span className='font-normal text-[12px]'> &nbsp; In Stock</span>
                            </li>
                            <li className='font-semibold text-[14px]'>
                              Brand Name : 
                              <span className='font-normal text-[12px]'> &nbsp; Lev's</span>
                            </li>
                            <li className='font-semibold text-[14px]'>
                              Size : 
                              <span className='font-normal text-[12px]'> &nbsp; XL</span>
                            </li>
                            <li className='font-semibold text-[14px]'>
                              Color : 
                              <span className='font-normal text-[12px]'> &nbsp; Red</span>
                            </li>

                             </ul>
                            </div>
                          </div>
                        </div>
                      </div>
           
                    </th>
                    <th scope='row' className='  text-[15px] px-6 py-4'>

                      <p className='line-clamp-1 w-[180px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque impedit maiores molestiae molestias, atque consequuntur
                        nam deserunt necessitatibus ipsum voluptates et doloribus facere cum suscipit inventore deleniti beatae quas sapiente?
                      </p>
                      <button onClick={() => setModelstatus(true)} className='text-[14px] text-blue-500'>Read More</button>
                    </th>
                    <th className='px-6 py-4'>
                      <img src='https://packshifts.in/images/iso.png' className='w-16 h-16 rounded-md object-cover' />
                    </th>


                    <th className='px-2 py-4 flex gap-3 mt-6'>
                      <MdOutlineDeleteForever className='text-2xl text-red-600' />|
                      <FaRegEdit className='text-2xl text-yellow-500' />
                    </th>


                    <th className=' px-6 py-4'>

                      Active

                    </th>

                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
      </section >

    </div >


  )
}

export { View_Product }
