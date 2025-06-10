import React, { useEffect } from 'react';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';
import { Link } from 'react-router';

export default function CompanyProfile() {

    useEffect(() => {
        $('.dropify').dropify({
            messages: {
                default: 'Company Profile Image',
                replace: 'Replace',
                remove: 'Remove',
                error: 'Oops, something went wrong.'
            }
        });
    }, []);

    return (
        <section className="max-w-full shadow-xl border border-gray-200 bg-white rounded-lg ">
            <div className="py-3 px-6 bg-white shadow-sm  flex items-center justify-between border-b-2 border-[#ccc]">
                    <div>
                        <nav className="text-sm text-gray-500 mt-1">
                            <ul className="flex items-center space-x-1">
                                <li>
                                    <Link to="/dashboard" className="text-purple-700 hover:underline font-medium">Home</Link>
                                </li>
                                <li>/</li>
                                <li className="text-gray-700 font-medium">Company Profile</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            <div className="w-full p-5">
                <form>
                    <div className="grid grid-cols-[35%_auto] gap-5">
                        <div>
                            <label className="text-base font-semibold">Profile Image</label>
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
                                    name="profileImage"
                                />
                            </>
                        </div>
                        <div>
                            <label className="text-[16px] font-semibold">Name</label>
                            <input type="text" placeholder="Name" className="text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1" />

                            <label className="text-[16px] font-semibold mt-4 block">Email</label>
                            <input type="email" placeholder="Email" className="text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1" />

                            <label className="text-[16px] font-semibold mt-4 block">Mobile Number</label>
                            <input type="number" placeholder="Mobile Number" className="text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1" />
                        </div>
                    </div>

                    <label className="text-[16px] font-semibold mt-6 block">Address</label>
                    <textarea placeholder="Address" className="text-sm h-24 w-full border-2 shadow-sm border-gray-300 p-2 rounded-sm mt-1 resize-none" />

                    <label className="text-[16px] font-semibold mt-4 block">Google Map URL</label>
                    <textarea placeholder="Google Map URL" className="text-sm h-24 w-full border-2 shadow-sm border-gray-300 p-2 rounded-sm mt-1 resize-none" />

                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map"
                        ></iframe>
                    </div>

                    <button
                        type="submit"
                        className="focus:outline-none my-8 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
                    >
                        Update Your Profile
                    </button>
                </form>
            </div>
        </section>
    );
}