import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add_Sub_Category() {
    const [parentCatlist, setParentCatlist] = useState([]);
    const [formValue, setFormValue] = useState({
        subcategoryName: '',
        subcategoryOrder: '',
        parentCategory: '',
        oldImage: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    // Dropify setup
    useEffect(() => {
        if (formValue.oldImage) {
            setTimeout(() => {
                $('.dropify').dropify({
                    defaultFile: `${apiBaseUrl}${formValue.oldImage}`
                });
            }, 300);
        } else {
            setTimeout(() => {
                $('.dropify').dropify();
            }, 300);
        }
    }, [formValue.oldImage]);

    useEffect(() => {
        getParentCategory();

        if (id) {
            axios.get(`${apiBaseUrl}subcategory/edit-row-data/${id}`)
                .then(res => res.data)
                .then(finalRes => {
                    const data = finalRes.data;
                    setFormValue({
                        subcategoryName: data.subcategoryName,
                        subcategoryOrder: data.subcategoryOrder,
                        parentCategory: data.parentCategory,
                        oldImage: data.subcategoryImage
                    });
                });
        }
    }, [id]);

    const getParentCategory = () => {
        axios.get(`${apiBaseUrl}subcategory/parentcategory`)
            .then(res => res.data)
            .then(finalRes => setParentCatlist(finalRes.data));
    };

    const saveSubCategory = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (id) {
            formData.append('oldImage', formValue.oldImage);
            axios.put(`${apiBaseUrl}subcategory/update/${id}`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Updated successfully");
                        setTimeout(() => navigate('/view-Sub-category'), 2000);
                    } else {
                        toast.error(finalRes.msg || "Something went wrong");
                    }
                });
        } else {
            axios.post(`${apiBaseUrl}subcategory/insert`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Added successfully");
                        e.target.reset();
                        $('.dropify').data('dropify').clearElement();
                        setTimeout(() => navigate('/view-Sub-category'), 2000);
                    } else {
                        toast.error(finalRes.msg || "Something went wrong");
                    }
                });
        }
    };
    
    return (
        <div>
            <ToastContainer />
            <section className='w-full'>
                <div className='border-b-2 text-gray-300'></div>
                <div className='py-3'>
                    <nav className='mt-1'>
                        <ul className='flex items-center'>
                            <li><Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span></Link></li>&nbsp;
                            <li><Link to={'/view-Sub-category'}><span className='font-bold text-gray-800'>/&nbsp;Sub Category</span></Link></li>
                            <li><span className='font-bold text-gray-800'>/&nbsp;{id ? 'Edit' : 'Add'}</span></li>
                        </ul>
                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>{id ? "Edit" : "Add"} Sub Category</h3>
                        <form onSubmit={saveSubCategory} className='py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                            <div className='flex gap-5'>
                                <div className='w-[30%]'>
                                    <label className="mb-1 font-medium block">Subcategory Image</label>
                                    <>
                                        <style>{`
                                    .dropify-wrapper .dropify-message span {
                                          font-weight: normal !important;
                                     font-size: 20px !important;
                                             }
                                      `}</style>
                                        <input
                                            type="file"
                                            name="subcategoryImage"
                                            className="dropify"
                                            data-height="250"
                                        />
                                    </>
                                </div>
                                <div className='w-[62%]'>
                                    <div className='mb-3 p-1'>
                                        <label className='p-1 block font-medium text-gray-900'>Parent Category Name</label>
                                        <select
                                            name='parentCategory'
                                            value={formValue.parentCategory}
                                            onChange={(e) => setFormValue({ ...formValue, parentCategory: e.target.value })}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                        >
                                            <option value="">Select Category</option>
                                            {parentCatlist.map((items, index) =>
                                                <option key={index} value={items._id}>{items.categoryName}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='mb-3 p-1'>
                                        <label className='p-1 block font-medium text-gray-900'>Subcategory Name</label>
                                        <input
                                            type='text'
                                            name='subcategoryName'
                                            value={formValue.subcategoryName}
                                            onChange={(e) => setFormValue({ ...formValue, subcategoryName: e.target.value })}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                            placeholder='Subcategory Name'
                                        />
                                    </div>
                                    <div className='mb-3 p-1'>
                                        <label className='p-1 block font-medium text-gray-900'>Order</label>
                                        <input
                                            type='number'
                                            name='subcategoryOrder'
                                            value={formValue.subcategoryOrder}
                                            onChange={(e) => setFormValue({ ...formValue, subcategoryOrder: e.target.value })}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                            placeholder='Order'
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 my-3 mx-1.5'>
                                {id ? "Update" : "Add"} Sub Category
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}