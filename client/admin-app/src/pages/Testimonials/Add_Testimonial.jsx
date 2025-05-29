import React from 'react'
import { Link } from 'react-router'
import { useEffect } from "react";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";

export default function Add_Testimonial() {

    useEffect(() => {
        $(".dropify").dropify({
            messages: {
                default: "Drag and drop",
                error: 'Ooops, something wrong happended.'
            },
            tpl: {
                loader: '<div class="dropify-loader"></div>',
                errorLine: '<p class="dropify-error">{{ error }}</p>',
                message: `<div class="dropify-message"><span class="file-icon" /> <p class="text-[25px]">{{ default }}</p></div>`,
            },
        });
    });



  return (
    <div>
                                  <section className='w-full'>
                                    <div className='border-b-2 text-gray-300'></div>
                                    <div className='py-3'>
                                        <nav className='mt-1'>
                                            <ul className='flex items-center'>
                                                <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
                                                <li> <Link to={'/user'}><span className='font-bold text-gray-800'>/&nbsp;Testimonial</span> </Link> </li>
                                                <li> <span className='font-bold text-gray-800'>/&nbsp;Add</span></li>
                                            </ul>
                    
                                        </nav>
                                    </div>
                                    <div className='border-b-2 text-gray-300'></div>
                                    <div className='w-full min-h-[620px]'>
                                        <div className='max-w-[1220px] mx-auto py-5'>
                                            <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>Add Testimonial</h3>
                                            <form className=' py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                                                <div className='flex gap-5'>
                                                    <div className='w-[30%]'>
                                                        <label className="mb-1">
                                                            <b>Testimonial Image</b>
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="dropify text-[15px]"
                                                            data-height="250"
                                                        />
                                                    </div>
                                                    <div className='w-[62%]'>
                    
                                                        <div className='mb-3 p-1'>
                                                            <label for="name" className='p-1 block font-medium text-gray-900'>Name </label>
                                                            <input type='text' name='name' id='name' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Name' />
                                                             
                                                        </div>

                                                        <div className='mb-3 p-1'>
                                                            <label for="designation" className='p-1 block font-medium text-gray-900'>Designation</label>
                                                            <input type='text' name='designation' id='designation' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Designation' />
                                                        </div>

                                                        <div className='mb-3 p-1'>
                                                            <label for="rating" className='p-1 block font-medium text-gray-900'>Rating </label>
                                                            
                                                            <input type='number' name='rating' id='rating' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Rating ' />
                                                        </div>
                                                        <div className='mb-3 p-1'>
                                                            <label for="order" className='p-1 block font-medium text-gray-900'>Order</label>
                                                            <input type='number' name='order' id='order' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Order' />
                                                        </div>
                                                        <div className='mb-3 p-1'>
                                                            <label for="message" className='p-1 block font-medium text-gray-900'>Message</label>
                                                        <textarea name='message' id='message' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Message' />
                                                        </div>
                    
                                                       
                    
                                                    </div>
                                                </div>
                    
                                                <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 my-3 mx-1.5'>Add Testimonial
                    
                                                </button>
                                            </form>
                                        </div>
                    
                                    </div>
                    
                    
                                </section>




    </div>
  )
}
export{Add_Testimonial}