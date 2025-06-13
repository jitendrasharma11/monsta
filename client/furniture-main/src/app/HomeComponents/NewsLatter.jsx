import React from 'react'

export default function NewsLatter() {
    return (
        <>
            <section className='max-w-full border-y-1 border-gray-200 bg-[#f8f9f9] my-10 '>
                <div className='max-w-[1320px] mx-auto py-5'>
                    <div className='text-center py-10 ' id='newsLatter-Content'>
                        <p className='text-2xl font-semibold capitalize py-3'>Our Newsletter</p>
                        <p className='text-sm '>Get E-mail updates about our latest shop and special offers</p>
                        <div className='max-w-[50%] mx-auto  my-10'>
                            <form action="" className='flex justify-center'>
                                <input type="text" placeholder='Email Address....' className='text-sm p-3 border-1 lg:w-full sm:w-full max-w-full border-gray-400 rounded-sm' />
                                <button type='submit ' className='bg-[#C09578] py-2 lg:px-14 sm:px-4  px-3 rounded-sm text-white font-semibold cursor-pointer hover:bg-black hover:text-white'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
