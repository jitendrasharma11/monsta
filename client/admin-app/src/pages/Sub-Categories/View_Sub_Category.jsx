import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaPen } from 'react-icons/fa';
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';

export default function View_Subcategory() {
    const [activeFilter, setActiveFilter] = useState(true);
    const [subcategory, setSubcategory] = useState([]);
    const [staticPath, setStaticPath] = useState('');
    const [ids, setIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [subcategoryName, setSubcategoryName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(5);

    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    const getSubcategory = () => {
        axios.get(`${apiBaseUrl}subcategory/view`, {
            params: {
                subcategoryName,
                currentPage,
                limit
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes)
                setSubcategory(finalRes.data);
                setStaticPath(finalRes.staticPath || '/uploads/subcategory/'); // fallback
                setTotalPage(finalRes.pages || 1);
            });
            
    };

    useEffect(() => {
        getSubcategory();
    }, [subcategoryName, currentPage, limit]);

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
            const allIds = subcategory.map(item => item._id);
            setIds(allIds);
        } else {
            setIds([]);
        }
        setSelectAll(event.target.checked);
    };

    useEffect(() => {
        if (subcategory.length > 0) {
            setSelectAll(ids.length === subcategory.length);
        }
    }, [ids]);

    const deleteMultipleSubcategories = () => {
        axios.post(`${apiBaseUrl}subcategory/delete`, { ids })
            .then(() => {
                getSubcategory();
                setIds([]);
            });
    };

    const changeSubcategoryStatus = () => {
        axios.post(`${apiBaseUrl}subcategory/change-status`, { ids })
            .then(() => {
                getSubcategory();
                setIds([]);
            });
    };

    return (
        <section className='w-full px-4 py-6'>
            {!activeFilter && (
                <div className="mb-6 p-4 bg-white border rounded-lg shadow-sm max-w-xl">
                    <form className="flex" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg p-2.5"
                            placeholder="Search Subcategory Name"
                            onChange={e => setSubcategoryName(e.target.value)}
                        />
                        <button
                            type="submit"
                            onClick={getSubcategory}
                            className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800"
                        >
                            🔍
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>
            )}

            <div className="border rounded-lg shadow-sm">
                <div className="flex items-center justify-between bg-[#f2f6fb] px-6 py-4 border-b rounded-t-lg">
                    <h2 className="text-2xl font-bold text-gray-900">View Subcategory</h2>
                    <div className="flex items-center gap-3">
                        <div className="inline-block relative w-48">
                            <select
                                onChange={(e) => setLimit(e.target.value)}
                                className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight"
                                defaultValue=""
                            >
                                <option disabled value="">Select Items View</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3"
                            onClick={() => setActiveFilter(!activeFilter)}
                        >
                            <FaFilter />
                        </button>
                        <button
                            onClick={changeSubcategoryStatus}
                            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                        >
                            Change Status
                        </button>
                        <button
                            onClick={deleteMultipleSubcategories}
                            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                        >
                            Delete
                        </button>
                    </div>
                </div>

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
                                <th className="px-6 py-3 font-semibold">Parent Category</th>
                                <th className="px-6 py-3 font-semibold">Status</th>
                                <th className="px-6 py-3 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subcategory.length > 0 ? (
                                subcategory.map((item, index) => (
                                    console.log(item),
                                    <tr key={item._id} className="bg-white hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                                                value={item._id}
                                                checked={ids.includes(item._id)}
                                                onChange={getAllCheckedvalue}
                                            />
                                        </td>
                                        <td className="px-6 py-4">{(currentPage - 1) * limit + (index + 1)}</td>
                                        <td className="px-6 py-4">{item.subcategoryName}</td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={staticPath + item.subcategoryImage}
                                                alt="Subcategory"
                                                className="w-10 h-10 object-cover rounded-full"
                                            />
                                        </td>
                                        <td className="px-6 py-4">{item.subcategoryOrder}</td>
                                        <td className="px-6 py-4">{item.parentCategory?.categoryName || '-'}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block text-white text-sm font-semibold px-5 py-1.5 rounded-lg ${item.subcategoryStatus ? 'bg-green-600' : 'bg-red-600'}`}>
                                                {item.subcategoryStatus ? 'Active' : 'Deactive'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/edit-subcategory/${item._id}`}>
                                                <div className="w-[40px] h-[40px] rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center">
                                                    <FaPen className="text-white" />
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="text-center py-4 text-gray-700 font-semibold">
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