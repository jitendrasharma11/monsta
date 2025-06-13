import React from 'react'
import { FaRegSmile } from "react-icons/fa";
export default function WhyChoose() {
    return (
        <>
            <section className='max-w-full mb-10' id='whyChoose'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='whyChoose-mid'>

                    <div className='text-center' id='whyChoose-mid-heading'>
                        <h2 className='lg:text-2xl sm:text-2xl text-xl font-semibold'>Why chose us?</h2>
                        <div className='w-full grid lg:grid-cols-3 sm:grid-cols-3 gap-8 my-3 ' id='whyChoose-mid-content'>
                            <div className='whyChoose-mid-content-items'>
                                <figure>
                                    <img src="/images/c65c4789-c1eb-4cfc-9961-3ab025317e08-1670161041.jpg" className='mx-auto' alt="" />
                                </figure>
                                <h3 className='text-[14px] font-semibold'>Creative Design</h3>
                                <p className='py-3 lg:text-[15px] text-sm text-[#5A5A5A]'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                            </div>

                            <div className='whyChoose-mid-content-items'>
                                <figure>
                                    <img src="/images/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg" className='mx-auto' alt="" />
                                </figure>
                                <h3 className='text-[14px] font-semibold'>100% Money Back Guarantee</h3>
                                <p className='py-3 lg:text-[15px] text-sm text-[#5A5A5A]'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                            </div>

                            <div className='whyChoose-mid-content-items'>
                                <figure>
                                    <img src="/images/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg" className='mx-auto' alt="" />
                                </figure>
                                <h3 className='text-[14px] font-semibold'>Online Support 24/7</h3>
                                <p className='py-3 lg:text-[15px] text-sm text-[#5A5A5A]'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2  my-10 gap-5' id='mission-vision'>
                        <div>
                            <figure>
                                <img src="/images/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" className='mx-auto' alt="" />
                            </figure>
                            <div className='my-4 text-center' id='misson-vision-content'>
                                <h4 className=' text-sm font-semibold'>What Do We Do?</h4>
                                <p className='leading-6 py-2 text-sm text-[#5A5A5A]'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            </div>
                        </div>

                        <div>
                            <figure>
                                <img src="/images/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" className='mx-auto' alt="" />
                            </figure>
                            <div className='my-4 text-center' id='misson-vision-content'>
                                <h4 className=' text-sm font-semibold'>Our Mission</h4>
                                <p className='leading-6 py-2 text-sm text-[#5A5A5A]'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            </div>
                        </div>

                        <div>
                            <figure>
                                <img src="/images/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" className='mx-auto' alt="" />
                            </figure>
                            <div className='my-4 text-center' id='misson-vision-content'>
                                <h4 className=' text-sm font-semibold'>History Of Us</h4>
                                <p className='leading-6 py-2 text-sm text-[#5A5A5A]'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}
