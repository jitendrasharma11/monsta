"use client"
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import ProductDetails from './ProductDetailsComponent/ProductDetails';
import RelatedProduct from './ProductDetailsComponent/RelatedProduct';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UpSellProduct from './ProductDetailsComponent/UpSellProduct';
export default function page() {
    return (
        <>
            <section className='max-w-full my-8' id='productDetails'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='productDetails-mid'>
                    <div className='w-full text-center' id='muAccount-mid-heading'>
                        <h2 className=' text-4xl font-semibold'>productDetails</h2>
                        <div className='flex items-center justify-center gap-1 my-3 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/product-details'} className='text-sm text-[#C09578]'> productDetails</Link >

                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>
                </div>
            </section>

            <ProductDetails />
            <RelatedProduct />
            <UpSellProduct/>
        </>
    )
}
