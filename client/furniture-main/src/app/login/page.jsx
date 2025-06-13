"use client"
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
export default function login() {

    let dashBoard = () => {
        window.location.href = '/my-dashboard'
    }
    let apiBaseUrl=process.env.NEXT_PUBLIC_APIBASEURL

    let userRegister=(e)=>{
        console.log(apiBaseUrl)
        e.preventDefault()

    }
    return (
        <>
            <section className='max-w-full my-10' id='myAccount'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='myAccount-mid'>
                    <div className='w-full text-center' id='muAccount-mid-heading'>
                        <h2 className=' text-4xl font-semibold'>My Account</h2>
                        <div className='flex items-center justify-center gap-1 my-3 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/login'} className='text-sm text-[#C09578]'> My Account </Link >

                        </div>
                        <hr className='border-gray-300 my-5' />
                    </div>

                    <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-4' id='login-register'>
                        <div id='login'>
                            <h2 className='capitalize text-3xl'>login</h2>

                            <div className='border-1 border-gray-200 rounded-sm my-5 p-5'>
                                <form action="">
                                    <label htmlFor="" className=''>Email</label>&nbsp;<span className='font-bold'>*</span>
                                    <input className='w-full border-1 border-gray-300 px-4 py-2 my-3' name='email' placeholder='Email Address' type="email" />
                                    <label htmlFor="" className='my-5'>Password</label>&nbsp;<span className='font-bold'>*</span>
                                    <input className='w-full border-1 border-gray-300 px-4 py-2 my-2' name='email' placeholder='Password' type="password" />
                                    <div className='my-5 flex items-center justify-between'>
                                        <p className='text-[#C09578] text-sm hover:cursor-pointer'>Lost Your Password?</p>
                                        <button className='text-white font-semibold bg-[#C09578] px-5 py-1 rounded-2xl cursor-pointer hover:text-white hover:bg-black' onClick={()=>dashBoard}>Login</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div id='register'>
                            <h2 className='capitalize text-3xl'>Register</h2>

                            <div className='border-1 border-gray-200 rounded-sm my-5 p-5'>
                                <form onSubmit={userRegister} action="">
                                    <label htmlFor="" className=''>Email Address</label>&nbsp;<span className='font-bold'>*</span>
                                    <input className='w-full border-1 border-gray-300 px-4 py-2 my-3' name='email' placeholder='Email Address' type="email" />
                                    <label htmlFor="" className='my-5'>Password</label>&nbsp;<span className='font-bold'>*</span>
                                    <input className='w-full border-1 border-gray-300 px-4 py-2 my-2' name='email' placeholder='Password' type="password" />
                                    <div className='my-5 flex items-center justify-end'>

                                        <button className='text-white font-semibold bg-[#C09578] px-5 py-1 rounded-2xl cursor-pointer hover:text-white hover:bg-black'>Register</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
