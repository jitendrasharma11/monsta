import React from 'react'
import { Link } from 'react-router'
import { useEffect } from "react";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";

export default function Add_Product() {


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
                            <li> <Link to={'/add-product'}><span className='font-bold text-gray-800'>/&nbsp;Product</span> </Link> </li>
                            <li> <span className='font-bold text-gray-800'>/&nbsp;Add</span></li>
                        </ul>

                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>Add Product</h3>
                        <form className=' py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                            <div className='grid grid-cols-3 gap-[10px]'>


                                <div id='images'>
                                    <div id='img-1'>
                                        <label className="mb-1">
                                            <b>Product Image</b>
                                        </label>
                                        <input
                                            type="file"
                                            className="dropify text-[15px]"
                                            data-height="250"
                                        />

                                    </div>

                                    <div id='img-2'>
                                        <label className="mb-1">
                                            <b>Back Image</b>
                                        </label>
                                        <input
                                            type="file"
                                            className="dropify text-[15px]"
                                            data-height="250"
                                        />


                                    </div>
                                    <div id='img-3'>
                                        <label className="mb-1">
                                            <b>Gallery Image</b>
                                        </label>
                                        <input
                                            type="file"
                                            className="dropify text-[15px]"
                                            data-height="250"
                                        />
                                    </div>

                                </div>
                                <div id='middle'>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Product Name </label>
                                        <input type='name' name='product_name' id='pro_id' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Product Name' />
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Select Sub Category</label>
                                        <select name='subCatName' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Select Sub Category</option>
                                                                <option value='Mens'>Men's</option>
                                                                <option value='Women'>Women</option>
                                                                <option value='Mobile'>Mobile</option>
                                                                <option value='Laptops'>Laptops</option>
                                                             </select>
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Select Material </label>
                                        <select name='material_name' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Select Material</option>
                                                                <option value='Cotton'>Cotton</option>
                                                                <option value='Plastic'>Plastic</option>
                                                                <option value='Diamond'>Diamond</option>
                                                                <option value='Polyster'>Polyster</option>
                                                             </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Select Product Type</label>
                                        <select name='product_type' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Select Product Type</option>
                                                                <option value='Featured'>Featured</option>
                                                                <option value='New Arrivals'>New Arrivals</option>
                                                                <option value='No Sale'>No Sale</option>
                                                               
                                                             </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Is Top Rated </label>
                                        <select name='top_rated' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Nothing Selected</option>
                                                                <option value='Yes'>Yes</option>
                                                               
                                                                <option value='No'>No</option>
                                                               
                                                             </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Actual Price</label>
                                        <input type='number' name='actual_price' id='actual_price' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                     border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Actual Price' />
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Total In stocks</label>
                                        <input type='number' name='stocks' id='stocks' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                     border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Total In stocks' />
                                    </div>
                                </div>
                                <div id='right'>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Select Parent Category  </label>
                                        <select name='parentCatName' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Parent Category</option>
                                                                <option value='Mens'>Men's</option>
                                                                <option value='Women'>Women</option>
                                                                <option value='Mobile'>Mobile</option>
                                                                <option value='Laptops'>Laptops</option>
                                                             </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Select Sub Sub Category</label>
                                        <select name='subCatName2' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Sub Sub Category</option>
                                                                <option value='Mens'>Men's</option>
                                                                <option value='Women'>Women</option>
                                                                <option value='Mobile'>Mobile</option>
                                                                <option value='Laptops'>Laptops</option>
                                                             </select>
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Select Colour</label>
                                        <select name='parentCatName' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Colour</option>
                                                                <option value='Red'>Red</option>
                                                                <option value='Blue'>Blue</option>
                                                                <option value='Yellow'>Yellow</option>
                                                                <option value='Pink'>Pink</option>
                                                             </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Is Best Selling</label>
                                        <select name='best_selling' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Nothing Selected</option>
                                                                <option value='Yes'>Yes</option>
                                                                 <option value='No'>No</option>
                                                              </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Is UpSell </label>
                                        <select name='upsell' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                                                <option>Nothing Selected</option>
                                                                <option value='Yes'>Yes</option>
                                                                 <option value='No'>No</option>
                                                              </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="price" className='p-1 block font-medium text-gray-900'>Sale Price</label>
                                        <input type='number' name='sele_price' id='s_price' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
 border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Sale Price' />
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Order</label>
                                        <input type='number' name='corder' id='corder' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
 border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Order' />
                                    </div>
                                </div>



                            </div>

                            <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 my-3 mx-1.5'>Create Product

                            </button>
                        </form>
                    </div>

                </div>


            </section>

        </div>
    )
}
export { Add_Product }