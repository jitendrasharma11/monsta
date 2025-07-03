"use client";
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from "react-icons/fa6";

export default function CustomerReview({ testimonials, testimonialsimagePath }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className='max-w-full py-5'>
            <div className='max-w-[1320px] mx-auto'>
                <div className='text-center' id='heading'>
                    <h2 className='lg:text-2xl sm:text-2xl text-xl font-semibold'>What Our Customers Say?</h2>
                </div>
                <div className='w-[80%] mx-auto'>
                    <Slider className='customerSlider' {...settings}>
                        {
                            testimonials?.map((item, index) => (
                                <div key={index}>
                                    <div className='text-center'>
                                        <p className='text-gray-600 lg:text-[17px] sm:text-[16px] text-[15px] py-5'>
                                            {item.testimonialsMessage}
                                        </p>
                                        <div className='mx-auto text-center'>
                                            <figure>
                                                <img
                                                    src={testimonialsimagePath + item.testimonialsImage}
                                                    alt={item.testimonialsName}
                                                    className='w-[80px] h-[80px] rounded-full object-cover mx-auto'
                                                />
                                            </figure>
                                            <p className='lg:text-lg sm:text-lg text-sm font-semibold py-2'>
                                                {item.testimonialsName}
                                            </p>
                                            <span className='text-sm'>{item.testimonialsDesignation}</span>
                                            <div className='flex justify-center my-5 text-[#C09578] text-sm'>
                                                {[...Array(item.testimonialsRating)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}