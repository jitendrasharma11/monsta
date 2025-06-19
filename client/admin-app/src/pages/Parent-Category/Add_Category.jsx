import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add_Category() {
    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;
    const navigate = useNavigate();
    const { id } = useParams();
    const [formValue, setFormValue] = useState({
        categoryName: '',
        categoryOrder: '',
        oldImage: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`${apiBaseUrl}category/edit-row-data/${id}`)
                .then(res => res.data)
                .then(finalRes => {
                    const data = finalRes.data;
                    setFormValue({
                        categoryName: data.categoryName,
                        categoryOrder: data.categoryOrder,
                        oldImage: data.categoryImage
                    });

                    setTimeout(() => {
                        $('.dropify').dropify({
                            defaultFile: `${finalRes.staticPath + data.categoryImage}`
                        });
                    }, 200);
                });
        } else {
            setTimeout(() => {
                $('.dropify').dropify();
            }, 200);
        }
    }, [id]);

    const saveCategory = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (id) {
            formData.append("oldImage", formValue.oldImage);
            axios.put(`${apiBaseUrl}category/update/${id}`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Category updated successfully");
                        setTimeout(() => navigate("/view-category"), 2000);
                    } else {
                        toast.error(finalRes.msg || "Something went wrong");
                    }
                });
        } else {
            axios.post(`${apiBaseUrl}category/insert`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Category added successfully");
                        e.target.reset();
                        $('.dropify').data('dropify').clearElement();
                        setTimeout(() => navigate("/view-category"), 2000);
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
                            <li><Link to="/dashboard"><span className='font-bold text-gray-800'>Home</span></Link></li>&nbsp;
                            <li><Link to="/view-category"><span className='font-bold text-gray-800'>/&nbsp;Category</span></Link></li>
                            <li><span className='font-bold text-gray-800'>/&nbsp;{id ? 'Edit' : 'Add'}</span></li>
                        </ul>
                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>{id ? "Edit" : "Add"} Category</h3>
                        <form onSubmit={saveCategory} className='py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
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
                                            className="dropify"
                                            data-height="250"
                                            name="categoryImage"
                                        />
                                    </>
                                </div>
                                <div className='w-[62%]'>
                                    <div className='mb-5 p-1'>
                                        <label htmlFor="cname" className='p-1 block font-medium text-gray-900'>Category Name</label>
                                        <input
                                            type="text"
                                            name="categoryName"
                                            value={formValue.categoryName}
                                            onChange={(e) => setFormValue({ ...formValue, categoryName: e.target.value })}
                                            className='text-[20px] border-2 py-2.5 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                            placeholder="Category Name"
                                        />
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label htmlFor="corder" className='p-1 block font-medium text-gray-900'>Order</label>
                                        <input
                                            type="number"
                                            name="categoryOrder"
                                            value={formValue.categoryOrder}
                                            onChange={(e) => setFormValue({ ...formValue, categoryOrder: e.target.value })}
                                            className='text-[20px] border-2 py-2.5 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                            placeholder="Order"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 my-3 mx-1.5'
                            >
                                {id ? "Update" : "Add"} Category
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}