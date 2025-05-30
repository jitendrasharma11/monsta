import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaPen } from 'react-icons/fa';
import axios from 'axios';

export default function View_Category() {
    const [activeFilter, setActiveFilter] = useState(true);
    let [category,setCategory]=useState([]);
    let [staticPath,setstaticPath]=useState('');

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL;
    let getCategory = () => {
        axios.get(`${apiBaseUrl}category/view`)
            .then((res) => res.data)
            .then((finalRes) => {
                setCategory(finalRes.data);
                setstaticPath(finalRes.staticPath)
            })
           
    };

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <section className='w-full px-4 py-6'>

            {/* Filter Section */}
            {!activeFilter && (
                <div className="mb-6 p-4 bg-white border rounded-lg shadow-sm max-w-xl">
                    <form className="flex">
                        <input
                            type="text"
                            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg p-2.5"
                            placeholder="Search Name"
                            required
                        />
                        <button
                            type="submit"
                            className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800"
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
            )}

            {/* Table Section */}
            <div className="border rounded-lg shadow-sm">
                <div className="flex items-center justify-between bg-[#f2f6fb] px-6 py-4 border-b rounded-t-lg">
                    <h2 className="text-2xl font-bold text-gray-900">View Category</h2>
                    <div className="flex items-center gap-3">
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3"
                            onClick={() => setActiveFilter(!activeFilter)}
                        >
                            <FaFilter />
                        </button>
                        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Change Status
                        </button>
                        <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-t">
                            <tr>
                                <th className="px-4 py-3">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm" />
                                </th>
                                <th className="px-6 py-3 font-semibold">Name</th>
                                <th className="px-6 py-3 font-semibold">Image</th>
                                <th className="px-6 py-3 font-semibold">Order</th>
                                <th className="px-6 py-3 font-semibold">Status</th>
                                <th className="px-6 py-3 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.map((items,index)=>{
                               return(
                                <tr className="bg-white hover:bg-gray-50">
                                <td className="px-4 py-4">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{items.categoryName}</td>
                                <td className="px-6 py-4">
                                    <img
                                          src={staticPath + items.categoryImage}
                                        alt="Category"
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                </td>
                                <td className="px-6 py-4">{items.categoryOrder}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block bg-[#00A63E] text-white text-sm font-semibold px-5 py-1.5 rounded-lg">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-[40px] h-[40px] rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center">
                                        <Link to="/user">
                                            <FaPen className="text-white" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                               )
                            })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}