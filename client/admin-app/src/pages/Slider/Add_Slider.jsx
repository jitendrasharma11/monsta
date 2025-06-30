import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add_Slider() {
    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;
    const navigate = useNavigate();
    const { id } = useParams();

    const [formValue, setFormValue] = useState({
        sliderTitle: '',
        sliderOrder: '',
        oldSliderImage: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`${apiBaseUrl}slider/single-view/${id}`)
                .then(res => res.data)
                .then(finalRes => {
                    const data = finalRes.data;
                    setFormValue({
                        sliderTitle: data.sliderTitle,
                        sliderOrder: data.sliderOrder,
                        oldSliderImage: data.sliderImage
                    });

                    setTimeout(() => {
                        let drEvent = $('.dropify').dropify();
                        drEvent = drEvent.data('dropify');
                        drEvent.settings.defaultFile = `${finalRes.staticPath + data.sliderImage}`;
                        drEvent.destroy();
                        drEvent.init();
                    }, 200);
                });
        } else {
            setTimeout(() => {
                $('.dropify').dropify();
            }, 200);
        }
    }, [id]);

    const saveSlider = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (id) {
            formData.append("oldSliderImage", formValue.oldSliderImage);
            axios.put(`${apiBaseUrl}slider/update/${id}`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Slider updated successfully");
                        setTimeout(() => navigate("/view-slider"), 2000);
                    } else {
                        toast.error(finalRes.msg || "Something went wrong");
                    }
                });
        } else {
            axios.post(`${apiBaseUrl}slider/insert`, formData)
                .then(res => res.data)
                .then(finalRes => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg || "Slider added successfully");
                        e.target.reset();
                        $('.dropify').data('dropify').clearElement();
                        setTimeout(() => navigate("/view-slider"), 2000);
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
                <div className='py-3'>
                    <nav className='mt-1'>
                        <ul className='flex items-center'>
                            <li><Link to="/dashboard"><span>Home</span></Link></li>&nbsp;
                            <li><Link to="/view-slider"><span>/ Slider</span></Link></li>
                            <li><span>/ {id ? 'Edit' : 'Add'}</span></li>
                        </ul>
                    </nav>
                </div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>{id ? "Edit" : "Add"} Slider</h3>
                        <form onSubmit={saveSlider} className='py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                            <div className='flex gap-5'>
                                <div className='w-[30%]'>
                                    <label className="mb-1 block">Slider Image</label>
                                    <input type="file" name="sliderImage" className="dropify" data-height="250" />
                                </div>
                                <div className='w-[62%]'>
                                    <div className='mb-5'>
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            name="sliderTitle"
                                            value={formValue.sliderTitle}
                                            onChange={(e) => setFormValue({ ...formValue, sliderTitle: e.target.value })}
                                            className='border p-2 w-full rounded'
                                            placeholder="Title"
                                        />
                                    </div>
                                    <div className='mb-5'>
                                        <label>Order</label>
                                        <input
                                            type="number"
                                            name="sliderOrder"
                                            value={formValue.sliderOrder}
                                            onChange={(e) => setFormValue({ ...formValue, sliderOrder: e.target.value })}
                                            className='border p-2 w-full rounded'
                                            placeholder="Order"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className='bg-purple-500 text-white px-4 py-2 rounded mt-4'>
                                {id ? "Update" : "Add"} Slider
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
