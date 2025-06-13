"use client"
import React from 'react'

export default function ChairCollection() {
    return (
        <>
            <section className='max-w-full border-b-1 border-gray-200 pb-12 my-12' id='chairCollection'>
                <div className='max-w-[1320px] lg:mx-auto mx-3 grid lg:grid-cols-3 sm:grid-cols-3 justify-center gap-5' id='chairCollection-mid'>
                    <div className='overflow-hidden relative'>
                        <figure>
                            <img src="/images/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" className='hover:scale-110 duration-700' alt="" />
                        </figure>
                        <div className='w-full absolute top-5 left-5 chaorCollection-content'>
                            <p className='font-medium'>Design Creative</p>
                            <h3 className='font-bold text-xl'>Chair Collection</h3>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <figure>

                            <img src="/images/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp" className='hover:scale-110 duration-700' alt="" />
                        </figure>
                        <div className='w-full absolute top-5 left-5 chaorCollection-content'>
                            <p className='font-medium'>Design Creative</p>
                            <h3 className='font-bold text-xl'>Chair Collection</h3>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <figure>

                            <img src="/images/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" className='hover:scale-110 duration-700' alt="" />
                        </figure>
                        <div className='w-full absolute top-5 left-5 chaorCollection-content'>
                            <p className='font-medium'>Design Creative</p>
                            <h3 className='font-bold text-xl'>Chair Collection</h3>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
