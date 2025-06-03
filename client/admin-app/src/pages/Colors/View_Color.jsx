import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import ResponsivePagination from 'react-responsive-pagination';

export default function ViewColor() {
    let [ids, setIds] = useState([]);
    let [getColorData, setGetColorData] = useState([]);
    let [selectAll, setSelectAll] = useState(false);
    let [activeFilter, setActiveFilter] = useState(true);
    let [colorName, setColorName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage,setTotalPage]=useState(0);
    const [limit,setlimit]=useState(5);

    let baseUrl = import.meta.env.VITE_APIBASEURL;

    let colorView = () => {
        axios.get(`${baseUrl}color/view`, {
            params: {
                colorName,
                currentPage,
                limit
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                setTotalPage(finalRes.pages);
                setGetColorData(finalRes.data);
            });
    };

    useEffect(() => {
        colorView();
    }, [colorName,currentPage,limit]);

    let handleSelectAll = (event) => {
        if (event.target.checked) {
            let allIds = getColorData.map((item) => item._id);
            setIds(allIds);
        } else {
            setIds([]);
        }
        setSelectAll(event.target.checked);
    };

    let getAllCheckedvalue = (event) => {
        if (event.target.checked && !ids.includes(event.target.value)) {
            setIds([...ids, event.target.value])
        } else {
            setIds(ids.filter((v) => v !== event.target.value))
        }
    };

    const colorMultipleDelete = () => {
        axios.post(`${baseUrl}color/delete`, { ids })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                colorView();
                setIds([]);
            });
    };

    let changeStatus = () => {
        axios.post(`${baseUrl}color/change-status`, { ids })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                colorView();
                setIds([]);
            });
    };

    useEffect(() => {
        if (getColorData.length > 1) {
            if (getColorData.length === ids.length) {
                setSelectAll(true);
            } else {
                setSelectAll(false);
            }
        }
    }, [ids]);

    return (
        <>
            {/* Breadcrumb */}
            <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
                <p className='flex items-center gap-3'>
                    <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
                    <Link to={'/color/add'} className='hover:text-blue-600'> / &nbsp; Color </Link>
                    <span className='text-gray-500'> / &nbsp; View </span>
                </p>
                <hr className="bg-[#ccc] h-px border-0 my-2" />
            </div>

            {/* Main Section */}
            <section className='mt-5 max-w-full rounded-md' style={{ border: "1px solid #ccc" }} id='userForm'>
                {/* Header + Buttons */}
                <div className='bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>View Color</h3>
                    <div className='flex items-center gap-2 mr-3'>
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
                        <button onClick={() => setActiveFilter(!activeFilter)} className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'>
                            <FaFilter />
                        </button>
                        <button onClick={changeStatus} className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white'>Change Status</button>
                        <button onClick={colorMultipleDelete} className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white'>Delete</button>
                    </div>
                </div>

                {/* Filter/Search */}
                {!activeFilter && (
                    <div className="px-4 py-3 border-b bg-white">
                        <form onSubmit={e => e.preventDefault()} className="flex max-w-sm">
                            <input
                                type="text"
                                placeholder="Search Color Name"
                                value={colorName}
                                onChange={(e) => setColorName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            />
                            <button
                                onClick={colorView}
                                className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                )}

                {/* Table */}
                <div className='form px-4'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th className='lg:w-[3%] sm:w-[7%]'>
                                    <input
                                        type="checkbox"
                                        className='w-4 h-4'
                                        onChange={handleSelectAll}
                                        checked={selectAll}
                                    />
                                </th>
                                <th className='w-[20%]'>Sr No</th>
                                <th className='w-[20%]'>Color Name</th>
                                <th className='w-[12%]'>Code</th>
                                <th className='w-[15%]'>Order</th>
                                <th className='w-[11%]'>Status</th>
                                <th className='w-[6%]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getColorData.length >= 1 ? (
                                getColorData.map((value,index) => {
                                    const { _id, colorName, colorCode, colorOrder, colorStatus } = value;
                                    return (
                                        <tr key={_id} className='bg-white border-gray-200 hover:bg-gray-50'>
                                            <td className='py-7'>
                                                <input
                                                    onChange={getAllCheckedvalue}
                                                    type="checkbox"
                                                    className='w-4 h-4'
                                                    checked={ids.includes(_id)}
                                                    value={_id}
                                                />
                                            </td>
                                            <td className='text-base font-semibold text-black'>{(currentPage-1)*limit+(index+1)}</td>
                                            <td className='text-base font-semibold text-black'>{colorName}</td>
                                            <td>{colorCode}</td>
                                            <td>{colorOrder}</td>
                                            <td>
                                                {colorStatus ? (
                                                    <button className='bg-green-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Active</button>
                                                ) : (
                                                    <button className='bg-red-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Deactive</button>
                                                )}
                                            </td>
                                            <td>
                                                <Link to={`/edit-color/${_id}`}>
                                                    <button className='flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-full'>
                                                        <MdEdit className='text-[18px]' />
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center text-black text-xl py-4">Color Not Found</td>
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
            </section>
        </>
    );
}