import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import { MdFilterAltOff, MdModeEdit } from 'react-icons/md';

export default function Newslatters() {
    const [activeFilter, setActiveFilter] = useState(true);

    return (
        <section className="w-full">
            {/* Breadcrumb Navigation */}
            <nav className="flex border-b-2" aria-label="Breadcrumb">
                <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to="/dashboard" className="text-md font-medium text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <span className="mx-1">/</span>
                            <Link to="" className="text-md font-medium text-gray-700 hover:text-blue-600">
                                News Letter
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <span className="mx-1">/</span>
                            <span className="text-md font-medium text-gray-500">View</span>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* Filter/Search Section */}
            <div className={`rounded-lg border border-gray-300 px-5 py-5 max-w-[1180px] mx-auto mt-10 ${activeFilter ? 'hidden' : 'block'}`}>
                <form className="flex max-w-sm">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Search Name"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>

            {/* Newsletter Management Table */}
            <div className="w-full min-h-[550px]">
                <div className="max-w-[1180px] mx-auto py-5">
                    <div className="flex justify-between items-center bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                        <h3 className="text-[26px] font-semibold">Newsletters Management</h3>
                        <div className="flex items-center space-x-3">
                            <div
                                onClick={() => setActiveFilter(!activeFilter)}
                                className="cursor-pointer rounded-full w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800"
                            >
                                {activeFilter ? <FaFilter className="text-[18px]" /> : <MdFilterAltOff className="text-[18px]" />}
                            </div>
                            <button className="text-white bg-green-700 hover:bg-green-800 rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                                Change Status
                            </button>
                            <button className="text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="border border-t-0 rounded-b-md border-slate-400 overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="p-4">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded-sm" />
                                    </th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="w-[12%]">Email Id</th>
                                    <th className="w-[15%]">Mobile Number</th>
                                    <th className="w-[11%]">Status</th>
                                    <th className="w-[6%]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2].map((row) => (
                                    <tr key={row} className="bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
                                        <td className="p-4">
                                            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded-sm" />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Neil Sims
                                        </td>
                                        <td className="py-4">xyz@gmail.com</td>
                                        <td className="py-4">9876543210</td>
                                        <td className="py-4">
                                            <button
                                                type="button"
                                                className={`text-white font-medium rounded-lg text-sm px-5 py-1.5 ${
                                                    row === 1
                                                        ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
                                                        : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600'
                                                }`}
                                            >
                                                {row === 1 ? 'Active' : 'Deactive'}
                                            </button>
                                        </td>
                                        <td className="py-4">
                                            <Link to="">
                                                <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800">
                                                    <MdModeEdit className="text-[18px]" />
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}