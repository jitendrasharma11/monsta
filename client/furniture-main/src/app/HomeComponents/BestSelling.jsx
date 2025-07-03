"use client";
import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { GiWorld } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCart } from '../slice/cartSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function BestSelling({ bestSellingData, bestSellingPath }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 800, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
            <section className='max-w-full my-3' id='bestSelling'>
                <div className='max-w-[1320px] mx-auto'>
                    <div className='flex items-center gap-3'>
                        <h2 className='lg:text-2xl text-lg font-semibold'>Bestselling Products</h2>
                        <div className='border-1 w-[80%] border-gray-200'></div>
                    </div>

                    <Slider {...settings} className='my-5 bestSellingItems'>
                        {bestSellingData?.map((item, index) => (
                            <ProductItem key={index} item={item} bestSellingPath={bestSellingPath} />
                        ))}
                    </Slider>
                </div>
            </section>

            <section className='max-w-full my-8 bg-[#f8f9f9]'>
                <div className='max-w-[1320px] mx-auto py-15'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-5 justify-center'>
                        {[{
                            Icon: GiWorld, title: "Free Shipping", desc: "Free shipping on all order"
                        }, {
                            Icon: IoMdCheckmarkCircleOutline, title: "Money Return", desc: "Back guarantee under 7 days"
                        }, {
                            Icon: FaRegClock, title: "Online Support", desc: "Support online 24 hours a day"
                        }].map((info, i) => (
                            <div className='group' key={i}>
                                <div className='w-[70px] h-[70px] rounded-full border-2 flex justify-center items-center group-hover:border-[#C09578] mx-auto my-3'>
                                    <info.Icon className='text-xl group-hover:text-[#C09578]' />
                                </div>
                                <div className='text-center mt-5'>
                                    <h2 className='text-lg font-semibold capitalize'>{info.title}</h2>
                                    <p className='text-[15px] text-gray-600 py-2 font-normal'>{info.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function ProductItem({ item, bestSellingPath }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const token = useSelector((state) => state.login.token);
    const user = useSelector((state) => state.login.user);
    const [color, setColor] = useState(item.productColor?.[0]?._id || '');
    const apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

    const handleAddToCart = () => {
        if (!user) {
            toast.warn("Please login to add to cart");
            return setTimeout(() => router.push("/login"), 2000);
        }

        const obj = {
            productId: item._id,
            productName: item.productName,
            productImage: item.productImage,
            productPrice: item.productsalePrice,
            productQuantity: 1,
            color
        };

        axios.post(`${apiBaseUrl}cart/add-to-cart`, obj, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            if (res.data.status) {
                toast.success("Item added to cart!");
                dispatch(fetchCart());
            } else {
                toast.error(res.data.msg);
            }
        });
    };

    return (
        <div className='bg-white shadow-lg shadow-gray-400 mx-3'>
            <Link href={`/product-details/${item.slug}`}>
                <figure>
                    <img
                        src={bestSellingPath + item.productImage}
                        alt={item.productName}
                        className='w-full h-[250px] object-cover hover:cursor-pointer'
                    />
                </figure>
            </Link>
            <div className='w-full text-center my-2'>
                <Link href={`/product-details/${item.slug}`}>
                    <span className='text-sm text-gray-600'>
                        {item?.subSubCategory?.subsubcategoryName || "Sub Sub Category"}
                    </span>
                    <p className='text-[15px] font-semibold py-2'>{item.productName}</p>
                </Link>
                <hr className='w-[75%] mx-auto border-gray-200' />
                <p className='py-3'>
                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.{item.productActualPrice}</span>&nbsp;&nbsp;
                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.{item.productsalePrice}</span>
                </p>

                {/* Color Selection */}
                <div className="w-[80%] mx-auto mt-2">
                    <label className="block text-sm font-medium text-left">Select Color</label>
                    <select
                        onChange={(e) => setColor(e.target.value)}
                        className="block w-full border border-gray-300 py-2 px-3 rounded focus:ring-2 focus:ring-[#C09578]"
                    >
                        {item.productColor?.map((c, idx) => (
                            <option key={idx} value={c._id}>{c.colorName}</option>
                        ))}
                    </select>
                </div>

                <div className='flex gap-1 justify-center py-5'>
                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                        <FaRegHeart className='text-xl' />
                    </div>
                    <button onClick={handleAddToCart} className='capitalize border-0 bg-gray-200 text-sm text-gray-700 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}