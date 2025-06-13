import React from 'react'

export default function ProductDetails() {
    return (
        <>
            <section className='max-w-full' id='productDetails-content'>
                <div className='max-w-[1320px] lg:mx-auto mx-5' id='productDetails-content-mid'>
                    <div className='w-full grid lg:grid-cols-2 sm:grid-cols-2 gap-5'>
                        <div className='w-full' id='productDetails-content-images'>
                            <figure>
                                <img src="/images/1617829052195Caroline Study Tables__.jpg" alt="" />
                            </figure>
                        </div>

                        <div className='w-full' id='productDetails-content-description'>

                            <div id='productDetails-content-description-heading'>
                                <h2 className='text-2xl font-semibold capitalize'>Caroline Study Tables</h2>
                            </div>

                            <div id='productDetails-content-description-details'>
                                <p className='py-4 flex items-center gap-3'>
                                    <span className='line-through text-gray-400 font-semibold '>Rs. 3,000</span>
                                    <span className='text-xl font-bold text-[#c09578]'>Rs. 2,500</span>
                                </p>

                                <p className='leading-7 text-[#5A5A5A] font-semibold'>The Drawer is for your storage needs and camouflages perfectly with the tables carved front. The use of Sheesham ensures its longevity.</p>

                                <hr className='my-10  border-gray-200' />


                                <button type='submit' className='bg-[#c09578] text-white capitalize px-20 text-lg rounded-sm font-semibold py-2 cursor-pointer hover:bg-black hover:text-white'>add to cart</button>
                            </div>

                            <div className='my-8 font-[500]  ' id='product-details'>
                                <ul>
                                    <li className='py-1'>
                                        Code: jodST0011
                                    </li>

                                    <li className='py-1'>
                                        Dimension: 72L * 32H * 30W
                                    </li>

                                    <li className='py-1'>
                                        Estimate Delivery Days: "40-45" Days
                                    </li>

                                    <li className='py-1'>
                                        Category: Nest Of Tables
                                    </li>

                                    <li className='py-1'>
                                        Color: Cobalt Blue
                                    </li>

                                    <li className='py-1'>
                                        Material: Deodar Wood
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='my-5' id='desc'>
                        <h2 className='text-3xl font-semibold text-[#c09578]'>Description</h2>
                        <hr className='my-5  border-gray-200' />
                        <p className='leading-7'>The caroline table is sure to make you travel back in time, aesthetics that have a royal and periodic feel will enhance the look and feel of any space. The Drawer is for your storage needs and camouflages perfectly with the tables carved front. The use of Sheesham ensures its longevity.</p>
                    </div>

                </div>
            </section>
        </>
    )
}
