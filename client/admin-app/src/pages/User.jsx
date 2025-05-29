import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaFilter } from 'react-icons/fa';
import { MdFilterAltOff, MdModeEdit } from 'react-icons/md';

export default function User() {
  let [activeFilter, setactiveFilter] = useState(true);

  return (
    <div className='w-full'>
      {/* Breadcrumb Navigation */}
      <nav className="flex border-b border-b-[#ccc]">
        <ol className='p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
          <li className="inline-flex items-center">
            <Link to="/dashboard" className='flex items-center text-md font-medium text-gray-700 hover:text-blue-600'>Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link to="" className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">User</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2">View</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Filter Form */}
      <div className={`rounded-lg border border-gray-300 px-5 py-5 max-w-[1180px] mx-auto mt-10 ${activeFilter ? "hidden" : "block"}`}>
        <form className="flex max-w-sm">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Name"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="w-full min-h-[510px]">
        <div className="max-w-[1180px] mx-auto py-5">
          <div className='flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
            <h3 className="text-[26px] font-semibold">View User</h3>
            <div className='flex items-center'>
              <div onClick={() => setactiveFilter(!activeFilter)} className="cursor-pointer text-white mx-3 rounded-full w-[40px] h-[40px] flex items-center justify-center bg-blue-700 hover:bg-blue-800">
                {activeFilter ? <FaFilter className='text-[18px]' /> : <MdFilterAltOff className='text-[18px]' />}
              </div>
              <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Change Status</button>
              <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</button>
            </div>
          </div>

          <div className="border border-t-0 rounded-b-md border-slate-400">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="p-4">
                      <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                      <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </th>
                    <th className="px-6 py-3">Name</th>
                    <th className="w-[12%]">Email Id</th>
                    <th className="w-[15%]">Mobile Number</th>
                    <th className="w-[11%]">Status</th>
                    <th className="w-[6%]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* User Row 1 */}
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                    <td className="p-4">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </td>
                    <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="text-base font-semibold">Neil Sims</div>
                    </td>
                    <td className="py-4">xyz@gmail.com</td>
                    <td className="py-4">9876543210</td>
                    <td className="py-4">
                      <button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-1.5">Active</button>
                    </td>
                    <td className="py-4">
                      <Link to="">
                        <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800">
                          <MdModeEdit className='text-[18px]' />
                        </div>
                      </Link>
                    </td>
                  </tr>

                  {/* User Row 2 */}
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                    <td className="p-4">
                      <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                      <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </td>
                    <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="text-base font-semibold">Neil Sims</div>
                    </td>
                    <td className="py-4">xyz@gmail.com</td>
                    <td className="py-4">9876543210</td>
                    <td className="py-4">
                      <button className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-1.5">Deactive</button>
                    </td>
                    <td className="py-4">
                      <Link to="">
                        <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800">
                          <MdModeEdit className='text-[18px]' />
                        </div>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}