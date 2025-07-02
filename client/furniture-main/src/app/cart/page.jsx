"use client"
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import CartSummary from './CartSummary';


export default function page() {

    let cart = useSelector((store) => store.cart.cart)
    let imagePath = useSelector((store) => store.cart.imagePath)
    console.log("Hello",cart)

    return (
        <>
            <section className='max-w-full my-8' id='cart'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='cart-mid'>
                    <div className='w-full text-center' id='muAccount-mid-heading'>
                        <h2 className=' lg:text-4xl sm:text-4xl text-2xl font-semibold'>Shopping Cart</h2>
                        <div className='flex items-center justify-center gap-1 lg:my-3 sm:my-3 my-2 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/cart'} className='text-sm text-[#C09578]'> Shopping Cart </Link >

                        </div>

                        <hr className='border-gray-200 my-5' />
                        {
                            cart?.length === 0
                                ?
                                <div id='cartItems'>
                                    <figure>
                                        <img src="/images/my-Order.jpg" className='mx-auto' alt="" />
                                    </figure>
                                    <p className='text-center text-sm'>Your shopping cart is empty!</p>
                                </div>
                                :
                                <>
                                    <CartItems cart={cart} imagePath={imagePath} />
                                    <CartSummary cart={cart} />
                                </>
                        }

                    </div>
                </div>
            </section>


        </>
    )
}
