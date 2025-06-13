import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { GiWorld } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
export default function BestSelling() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
            <section className='max-w-full my-3' id='bestSelling'>
                <div className='max-w-[1320px] lg:mx-auto sm:mx-2 mx-2' >
                    <div className='flex items-center gap-3'>
                        <h2 className='lg:text-2xl sm:text-lg text-sm font-semibold '>Bestselling Products
                        </h2>
                        <div className=' border-1  lg:w-[80%] sm:w-[70%] w-[50%] border-gray-200'></div>
                    </div>

                    <Slider {...settings}  className='my-5 bestSellingItems'>
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

            <section className='max-w-full my-8  bg-[#f8f9f9] '>
                <div className='max-w-[1320px] mx-auto py-15'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-5 justify-center'>
                        <div className='group ' >
                            <div className='w-[70px] h-[70px] rounded-[50%] bg-transparent border-2 flex  justify-center items-center  group-hover:border-[#C09578] mx-auto my-3'>
                                <GiWorld className='text-xl group-hover:text-[#C09578]' />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className=' text-lg font-semibold capitalize'>Free Shipping</h2>
                                <p className='text-[15px] text-gray-600 py-2 font-normal'>Free shipping on all order</p>
                            </div>
                        </div>

                        <div className='group ' >
                            <div className='w-[70px] h-[70px] rounded-[50%] bg-transparent border-2 flex  justify-center items-center  group-hover:border-[#C09578] mx-auto my-3'>
                                <IoMdCheckmarkCircleOutline  className='text-xl group-hover:text-[#C09578]' />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className=' text-lg font-semibold capitalize'>Money Return</h2>
                                <p className='text-[15px] text-gray-600 py-2 font-normal'>Back guarantee under 7 days</p>
                            </div>
                        </div>

                        <div className='group ' >
                            <div className='w-[70px] h-[70px] rounded-[50%] bg-transparent border-2 flex  justify-center items-center  group-hover:border-[#C09578] mx-auto my-3'>
                                <FaRegClock  className='text-xl group-hover:text-[#C09578]' />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className=' text-lg font-semibold capitalize'>Online Support</h2>
                                <p className='text-[15px] text-gray-600 py-2 font-normal'>Support online 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
