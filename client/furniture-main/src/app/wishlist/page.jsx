import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
export default function wishlist() {
    return (
        <>
            <section className='max-w-full my-8' id='cart'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='cart-mid'>
                    <div className='w-full text-center' id='muAccount-mid-heading'>
                        <h2 className=' lg:text-4xl sm:text-4xl text-2xl font-semibold'>My Wishlist</h2>
                        <div className='flex items-center justify-center gap-1 lg:my-3 sm:my-3 my-2 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/cart'} className='text-sm text-[#C09578]'> My Wishlist </Link >

                        </div>

                        <hr className='border-gray-200 my-5' />
                        <div id='cartItems'>
                            <figure>
                                <img src="/images/wishlist-Empty.jpg" className='mx-auto' alt="" />
                            </figure>
                            <p className='text-center text-sm'>Your Wishlist is empty!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
