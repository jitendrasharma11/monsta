"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaAngleRight } from "react-icons/fa";
import axios from 'axios';

export default function FrequentlyQuestions() {
    const [faqData, setFaqData] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    // 🔽 Fetch from API on load
    useEffect(() => {
        axios.get("http://localhost:8000/api/faq/getFaq")
            .then(res => {
                if (res.data.status === 1) {
                    setFaqData(res.data.data);
                }
            })
            .catch(err => console.error("FAQ fetch error:", err));
    }, []);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>
            <section className='max-w-full my-8' id='faq'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='faq-mid'>
                    <div className='w-full text-center' id='faq-mid-heading'>
                        <h2 className='text-4xl font-semibold'>Frequently Questions</h2>
                        <div className='flex items-center justify-center gap-1 my-3'>
                            <Link href='/' className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href='/Frequently Questions' className='text-sm text-[#C09578]'>Frequently Questions</Link>
                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>

                    <div className="w-full mx-auto cursor-pointer p-4 space-y-2">
                        {faqData.map((item, index) => {
                            const isOpen = index === openIndex;
                            return (
                                <div
                                    key={item._id}
                                    className={`border cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#C09578]' : 'border-transparent'}`}
                                >
                                    <button
                                        className={`w-full text-left px-4 py-3 flex justify-between items-center font-semibold text-base md:text-lg ${isOpen ? 'bg-gray-50 text-[#C09578]' : 'bg-gray-100'}`}
                                        onClick={() => toggle(index)}
                                    >
                                        <span className='cursor-pointer text-sm'>{item.faqQuestion}</span>
                                        <span className={`text-xl ${isOpen ? "text-[#C09578]" : "text-[#ccc]"}`}>
                                            {isOpen ? '–' : '+'}
                                        </span>
                                    </button>
                                    {isOpen && item.faqAnswer && (
                                        <div className="bg-white px-4 py-3 border-t border-[#C09578] text-sm text-gray-700">
                                            {item.faqAnswer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}