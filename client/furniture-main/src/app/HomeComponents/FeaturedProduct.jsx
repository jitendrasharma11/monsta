import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";

export default function FeaturedProduct() {

    let [featuredItems, setfeaturedItems] = useState(1)

    return (
        <>
            <section className='max-w-full my-5' id='featturedProduct'>
                <div className='max-w-[1320px] lg:mx-auto sm:mx-2 mx-2 ' id='featuredProductItems'>
                    <div className='flex justify-center lg:py-6  '>
                        <button className={`capitalize lg:text-xl sm:text-xl text-sm border-2   lg:py-3 lg:px-8 sm:py-3 sm:px-8 px-4 py-3 font-semibold  ${featuredItems == 1 ? ' border-[#C09578] text-[#C09578]': 'border-gray-200'}  hover:cursor-pointer`} onClick={() => setfeaturedItems(1)}>featured</button>
                        <button className={`capitalize lg:text-xl sm:text-xl text-sm border-2   lg:py-3 lg:px-8 sm:py-3 sm:px-8 px-4 py-3 font-semibold  ${featuredItems == 2 ? ' border-[#C09578] text-[#C09578]': 'border-gray-200'}  hover:cursor-pointer`} onClick={() => setfeaturedItems(2)}>new arrivals</button>
                        <button className={`capitalize lg:text-xl sm:text-xl text-sm border-2   lg:py-3 lg:px-8 sm:py-3 sm:px-8 px-4 py-3 font-semibold  ${featuredItems == 3 ? ' border-[#C09578] text-[#C09578]': 'border-gray-200'}  hover:cursor-pointer`} onClick={() => setfeaturedItems(3)}>onsale</button>
                    </div>
                    <div className={`grid lg:grid-cols-4 lg:mx-0 sm:mx-0  mx-3   sm:grid-cols-3 gap-4 my-6 gap-y-6  ${featuredItems == 1 ? 'block' : 'hidden'}`}>
                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829892944Evan Coffee Table__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Coffee Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Evan Coffee Table</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
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



                    <div className={`grid lg:grid-cols-4 lg:mx-0 sm:mx-0  mx-3  sm:grid-cols-3 gap-4 my-6 gap-y-6  ${featuredItems == 2 ? 'block' : 'hidden'}`}>
                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Side and End Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Hrithvik Stool</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.7,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'> Rs.6,000</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829892944Evan Coffee Table__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Coffee Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Evan Coffee Table</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
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



                    <div className={`grid lg:grid-cols-4 lg:mx-0 sm:mx-0  mx-3 sm:grid-cols-3 gap-4 my-6 gap-y-6  ${featuredItems == 3 ? 'block' : 'hidden'}`}>
                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617828789760Rex Console Table__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Console Table</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Rex Console Table</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,200</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829892944Evan Coffee Table__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Coffee Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Evan Coffee Table</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
                                    <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <div>
                                        <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg shadow-gray-300 bg-white '>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                            <div className='text-center '>
                                <p className='text-sm py-3'>Nest Of Tables</p>
                                <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Caroline Study Tables</h2>
                                <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                <p className='py-3'>
                                    <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.3,000</span>&nbsp;&nbsp;
                                    <span className='text-[16px] text-[#C09578] font-bold'>Rs.2,500</span>
                                </p>
                                <div className='flex gap-1 justify-center my-5'>
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
            </section>
            
        </>
    )
}
