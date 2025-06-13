import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Link from 'next/link';
export default function Footer() {
    return (
        <>
            <section className='max-w-full bg-white border-t-1 py-10  border-gray-200' id='footer'>
                <div className='max-w-[1320px] lg:mx-auto mx-2 ' id='header-mid'>
                    <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 lg:justify-items-center  gap-4' id='header-mid-link'>
                        <div className='text-gray-700 ' id='contact-us-link'>
                            <h2 className='text-2xl font-semibold mb-4 '>Contact Us</h2>
                            <nav>
                                <ul>
                                    <li className='my-1'>
                                        <p className='text-sm '>Address: Claritas est etiam processus dynamicus</p>
                                    </li>
                                    <li className='my-1'>
                                        <p className='text-sm '>Phone: 9781234560</p>
                                    </li>
                                    <li className='my-1'>
                                        <p className='text-sm '>Email: furniture@gmail.com</p>
                                    </li>
                                    <li className='my-2 flex gap-2' id='socialMedia-icon'>
                                        <div className='w-[30px] h-[30px] rounded-[50%] border-1 border-gray-700 flex justify-center items-center'>
                                            <FaFacebookF />
                                        </div>
                                        <div className='w-[30px] h-[30px] rounded-[50%] border-1 border-gray-700 flex justify-center items-center'>
                                            <FaInstagram />
                                        </div>
                                        <div className='w-[30px] h-[30px] rounded-[50%] border-1 border-gray-700 flex justify-center items-center'>
                                            <FaTwitter />
                                        </div>
                                        <div className='w-[30px] h-[30px] rounded-[50%] border-1 border-gray-700 flex justify-center items-center'>
                                            <FaLinkedinIn />
                                        </div>
                                        <div className='w-[30px] h-[30px] rounded-[50%] border-1 border-gray-700 flex justify-center items-center'>
                                            <FaYoutube />
                                        </div>
                                        <div className='w-[30px] h-[30px] rounded-[50%] border-1 border-gray-700 flex justify-center items-center'>
                                            <FaTelegramPlane />
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='text-gray-700 ' id='aboutUS-link'>
                            <h2 className='text-2xl font-semibold mb-4 '>Information</h2>
                            <nav>
                                <ul>
                                    <li className='my-1'>
                                        <Link href={'/about'} className='text-sm hover:text-[#C09578]'>About Us</Link>
                                    </li>
                                    <li className='my-1'>
                                        <Link href={'/contact-us'} className='text-sm hover:text-[#C09578]'>Contact Us</Link>
                                    </li>
                                    <li className='my-1'>
                                        <p className='text-sm hover:text-[#C09578]'>Frequently Questions</p>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className='text-gray-700 ' id='account-link'>
                            <h2 className='text-2xl font-semibold mb-4 '>My Account</h2>
                            <nav>
                                <ul>
                                    <li className='my-1 hover:text-[#C09578]'>
                                        <Link href={'/my-dashboard'} className='text-sm'>My Dashboard</Link>
                                    </li>
                                    <li className='my-1 hover:text-[#C09578]'>
                                        <Link href={'/wishlist'} className='text-sm'>Wishlist</Link>
                                    </li>
                                    <li className='my-1 hover:text-[#C09578]'>
                                        <Link href={'/cart'} className='text-sm'>Cart</Link>
                                    </li>
                                    <li className='my-1 hover:text-[#C09578]'>
                                        <Link href={'/checkout'} className='text-sm'>Checkout</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='text-gray-700 ' id='account-link'>
                            <h2 className='text-2xl font-semibold mb-4 '>Top Rated Products</h2>
                            <div className='w-full flex  gap-3'>
                                <figure>
                                    <img src="/images/16253167208651620078433247Louise Cabinet_.jpg" className='w-16 h-16 object-cover' alt="" />
                                </figure>
                                <div className=''>
                                    <span className='text-[12px]'>Wooden Mirrors</span>
                                    <p className='text-[16px] font-medium'>Winona Mirror</p>
                                    <p className=''>
                                        <span className='line-through text-gray-400'>
                                            Rs.3,000
                                        </span>&nbsp;&nbsp;
                                        <span className='text-[#C09578] font-semibold'>Rs. 2,200</span>
                                    </p>
                                </div>
                            </div>
                            <div className='w-full my-3 flex  gap-3'>
                                <figure>
                                    <img src="/images/16253179270591620747711033Hardwell Temple Prayer Unit__.jpg" className='w-16 h-16 object-cover' alt="" />
                                </figure>
                                <div className=''>
                                    <span className='text-[12px]'>Prayer Units</span>
                                    <p className='text-[16px] font-medium'>Hardwell Temple Prayer Unit</p>
                                    <p className=''>
                                        <span className='line-through text-gray-400'>
                                            Rs.3,000
                                        </span>&nbsp;&nbsp;
                                        <span className='text-[#C09578] font-semibold'>Rs. 2,200</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center border-y-1 my-10 py-4 border-gray-400'>
                        <nav>
                            <ul className='flex gap-5'>
                                <li>
                                    <p className='text-gray-500 capitalize lg:text-base text-[12px]'>Home</p>
                                </li>
                                <li>
                                    <p className='text-gray-500 capitalize lg:text-base text-[12px]'>Online Store</p>
                                </li>
                                <li>
                                    <p className='text-gray-500 capitalize lg:text-base text-[12px]'>Privacy Policy</p>
                                </li>
                                <li>
                                    <p className='text-gray-500 capitalize lg:text-base text-[12px]'>Terms Of Use</p>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <p className='text-center  text-md text-gray-700'>All Rights Reserved By Furniture | © 2025</p>
                    <figure>
                        <img src="/images/papyel2.png" className='mx-auto mt-4' alt="" />
                    </figure>
                </div>
            </section>
        </>
    )
}
