"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
export default function frequently_questions() {
    const faqData = [
        {
            question: 'Mauris congue euismod purus at semper. Morbi et vulputate massa?',
            answer:
                'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
        {
            question: 'Donec mattis finibus elit ut tristique?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
        {
            question: 'Aenean elit orci, efficitur quis nisl at, accumsan?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
        {
            question: 'Pellentesque habitant morbi tristique senectus et netus?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
        {
            question: 'Nam pellentesque aliquam metus?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
        {
            question: 'Aenean elit orci, efficitur quis nisl at?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
        {
            question: 'Morbi gravida, nisi id fringilla ultricies, elit lorem?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
        {
            question: 'Aenean elit orci, efficitur quis nisl at, accumsan?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
        },
    ];
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>
            <section className='max-w-full my-8' id='faq'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='faq-mid'>
                    <div className='w-full text-center' id='faq-mid-heading'>
                        <h2 className=' text-4xl font-semibold'>Frequently Questions</h2>
                        <div className='flex items-center justify-center gap-1 my-3 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/Frequently Questions'} className='text-sm text-[#C09578]'> Frequently Questions </Link >

                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>



                    <div className="w-full mx-auto cursor-pointer p-4 space-y-2">
                        {faqData.map((item, index) => {
                            const isOpen = index === openIndex;
                            return (
                                <div
                                    key={index}
                                    className={`border cursor-pointer  transition-all duration-300 ${isOpen ? 'border-[#C09578] ' : 'border-transparent'
                                        }`}
                                >
                                    <button
                                        className={`w-full text-left px-4 py-3 flex justify-between items-center font-semibold text-base md:text-lg ${isOpen ? 'bg-gray-50 text-[#C09578]' : 'bg-gray-100'
                                            }`}
                                        onClick={() => toggle(index)}
                                    >
                                        <span className='cursor-pointer text-sm  '>{item.question}</span>
                                        <span className={`text-xl text-[#cccc] ${isOpen ? "text-[#C09578] border border-transparent rounded-2xl" : "text-[#cccc]"}`}>{isOpen ? '–' : '+'}</span>
                                    </button>
                                    {isOpen && item.answer && (
                                        <div className="bg-white px-4 py-3 border-t border-[#C09578] text-sm text-gray-700">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>


                </div>
            </section>
        </>
    )
}
