"use client"
import React from 'react'
import Slider from 'react-slick'
import { FaRegHeart } from "react-icons/fa";
export default function UpSellProduct() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='max-w-full my-3' id='relatedProduct'>
                <div className='max-w-[1320px] lg:mx-auto sm:mx-2 mx-2' >
                    <div className='flex items-center gap-3'>
                        <h2 className='lg:text-2xl sm:text-lg text-sm font-semibold '>Upsell products
                        </h2>
                        <div className=' border-1  lg:w-[80%] sm:w-[70%] w-[50%] border-gray-200'></div>
                    </div>

                    <Slider {...settings} className='my-5 bestSellingItems'>
                        <div>
                            <div>
                                <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='w-full text-center my-2'>
                                        <span className='text-sm text-gray-600'>Side and End Tables</span>
                                        <p className='text-[15px] font-semibold py-2'>Hrithvik Stool</p>
                                        <hr className='w-[75%] mx-auto border-gray-200 ' />

                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                        </p>
                                        <div className='flex gap-1 justify-center py-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div>
                                <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='w-full text-center my-2'>
                                        <span className='text-sm text-gray-600'>Side and End Tables</span>
                                        <p className='text-[15px] font-semibold py-2'>Hrithvik Stool</p>
                                        <hr className='w-[75%] mx-auto border-gray-200 ' />

                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                        </p>
                                        <div className='flex gap-1 justify-center py-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div>
                            <div>
                                <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='w-full text-center my-2'>
                                        <span className='text-sm text-gray-600'>Side and End Tables</span>
                                        <p className='text-[15px] font-semibold py-2'>Hrithvik Stool</p>
                                        <hr className='w-[75%] mx-auto border-gray-200 ' />

                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                        </p>
                                        <div className='flex gap-1 justify-center py-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div>
                            <div>
                                <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='w-full text-center my-2'>
                                        <span className='text-sm text-gray-600'>Side and End Tables</span>
                                        <p className='text-[15px] font-semibold py-2'>Hrithvik Stool</p>
                                        <hr className='w-[75%] mx-auto border-gray-200 ' />

                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                        </p>
                                        <div className='flex gap-1 justify-center py-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div>
                                <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='w-full text-center my-2'>
                                        <span className='text-sm text-gray-600'>Side and End Tables</span>
                                        <p className='text-[15px] font-semibold py-2'>Hrithvik Stool</p>
                                        <hr className='w-[75%] mx-auto border-gray-200 ' />

                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                        </p>
                                        <div className='flex gap-1 justify-center py-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                           <div>
                            <div>
                                <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='w-full text-center my-2'>
                                        <span className='text-sm text-gray-600'>Side and End Tables</span>
                                        <p className='text-[15px] font-semibold py-2'>Hrithvik Stool</p>
                                        <hr className='w-[75%] mx-auto border-gray-200 ' />

                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                        </p>
                                        <div className='flex gap-1 justify-center py-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                           <div>
                            <div>
                                <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='w-full text-center my-2'>
                                        <span className='text-sm text-gray-600'>Side and End Tables</span>
                                        <p className='text-[15px] font-semibold py-2'>Hrithvik Stool</p>
                                        <hr className='w-[75%] mx-auto border-gray-200 ' />

                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                        </p>
                                        <div className='flex gap-1 justify-center py-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}
