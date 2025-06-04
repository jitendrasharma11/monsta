import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useEffect } from "react";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


export default function Add_Sub_Category() {

    let [parentCatlist, setparentCatlist] = useState([])
     

    let navigate = useNavigate()
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/

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
    let getParentCategory = () => {
        axios.get(`${apiBaseUrl}subcategory/parentcategory`)
            .then((res) => res.data)
            .then((finalRes) => {
                setparentCatlist(finalRes.data)
            })
    }

    let savesubCategory = (e) => {
        e.preventDefault()

    

        let formValue = new FormData(e.target)
        axios.post(`${apiBaseUrl}subcategory/insert`, formValue)
            .then((res) => res.data)
            .then((finalRes) => {
                
                $('.dropify').data('dropify').clearElement();
                console.log(finalRes.status)
                if (finalRes.status) {
                    toast.success(finalRes.msg)

                    setTimeout(() => {
                        navigate('/view-Sub-category_2')
                    }, 2000)

                }
                
                else {
                    Toast.error(finalRes.msg)
                }
                
                e.target.reset();
            })
    }
    useEffect(() => {
        getParentCategory()
    }, [])
    return (
        <div>
            <ToastContainer/>
            <section className='w-full'>
                <div className='border-b-2 text-gray-300'></div>
                <div className='py-3'>
                    <nav className='mt-1'>
                        <ul className='flex items-center'>
                            <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
                            <li> <Link to={'/user'}><span className='font-bold text-gray-800'>/&nbsp;Sub Category</span> </Link> </li>
                            <li> <span className='font-bold text-gray-800'>/&nbsp;Add</span></li>
                        </ul>

                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>

                        <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>Add Sub Category</h3>

                        <form onSubmit={savesubCategory} className=' py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                            <div className='flex gap-5'>
                                <div className='w-[30%]'>
                                    <label className="mb-1">
                                        <b>Category Image</b>
                                    </label>
                                    <input
                                        name='subcategoryImage'
                                        type="file"
                                        className="dropify text-[15px]"
                                        data-height="250"
                                    />
                                </div>
                                <div className='w-[62%]'>

                                    <div className='mb-3 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Parent Category Name </label>

                                        <select name='parentCategory' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                 border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option>Select Category</option>
                                            {parentCatlist.map((items, index) =>
                                                <option key={index} value={items._id}>{items.categoryName}</option>
                                            )}

                                        </select>
                                    </div>
                                    <div className='mb-3 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Category Name</label>
                                        <input type='name' name='subcategoryName' id='cname' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                             border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Category Name' />
                                    </div>

                                    <div className='mb-3 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Order</label>
                                        <input type='number' name='subcategoryOrder' id='corder' className='text-[20px] border-2 py-2 px-2 block shadow-md
                                             border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Order' />
                                    </div>

                                </div>
                            </div>

                            <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 my-3 mx-1.5'>Adds 777 Category

                            </button>
                        </form>
                    </div>

                </div>


            </section>
        </div>
    )
}
export { Add_Sub_Category }