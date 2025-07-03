"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Footer() {

    let router = useRouter();

    let handleRedirect = (path) => {
        let token = Cookies.get("TOKEN");
        if (!token) {
            router.push("/login");
        } else {
            router.push(path);
        }
    };

    return (
        <>
            <section className='max-w-full bg-white border-t-1 py-10 border-gray-200' id='footer'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='header-mid'>
                    <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 lg:justify-items-center gap-4' id='header-mid-link'>
                        {/* Contact Us */}
                        <div className='text-gray-700' id='contact-us-link'>
                            <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                            <ul>
                                <li className='my-1'>
                                    <p className='text-sm'>Address: Dhanbad, Jharkhand</p>
                                </li>
                                <li className='my-1'>
                                    <p className='text-sm'>Phone: +918540064060</p>
                                </li>
                                <li className='my-1'>
                                    <p className='text-sm'>Email: jitendrasharma30990@gmail.com</p>
                                </li>
                                <li className='my-2 flex gap-2' id='socialMedia-icon'>
                                    {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegram].map((Icon, i) => (
                                        <div key={i} className='w-[30px] h-[30px] rounded-[50%] border border-gray-700 flex justify-center items-center'>
                                            <Icon />
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </div>

                        {/* Information */}
                        <div className='text-gray-700' id='aboutUS-link'>
                            <h2 className='text-2xl font-semibold mb-4'>Information</h2>
                            <ul>
                                <li className='my-1'>
                                    <Link href="/about" className='text-sm hover:text-[#C09578]'>About Us</Link>
                                </li>
                                <li className='my-1'>
                                    <Link href="/contact-us" className='text-sm hover:text-[#C09578]'>Contact Us</Link>
                                </li>
                                <li className='my-1'>
                                    <p className='text-sm hover:text-[#C09578]'>Frequently Questions</p>
                                </li>
                            </ul>
                        </div>

                        {/* My Account */}
                        <div className='text-gray-700' id='account-link'>
                            <h2 className='text-2xl font-semibold mb-4'>My Account</h2>
                            <ul>
                                <li className='my-1 hover:text-[#C09578]'>
                                    <button
                                        onClick={() => handleRedirect("/my-dashboard")}
                                        className='text-sm bg-transparent border-none p-0 m-0 text-left hover:text-[#C09578] cursor-pointer'
                                    >
                                        My Dashboard
                                    </button>
                                </li>
                                <li className='my-1 hover:text-[#C09578]'>
                                    <button onClick={() => handleRedirect("/wishlist")} className='text-sm'>Wishlist</button>
                                </li>
                                <li className='my-1 hover:text-[#C09578]'>
                                    <button onClick={() => handleRedirect("/cart")} className='text-sm'>Cart</button>
                                </li>
                                <li className='my-1 hover:text-[#C09578]'>
                                    <button onClick={() => handleRedirect("/checkout")} className='text-sm'>Checkout</button>
                                </li>
                            </ul>
                        </div>

                        {/* Top Rated Products */}
                        <div className='text-gray-700' id='top-rated'>
                            <h2 className='text-2xl font-semibold mb-4'>Top Rated Products</h2>
                            {[
                                {
                                    img: "/images/16253167208651620078433247Louise Cabinet_.jpg",
                                    category: "Wooden Mirrors",
                                    title: "Winona Mirror",
                                    oldPrice: 3000,
                                    price: 2200,
                                },
                                {
                                    img: "/images/16253179270591620747711033Hardwell Temple Prayer Unit__.jpg",
                                    category: "Prayer Units",
                                    title: "Hardwell Temple Prayer Unit",
                                    oldPrice: 3000,
                                    price: 2200,
                                }
                            ].map((item, i) => (
                                <div key={i} className='w-full my-3 flex gap-3'>
                                    <figure>
                                        <img src={item.img} className='w-16 h-16 object-cover' alt={item.title} />
                                    </figure>
                                    <div>
                                        <span className='text-[12px]'>{item.category}</span>
                                        <p className='text-[16px] font-medium'>{item.title}</p>
                                        <p>
                                            <span className='line-through text-gray-400'>Rs.{item.oldPrice}</span>&nbsp;&nbsp;
                                            <span className='text-[#C09578] font-semibold'>Rs. {item.price}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className='flex justify-center border-y-1 my-10 py-4 border-gray-400'>
                        <ul className='flex gap-5'>
                            <li><p className='text-gray-500 capitalize lg:text-base text-[12px]'>Home</p></li>
                            <li><p className='text-gray-500 capitalize lg:text-base text-[12px]'>Online Store</p></li>
                            <li><p className='text-gray-500 capitalize lg:text-base text-[12px]'>Privacy Policy</p></li>
                            <li><p className='text-gray-500 capitalize lg:text-base text-[12px]'>Terms Of Use</p></li>
                        </ul>
                    </div>

                    <p className='text-center text-md text-gray-700'>All Rights Reserved By Furniture | © 2025</p>
                    <figure>
                        <img src="/images/papyel2.png" className='mx-auto mt-4' alt="payment" />
                    </figure>
                </div>
            </section>
        </>
    );
}