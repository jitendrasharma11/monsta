import React from 'react'
import { Link } from 'react-router'
import { BsThreeDotsVertical } from "react-icons/bs";

export default function DashBoard
    () {
    return (
        <div>
            <section className='w-full'>
                <div className='border-b-2 text-gray-300'></div>
                <div className='py-3'>
                    <nav className='mt-1'>
                        <ul className='flex items-center'>
                            <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
                            <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>/&nbsp;DashBoard</span> </Link> </li>

                        </ul>

                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <div className='grid grid-cols-3 gap-5'>
                            <div className='bg-indigo-700 rounded-lg shadow-lg h-[200px]'>
                                <div className='flex justify-between items-center py-4 px-4'>
                                    <h1 className='text-white text-3xl font-bold'>26K
                                        <span className='text-[24px] font-bold'>(-12.4% ↓)</span>
                                    </h1>
                                    <BsThreeDotsVertical className='text-2xl text-white' />
                                </div>
                                <h3 className='text-white font-semibold text-[20px] px-4' >Users</h3>
                            </div>
                            <div className='bg-blue-400 rounded-lg shadow-lg h-[200px]'>
                                <div className='flex justify-between items-center py-4 px-4'>
                                    <h1 className='text-white text-3xl font-bold'>$6,200
                                        <span className='text-[24px] font-bold'>(40.9% ↑)</span>
                                    </h1>
                                    <BsThreeDotsVertical className='text-2xl text-white' />
                                </div>
                                <h3 className='text-white font-semibold text-[20px] px-4' >Product</h3>
                            </div>
                            <div className='bg-yellow-400 rounded-lg shadow-lg h-[200px]'>
                                <div className='flex justify-between items-center py-4 px-4'>
                                    <h1 className='text-white text-3xl font-bold'>2.49% 
                                        <span className='text-[24px] font-bold'>(84.7% ↑)</span>
                                    </h1>
                                    <BsThreeDotsVertical className='text-2xl text-white' />
                                </div>
                                <h3 className='text-white font-semibold text-[20px] px-4' >Category</h3>
                            </div>
                            <div className='bg-red-500 rounded-lg shadow-lg h-[200px]'>
                                <div className='flex justify-between items-center py-4 px-4'>
                                    <h1 className='text-white text-3xl font-bold'>44K
                                        <span className='text-[24px] font-bold'>(-23.6% ↓)</span>
                                    </h1>
                                    <BsThreeDotsVertical className='text-2xl text-white' />
                                </div>
                                <h3 className='text-white font-semibold text-[20px] px-4' >Orders</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}
