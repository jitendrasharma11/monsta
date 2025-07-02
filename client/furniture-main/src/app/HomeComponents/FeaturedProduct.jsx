"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { fetchCart } from '../slice/cartSlice';

export default function FeaturedProduct({ productImagePath, productData, productType, setproductType }) {


    return (
        <>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
            <section className='max-w-full my-5' id='featturedProduct'>
                <div className='max-w-[1320px] lg:mx-auto sm:mx-2 mx-2 ' id='featuredProductItems'>
                    <div className='flex justify-center lg:py-6  '>
                        <button className={`capitalize lg:text-xl sm:text-xl text-sm border-2   lg:py-3 lg:px-8 sm:py-3 sm:px-8 px-4 py-3 font-semibold  ${productType == 1 ? ' border-[#C09578] text-[#C09578]' : 'border-gray-200'}  hover:cursor-pointer`} onClick={() => setproductType(1)}>featured</button>
                        <button className={`capitalize lg:text-xl sm:text-xl text-sm border-2   lg:py-3 lg:px-8 sm:py-3 sm:px-8 px-4 py-3 font-semibold  ${productType == 2 ? ' border-[#C09578] text-[#C09578]' : 'border-gray-200'}  hover:cursor-pointer`} onClick={() => setproductType(2)}>new arrivals</button>
                        <button className={`capitalize lg:text-xl sm:text-xl text-sm border-2   lg:py-3 lg:px-8 sm:py-3 sm:px-8 px-4 py-3 font-semibold  ${productType == 3 ? ' border-[#C09578] text-[#C09578]' : 'border-gray-200'}  hover:cursor-pointer`} onClick={() => setproductType(3)}>onsale</button>
                    </div>
                    <div className={`grid lg:grid-cols-4 lg:mx-0 sm:mx-0  mx-3   sm:grid-cols-3 gap-4 my-6 gap-y-6 `}>
                        {
                            productData.map((items, index) => {
                                return (
                                    <ProductItems items={items} productImagePath={productImagePath} key={index} />
                                )
                            })
                        }

                    </div>

                </div>
            </section>

        </>
    )
}

function ProductItems({ items, productImagePath }) {


    let dispatch = useDispatch()

    let  router = useRouter();

    let token = useSelector((store) => store.login.token)

    let [color, setColor] = useState(items.productColor[0]._id)

    let user = useSelector((store) => store.login.user)

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

    let addToCart = () => {



        if (user) {

            let obj = {
                productId: items._id,
                productName: items.productName,
                productImage: items.productImage,
                productPrice: items.productsalePrice,
                productQuantity: 1,
                color,
            }
            // console.log("obj",obj)

            axios.post(`${apiBaseUrl}cart/add-to-cart`, obj, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => {
                    if (res.data.status) {
                        toast.success("Item added to cart successfully!");
                        dispatch(fetchCart())
                    }
                    else {
                        // alert(res.data.msg)
                        toast.error(res.data.msg)
                    }
                })

        }
        else {

            // alert("Please login to add to cart")
            toast.warn("Please login to add to cart");
            
            setTimeout(() => {
                router.push('/login');
              }, 2000);

        }

    }

    return (
        <div className='shadow-lg shadow-gray-300 bg-white '>
            <Link href={`/product-details/${items.slug}`}>
                <figure>
                    <img src={productImagePath + items.productImage} className='w-full h-[250px] object-cover' alt="" />
                </figure>
            </Link>
            <div className='text-center'>
                <Link href={`/product-details/${items.slug}`}>
                    <p className='text-sm py-3'>
                        {items.subSubCategory.subsubcategoryName}
                    </p>
                    <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>
                        {items.productName}
                    </h2>
                    <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                    <p className='py-3'>
                        <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs. {items.productActualPrice}</span>&nbsp;&nbsp;
                        <span className='text-[16px] text-[#C09578] font-bold'>Rs. {items.productsalePrice}</span>
                    </p>
                </Link>
                <div className="w-[80%] mx-auto mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Select Color</label>
                    <div className="relative">
                        <select
                            onChange={(e) => setColor(e.target.value)}
                            className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-[#C09578]"
                        >
                            {items.productColor.map((colors, index) => (
                                <option value={colors._id} key={index}>{colors.colorName}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='flex gap-1 justify-center my-5'>
                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                        <FaRegHeart className='text-xl' />
                    </div>
                    <div>
                        <button onClick={addToCart} className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}