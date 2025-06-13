"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
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
                    <div>
                        <div>
                            <figure>
                                <img src="/images/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137 (1).jpg" className='lg:h-auto sm:h-auto h-[314px] object-cover' alt="" />
                            </figure>
                        </div>
                    </div>

                    <div>
                        <div>
                            <figure>
                                <img src="/images/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153 (1).jpg" className='lg:h-auto sm:h-auto h-[314px] object-cover' alt="" />
                            </figure>
                        </div>
                    </div>

                    <div>
                        <div>
                            <figure>
                                <img src="/images/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062 (1).jpg" className='lg:h-auto sm:h-auto h-[314px] object-cover' alt="" />
                            </figure>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    )
}
