import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add_Sub_Category_2() {
    const [parentCatList, setParentCatList] = useState([]);
    const [subCatList, setSubCatList] = useState([]);
    const [formValue, setFormValue] = useState({
        subsubcategoryName: '',
        subsubcategoryOrder: '',
        parentCategory: '',
        subCategory: '',
        oldImage: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    useEffect(() => {
        setTimeout(() => {
            if (formValue.oldImage) {
                $('.dropify').dropify({
                    defaultFile: `${apiBaseUrl}${formValue.oldImage}`
                });
            } else {
                $('.dropify').dropify();
            }
        }, 300);
    }, [formValue.oldImage]);

    useEffect(() => {
        getParentCategory();
    }, []);

    useEffect(() => {
        if (id) {
            axios.get(`${apiBaseUrl}subsubcategory/edit-row-data/${id}`)
                .then(res => res.data)
                .then(finalRes => {
                    const data = finalRes.data;
                    setFormValue({
                        subsubcategoryName: data.subsubcategoryName || '',
                        subsubcategoryOrder: data.subsubcategoryOrder || '',
                        parentCategory: data.parentCategory || '',
                        subCategory: data.subCategory || '',
                        oldImage: data.subsubcategoryImage ? `uploads/subsubcategory/${data.subsubcategoryImage}` : ''
                    });

                    // Also fetch subcategories based on saved parent
                    if (data.parentCategory) {
                        getSubcategory(data.parentCategory);
                    }
                });
        }
    }, [id]);

    const getParentCategory = () => {
        axios.get(`${apiBaseUrl}subcategory/parentcategory`)
            .then(res => res.data)
            .then(finalRes => setParentCatList(finalRes.data));
    };

    const getSubcategory = (parentId) => {
        axios.get(`${apiBaseUrl}subsubcategory/subcategory/${parentId}`)
            .then(res => res.data)
            .then(finalRes => {
                setSubCatList(finalRes.data);
            })
            .catch(err => {
                console.error("Error fetching subcategories:", err);
                setSubCatList([]);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (id) {
            formData.append('oldImage', formValue.oldImage);
            axios.put(`${apiBaseUrl}subsubcategory/update/${id}`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Updated successfully");
                        setTimeout(() => navigate('/view-Sub-category_2'), 2000);
                    } else {
                        toast.error(finalRes.msg || "Something went wrong");
                    }
                });
        } else {
            axios.post(`${apiBaseUrl}subsubcategory/insert`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Added successfully");
                        e.target.reset();
                        $('.dropify').data('dropify').clearElement();
                        setTimeout(() => navigate('/view-Sub-category_2'), 2000);
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
                            <li><Link to={'/view-sub-subcategory'}><span className='font-bold text-gray-800'>/&nbsp;Sub Sub Category</span></Link></li>
                            <li><span className='font-bold text-gray-800'>/&nbsp;{id ? 'Edit' : 'Add'}</span></li>
                        </ul>
                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>
                            {id ? "Edit" : "Add"} Sub Sub Category
                        </h3>
                        <form onSubmit={handleSubmit} className='py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                            <div className='flex gap-5'>
                                <div className='w-[30%]'>
                                    <label className="mb-1 font-medium block">Category Image</label>
                                    <>
                                        <style>{`
                                            .dropify-wrapper .dropify-message span {
                                                font-weight: normal !important;
                                                font-size: 20px !important;
                                            }
                                        `}</style>
                                        <input
                                            type="file"
                                            name="subsubcategoryImage"
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
                                            onChange={(e) => {
                                                const selectedId = e.target.value;
                                                setFormValue({ ...formValue, parentCategory: selectedId, subCategory: '' });
                                                getSubcategory(selectedId);
                                            }}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                        >
                                            <option value="">Select Category</option>
                                            {parentCatList.map((item, index) => (
                                                <option key={index} value={item._id}>{item.categoryName}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='mb-3 p-1'>
                                        <label className='p-1 block font-medium text-gray-900'>Sub Category Name</label>
                                        <select
                                            name='subCategory'
                                            value={formValue.subCategory}
                                            onChange={(e) => setFormValue({ ...formValue, subCategory: e.target.value })}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                        >
                                            <option value="">Select Sub Category</option>
                                            {subCatList.map((item, index) => (
                                                <option key={index} value={item._id}>{item.subcategoryName}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='mb-3 p-1'>
                                        <label className='p-1 block font-medium text-gray-900'>Sub Subcategory Name</label>
                                        <input
                                            type='text'
                                            name='subsubcategoryName'
                                            value={formValue.subsubcategoryName}
                                            onChange={(e) => setFormValue({ ...formValue, subsubcategoryName: e.target.value })}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                            placeholder='Sub Subcategory Name'
                                        />
                                    </div>

                                    <div className='mb-3 p-1'>
                                        <label className='p-1 block font-medium text-gray-900'>Order</label>
                                        <input
                                            type='number'
                                            name='subsubcategoryOrder'
                                            value={formValue.subsubcategoryOrder}
                                            onChange={(e) => setFormValue({ ...formValue, subsubcategoryOrder: e.target.value })}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                            placeholder='Order'
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 my-3 mx-1.5'>
                                {id ? "Update" : "Add"} Sub Sub Category
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}