"use client"
import React from 'react'
import Slider from 'react-slick'
import { FaStar } from "react-icons/fa6";
export default function CustomerReview() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    }
    return (
        <>
            <section className='max-w-full py-5'>
                <div className='max-w-[1320px]  mx-auto'>
                    <div className='text-center' id='heading'>
                        <h2 className='lg:text-2xl sm:text-2xl text-xl font-semibold'>What Our Custumers Say ?</h2>
                    </div>
                    <div className=' w-[80%] mx-auto'>
                        <Slider className='customerSlider' {...settings}>
                            <div>
                                <div className=''>
                                    <div className='text-center'>
                                        <p className='text-gray-600   lg:text-[17px] sm:text-[16px]  text-[15px] py-5'>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        <div className='mx-auto  text-center' >
                                            <figure>
                                                <img src="/images/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" className='mx-auto' alt="" />
                                            </figure>
                                            <p className='lg:text-lg sm:text-lg text-sm  text-center font-semibold  py-2'>Kathy Young</p>
                                            <span className='text-sm'>CEO of SunPark</span>
                                            <div className='flex  justify-center my-5 text-[#C09578] text-sm'>
                                                <FaStar className='' />
                                                <FaStar className='' />
                                                <FaStar className='' />
                                                <FaStar className='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=''>
                                    <div className='text-center'>
                                        <p className='text-gray-600 font-semibold  lg:text-[17px] sm:text-[16px]  text-[15px] py-5'>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        <div className='mx-auto  text-center' >
                                            <figure>
                                                <img src="/images/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" className='mx-auto' alt="" />
                                            </figure>
                                            <p className='lg:text-lg sm:text-lg text-sm  text-center font-semibold  py-2'>Kathy Young</p>
                                            <span className='text-sm'>CEO of SunPark</span>
                                            <div className='flex  justify-center my-5 text-[#C09578] text-sm'>
                                                <FaStar className='' />
                                                <FaStar className='' />
                                                <FaStar className='' />
                                                <FaStar className='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=''>
                                    <div className='text-center'>
                                        <p className='text-gray-600 font-semibold  lg:text-[17px] sm:text-[16px]  text-[15px] py-5'>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        <div className='mx-auto  text-center' >
                                            <figure>
                                                <img src="/images/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" className='mx-auto' alt="" />
                                            </figure>
                                            <p className='lg:text-lg sm:text-lg text-sm  text-center font-semibold  py-2    '>Kathy Young</p>
                                            <span className='text-sm'>CEO of SunPark</span>
                                            <div className='flex  justify-center my-5 text-[#C09578] text-sm'>
                                                <FaStar className='' />
                                                <FaStar className='' />
                                                <FaStar className='' />
                                                <FaStar className='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
