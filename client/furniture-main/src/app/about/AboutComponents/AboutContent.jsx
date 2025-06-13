import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
export default function AboutContent() {
    return (
        <>
            <section className='max-w-full my-8' id='about-us'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='myAccount-mid'>
                    <div className='w-full text-center' id='muAccount-mid-heading'>
                        <h2 className=' lg:text-4xl sm:text-4xl text-xl font-semibold'>About Us</h2>
                        <div className='flex items-center justify-center gap-1 lg:my-3 sm:my-3 my-2 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/about'} className='text-sm text-[#C09578]'> About Us </Link >

                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>
                    <div className='py-5' id='about-us-image'>
                        <figure>
                            <img src="/images/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" className='mx-auto' alt="" />
                        </figure>
                        <div className='text-center my-3' id='about-us-content'>
                            <h2 className='lg:text-2xl sm:text-2xl text-xl font-semibold'>Welcome to Monsta!</h2>
                            <p className='lg:text-[15px] text-sm text-[#5a5a5a] font-normal py-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. </p>
                            <p className='text-[#c09578] lg:text-base text-sm italic'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
