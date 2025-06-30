"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner({ sliderData, sliderStaticPatch }) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <section className="max-w-full" id="bannerSection">


                <Slider {...settings} className='homeSlider'>

                    {sliderData.map((value, index) => {
                        
                        let { sliderImage, sliderTitle } = value;

                        return (
                            <div key={index}>
                                <figure>
                                    <img
                                        src={sliderStaticPatch + encodeURIComponent(sliderImage)}
                                        alt={sliderTitle}
                                        className="lg:h-auto sm:h-auto h-[314px] object-cover w-full"
                                    />
                                </figure>
                            </div>
                        );
                    })}

                </Slider>
            </section>
        </>
    )
}
