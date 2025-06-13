import React from 'react'

export default function NewCollection() {
    return (
        <>

            <section className='max-w-full my-12 relative' id='newCollection'>
                <figure>
                    <img src="/images/bj (1).jpg" className='h-[500px] object-cover' alt="" />
                </figure>
                <div className='w-full h-full absolute top-0 bg-[rgba(0,0,0,0.3)]' id='newCollection-ovelay'>
                    <div className='absolute left-[10%] top-1/2 -translate-y-1/2'>
                        <h1 className='text-white font-bold lg:text-5xl sm:text-5xl text-2xl'>New Trending Collection</h1>
                        <p className='text-white font-normal lg:text-xl sm:text-xl text-md lg:py-6 sm:py-6 py-4'>We Believe That Good Design is Always in Season</p>
                        <button className='uppercase text-white bg-transparent border-1 border-white py-2 px-6 hover:bg-white hover:text-black'>shopping now</button>
                    </div>
                </div>
            </section>
        </>
    )
}
