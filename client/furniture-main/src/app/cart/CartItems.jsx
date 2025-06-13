import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
export default function CartItems() {
    return (
        <>
            <section className='max-w-full' id='cartItems'>
                <div className='max-w-[1320px] mx-auto'>
                    <div className="overflow-x-auto p-4">
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead className="bg-gray-100 text-center text-base  font-semibold border-b-3 border-[#C09578]">
                                <tr className="border-b border-gray-300">
                                    <th className="p-4">Delete</th>
                                    <th className="p-4 w-[253px]">Image</th>
                                    <th className="p-4">Product</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Quantity</th>
                                    <th className="p-4">Total</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>

                                <tr className="border-b border-gray-200">
                                    <td className="p-4 text-center text-xl text-brown-700 border-r border-gray-200">
                                        <RiDeleteBin6Line className='mx-auto text-[#C09578]' />
                                    </td>
                                    <td className="p-4 border-r border-gray-200">
                                        <img
                                            src="/images/1620666061907Gloria Shoe Racks_.jpg"
                                            alt="Gloria Shoe Racks"
                                            className="w-full object-cover mx-auto"
                                        />
                                    </td>
                                    <td className="p-4 text-sm border-r border-gray-200">Gloria Shoe Racks</td>
                                    <td className="p-4 font-bold text-base border-r border-gray-200">Rs. 2,900</td>
                                    <td className="p-4 border-r border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Quantity</span>
                                            <input
                                                type="number"
                                                defaultValue={1}
                                                className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-base">Rs. 2,900</td>
                                </tr>


                                <tr className="border-b border-gray-200">
                                    <td className="p-4 text-center text-xl text-brown-700 border-r border-gray-200">
                                        <RiDeleteBin6Line className='mx-auto text-[#C09578]' />
                                    </td>
                                    <td className="p-4 border-r border-gray-200">
                                        <img
                                            src="/images/1620666061907Gloria Shoe Racks_.jpg"
                                            alt="Gloria Shoe Racks"
                                            className="w-full object-cover mx-auto"
                                        />
                                    </td>
                                    <td className="p-4 text-sm border-r border-gray-200">Gloria Shoe Racks</td>
                                    <td className="p-4 font-bold text-base border-r border-gray-200">Rs. 2,900</td>
                                    <td className="p-4 border-r border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Quantity</span>
                                            <input
                                                type="number"
                                                defaultValue={1}
                                                className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-base">Rs. 2,900</td>
                                </tr>

                            </tbody>
                        </table>


                    </div>
                    <div className="flex justify-end my-6">
                        <button className="bg-black cursor-pointer hover:bg-[#C09578] hover:text-white  text-white lg:px-6 lg:py-3 rounded px-2 py-2  lg:text-base font-semibold text-[12px] transition">
                            UPDATE CART
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
