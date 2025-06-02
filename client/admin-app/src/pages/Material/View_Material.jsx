import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaPen } from 'react-icons/fa';
import axios from 'axios';

export default function View_Material() {
    const [materialList, setMaterialList] = useState([]);
    const [activeFilter, setActiveFilter] = useState(true);
    const [ids, setIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [materialName, setMaterialName] = useState('');
    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    const getMaterial = () => {
        axios.get(`${apiBaseUrl}material/view`, {
            params: { materialName }
        })
        .then(res => res.data)
        .then(finalRes => setMaterialList(finalRes.data))
        .catch(err => console.error("Material Fetch Error:", err));
    };

    useEffect(() => {
        getMaterial();
    }, [materialName]);

    // Select all checkbox handler
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            const allIds = materialList.map(item => item._id);
            setIds(allIds);
        } else {
            setIds([]);
        }
        setSelectAll(event.target.checked);
    };

    // Individual checkbox handler
    const getAllCheckedvalue = (event) => {
        const value = event.target.value;
        if (event.target.checked && !ids.includes(value)) {
            setIds([...ids, value]);
        } else {
            setIds(ids.filter(id => id !== value));
        }
    };

    // Bulk delete
    const deleteMaterial = () => {
        if (ids.length === 0) return; // Optional: no action if none selected
        axios.post(`${apiBaseUrl}material/delete`, { ids })
            .then(res => res.data)
            .then(() => {
                getMaterial();
                setIds([]);
            });
    };

    // Bulk status change
    const changeStatus = () => {
        if (ids.length === 0) return; // Optional: no action if none selected
        axios.post(`${apiBaseUrl}material/change-status`, { ids })
            .then(res => res.data)
            .then(() => {
                getMaterial();
                setIds([]);
            });
    };

    // Update selectAll if all checkboxes are selected/deselected
    useEffect(() => {
        if (materialList.length > 0) {
            setSelectAll(materialList.length === ids.length);
        }
    }, [ids, materialList]);

    return (
        <section className="w-full px-4 py-6">
            <div className="border rounded-lg shadow-sm">
                {/* Header Section */}
                <div className="flex items-center justify-between bg-[#f2f6fb] px-6 py-4 border-b rounded-t-lg">
                    <h2 className="text-2xl font-bold text-gray-900">View Material</h2>
                    <div className="flex items-center gap-3">
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3"
                            onClick={() => setActiveFilter(!activeFilter)}
                            title="Toggle Filter"
                        >
                            <FaFilter />
                        </button>
                        <button
                            onClick={changeStatus}
                            disabled={ids.length === 0}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold text-white ${
                                ids.length === 0 ? 'bg-green-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'
                            }`}
                        >
                            Change Status
                        </button>
                        <button
                            onClick={deleteMaterial}
                            disabled={ids.length === 0}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold text-white ${
                                ids.length === 0 ? 'bg-red-400 cursor-not-allowed' : 'bg-red-700 hover:bg-red-800'
                            }`}
                        >
                            Delete
                        </button>
                    </div>
                </div>

                {/* Filter/Search Section */}
                {!activeFilter && (
                    <div className="px-6 py-4 border-b bg-white">
                        <form onSubmit={e => e.preventDefault()} className="flex max-w-sm">
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Search Name"
                                value={materialName}
                                onChange={e => setMaterialName(e.target.value)}
                            />
                            <button
                                onClick={getMaterial}
                                type="submit"
                                className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-t">
                            <tr>
                                <th className="px-4 py-3">
                                    <input
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                                    />
                                </th>
                                <th className="px-6 py-3 font-semibold">Material Name</th>
                                <th className="px-6 py-3 font-semibold">Order</th>
                                <th className="px-6 py-3 font-semibold">Status</th>
                                <th className="px-6 py-3 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materialList.length > 0 ? (
                                materialList.map((item) => (
                                    <tr key={item._id} className="bg-white hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <input
                                                type="checkbox"
                                                value={item._id}
                                                checked={ids.includes(item._id)}
                                                onChange={getAllCheckedvalue}
                                                className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                                            />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{item.materialName}</td>
                                        <td className="px-6 py-4">{item.materialOrder}</td>
                                        <td className="px-6 py-4">
                                            {item.materialStatus ? (
                                                <button className="inline-block bg-green-600 text-white text-sm font-semibold px-5 py-1.5 rounded-lg">
                                                    Active
                                                </button>
                                            ) : (
                                                <button className="inline-block bg-red-600 text-white text-sm font-semibold px-5 py-1.5 rounded-lg">
                                                    Deactive
                                                </button>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/edit-material/${item._id}`}>
                                                <div className="w-[40px] h-[40px] rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center">
                                                    <FaPen className="text-white" />
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-4 text-gray-700 font-semibold">No Data Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
