import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaPen } from 'react-icons/fa';
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';

export default function View_Category() {
    const [activeFilter, setActiveFilter] = useState(true);
    const [category, setCategory] = useState([]);
    const [staticPath, setStaticPath] = useState('');
    const [ids, setIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [categoryName,setcategoryName]=useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage,setTotalPage]=useState(0);
    const [limit,setlimit]=useState(5);

    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    const getCategory = () => {
        axios.get(`${apiBaseUrl}category/view`,{
            params:{
                categoryName,
                currentPage,
                limit
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                setCategory(finalRes.data);
                setStaticPath(finalRes.staticPath);
                setTotalPage(finalRes.pages)
            });
    };

    useEffect(() => {
        getCategory();
    }, [categoryName,currentPage,limit]);

    const getAllCheckedvalue = (event) => {
        const value = event.target.value;
        if (event.target.checked && !ids.includes(value)) {
            setIds([...ids, value]);
        } else {
            setIds(ids.filter((v) => v !== value));
        }
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            const allIds = category.map(item => item._id);
            setIds(allIds);
        } else {
            setIds([]);
        }
        setSelectAll(event.target.checked);
    };

    useEffect(() => {
        if (category.length > 0) {
            setSelectAll(ids.length === category.length);
        }
    }, [ids]);

    const deleteMultipleCategories = () => {
        axios.post(`${apiBaseUrl}category/delete`, { ids })
            .then(res => res.data)
            .then(finalRes => {
                console.log(finalRes);
                getCategory();
                setIds([]);
            })
            .catch(err => console.error(err));
    };

    const changeCategoryStatus = () => {
        axios.post(`${apiBaseUrl}category/change-status`, { ids })
            .then(res => res.data)
            .then(finalRes => {
                console.log(finalRes);
                getCategory();
                setIds([]);
            })
            .catch(err => console.error(err));
    };

    return (
        <section className='w-full px-4 py-6'>

            {/* Filter Section */}
            {!activeFilter && (
                <div className="mb-6 p-4 bg-white border rounded-lg shadow-sm max-w-xl">
                    <form className="flex" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg p-2.5"
                            placeholder="Search Name"
                            onChange={e => setcategoryName(e.target.value)}
                        />
                        <button
                            type="submit"
                            onClick={getCategory()}
                            className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
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
                        <div className="inline-block relative w-48">
                            <select
                                onChange={(e)=>setlimit(e.target.value)}
                                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option disabled value="">Select Items View</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                                </svg>
                            </div>
                        </div>
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3"
                            onClick={() => setActiveFilter(!activeFilter)}
                        >
                            <FaFilter />
                        </button>
                        <button
                            onClick={changeCategoryStatus}
                            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                        >
                            Change Status
                        </button>
                        <button
                            onClick={deleteMultipleCategories}
                            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                        >
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
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="px-6 py-3 font-semibold">Sr No</th>
                                <th className="px-6 py-3 font-semibold">Name</th>
                                <th className="px-6 py-3 font-semibold">Image</th>
                                <th className="px-6 py-3 font-semibold">Order</th>
                                <th className="px-6 py-3 font-semibold">Status</th>
                                <th className="px-6 py-3 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.length > 0 ? (
                                category.map((items, index) => (
                                    <tr key={index} className="bg-white hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                                                value={items._id}
                                                checked={ids.includes(items._id)}
                                                onChange={getAllCheckedvalue}
                                            />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{(currentPage-1)*limit+(index+1)}</td>
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
                                            <span className={`inline-block text-white text-sm font-semibold px-5 py-1.5 rounded-lg ${items.categoryStatus
                                                ? 'bg-green-600'
                                                : 'bg-red-600'
                                                }`}>
                                                {items.categoryStatus ? 'Active' : 'Deactive'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/edit-category/${items._id}`}>
                                                <div className="w-[40px] h-[40px] rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center">
                                                    <FaPen className="text-white" />
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-4 text-gray-700 font-semibold">
                                        No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <ResponsivePagination
                     current={currentPage}
                     total={totalPage}
                     onPageChange={setCurrentPage}
                   />
                </div>
            </div>
        </section>
    );
}