import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function contactUs() {
    return (
        <>
            <section className='max-w-full my-8' id='contact-us'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='contact-us-mid'>
                    <div className='w-full text-center' id='contact-us-mid-heading'>
                        <h2 className='text-4xl font-semibold'>Contact Us</h2>
                        <div className='flex items-center justify-center gap-1 my-3 '>
                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/contact-us'} className='text-sm text-[#C09578]'>Contact Us</Link>
                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>
                </div>

                <div className='max-w-[1320px] my-5 mx-auto'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className='max-w-[1320px] lg:mx-auto sm:mx-5 mx-2 my-12' id='contact-details'>
                    <div className='w-full grid lg:grid-cols-2 gap-5' id='contact-details-mid'>
                        <div className='w-full'>
                            <h2 className='text-xl font-semibold py-3'>Contact Us</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <div className='flex items-center gap-2 text-sm border-t-1 border-gray-300 py-5'>
                                            <FaRegAddressCard className='text-[#5A5A5A] text-lg' />
                                            <span className='text-sm text-[#5A5A5A]'>Address: Dhanbad, Jharkhand</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center gap-2 text-sm border-t-1 border-gray-300 py-5'>
                                            <FaPhoneAlt className='text-[#5A5A5A] text-lg' />
                                            <span className='text-sm text-[#5A5A5A]'>+918540064060</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center gap-2 text-sm border-t-1 border-gray-300 py-5'>
                                            <MdOutlineEmail className='text-[#5A5A5A] text-lg' />
                                            <span className='text-sm text-[#5A5A5A]'>jitendrasharma30990@gmail.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className='w-full'>
                            <h2 className='text-xl font-semibold py-3'>Tell us your question</h2>
                            <div id='enquiryForm'>
                                <form action="">
                                    <label className='text-sm font-semibold'>Your Name (required)</label>
                                    <input type="text" name='name' placeholder='Name *' className='w-full border-1 p-2 border-gray-300 my-3 text-sm' />

                                    <label className='text-sm font-semibold'>Your Email (required)</label>
                                    <input type="email" name='email' placeholder='Email *' className='w-full border-1 p-2 border-gray-300 my-3 text-sm' />

                                    <label className='text-sm font-semibold'>Your Mobile Number (required)</label>
                                    <input type="tel" name='phone' placeholder='Mobile Number *' className='w-full border-1 p-2 border-gray-300 my-3 text-sm' />

                                    <label className='text-sm font-semibold'>Subject</label>
                                    <input type="text" name='subject' placeholder='Subject *' className='w-full border-1 p-2 border-gray-300 my-3 text-sm' />

                                    <label className='text-sm font-semibold'>Your Message</label>
                                    <textarea name='message' placeholder='Message *' className='w-full border-1 p-2 border-gray-300 my-3 text-sm resize-none h-44'></textarea>

                                    <button type='submit' className='bg-black text-white font-semibold px-7 py-2 rounded-sm cursor-pointer hover:bg-[#C09578]'>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}