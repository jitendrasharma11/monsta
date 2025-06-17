import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
import { MdEdit } from "react-icons/md";
import { RiFilterOffFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'; // fixed from 'react-router'
import ResponsivePagination from 'react-responsive-pagination';

export default function ViewTestimonials() {
    let [testimonialsData, settestimonialsData] = useState([]);
    let [searchButton, setsearchButton] = useState(false);
    let [testimonialsName, settestimonialsName] = useState("");
    let [staticPath, setstaticPath] = useState("");
    let [currentPage, setCurrentPage] = useState(1);
    let [limit, setlimit] = useState(5);
    let [pages, setpages] = useState(0);
    let [ids, setids] = useState([]);
    let [selectAll, setSelectAll] = useState(false);

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    // Checkbox handler
    const testimonialsChecked = (e) => {
        const value = e.target.value;
        if (e.target.checked && !ids.includes(value)) {
            setids([...ids, value]);
        } else {
            setids(ids.filter((id) => id !== value));
        }
    };

    // Select all handler
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = testimonialsData.map((item) => item._id);
            setids(allIds);
        } else {
            setids([]);
        }
        setSelectAll(e.target.checked);
    };

    useEffect(() => {
        setSelectAll(testimonialsData.length > 0 && ids.length === testimonialsData.length);
    }, [ids, testimonialsData]);

    const testimonialsView = () => {
        axios.get(`${apiBaseUrl}testimonials/view`, {
            params: {
                testimonialsName,
                currentPage,
                limit
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                settestimonialsData(finalRes.data || []);
                setstaticPath(finalRes.staticPath || "/uploads/testimonials/");
                setpages(finalRes.pages || 1);
                setids([]); // Reset selection
            });
    };

    const testimonialsDelete = () => {
        if (ids.length >= 1) {
            axios.post(`${apiBaseUrl}testimonials/delete`, { ids })
                .then((res) => res.data)
                .then(() => {
                    testimonialsView();
                    setids([]);
                });
        } else {
            console.warn("Please select records to delete.");
        }
    };

    const testimonialsChangeStatus = () => {
        if (ids.length >= 1) {
            axios.put(`${apiBaseUrl}testimonials/change-status`, { ids })
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        testimonialsView();
                        setids([]);
                    }
                });
        } else {
            console.warn("Please select records to change status.");
        }
    };

    useEffect(() => {
        testimonialsView();
    }, [testimonialsName, currentPage, limit]);

    return (
        <>
            <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
                <p className='flex items-center gap-3'>
                    <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
                    <Link to={'/testimonials/add'} className='hover:text-blue-600'> / &nbsp; Testimonials </Link>
                    <span className=' text-gray-500'>  / &nbsp; View </span>
                </p>
                <hr className="bg-[#ccc] h-px border-0 my-2" />
            </div>

            {/* Search Box */}
            <section className={`max-w-full my-5 rounded-lg p-5 ${searchButton ? "block" : "hidden"}`} style={{ border: "1px solid #ccc" }}>
                <form className='flex items-center gap-1' onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Search Name' className='border p-2 w-[350px] rounded-sm bg-white border-[#ccc] h-[40px]' onChange={(e) => settestimonialsName(e.target.value)} />
                    <div className='bg-blue-600 p-2 h-[40px] cursor-pointer w-[40px] rounded-sm flex justify-center items-center'>
                        <IoIosSearch className='text-white text-lg font-semibold' onClick={testimonialsView} />
                    </div>
                </form>
            </section>

            {/* Main Table */}
            <section className='mt-5 max-w-full rounded-md' style={{ border: "1px solid #ccc" }}>
                <div className='bg-slate-100 flex p-4 justify-between items-center'>
                    <h3 className='text-[26px] font-semibold'>View Testimonial</h3>
                    <div className='flex items-center gap-2'>
                        <select className="block w-44 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg" onChange={(e) => { setlimit(Number(e.target.value)); setCurrentPage(1); }}>
                            <option className='bg-white text-black' value={5}>Select Page Limit</option>
                            <option className='bg-white text-black' value={10}>Page Limit: 10</option>
                            <option className='bg-white text-black' value={20}>Page Limit: 20</option>
                            <option className='bg-white text-black' value={50}>Page Limit: 50</option>
                        </select>

                        <div className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700 cursor-pointer' onClick={() => setsearchButton(!searchButton)}>
                            {searchButton ? <RiFilterOffFill /> : <FaFilter />}
                        </div>

                        <button onClick={testimonialsChangeStatus} className='bg-green-700 py-2 px-4 font-semibold text-sm text-white'>Change Status</button>
                        <button onClick={testimonialsDelete} className='bg-red-700 py-2.5 px-5 font-semibold text-sm text-white'>Delete</button>
                    </div>
                </div>

                <div className='px-4'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th className='w-[5%]'>
                                    <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                </th>
                                <th className='w-[10%]'>Sr no</th>
                                <th className='w-[25%]'>Title</th>
                                <th className='w-[12%]'>Image</th>
                                <th className='w-[15%]'>Message</th>
                                <th className='w-[8%]'>Rating</th>
                                <th className='w-[8%]'>Order</th>
                                <th className='w-[12%]'>Status</th>
                                <th className='w-[10%]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                testimonialsData.length > 0
                                    ? testimonialsData.map((value, index) => (
                                        <tr key={value._id} className="bg-white hover:bg-gray-50">
                                            <td><input type="checkbox" value={value._id} checked={ids.includes(value._id)} onChange={testimonialsChecked} /></td>
                                            <td>{index + 1}</td>
                                            <td>{value.testimonialsName}</td>
                                            <td>
                                                <img src={staticPath + value.testimonialsImage} className='w-[40px] h-[40px] rounded-full object-cover' />
                                            </td>
                                            <td className="px-6 py-4">{value.testimonialsMessage}</td>
                                            <td className="px-6 py-4">{value.testimonialsRating}</td>
                                            <td className="px-6 py-4">{value.testimonialsOrder}</td>
                                            <td className="px-6 py-4">
                                                <span className={`text-white px-3 py-1 rounded-full text-sm ${value.testimonialsStatus ? 'bg-green-600' : 'bg-red-600'}`}>
                                                    {value.testimonialsStatus ? "Active" : "Deactive"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to={`/edit-testimonials/${value._id}`}>
                                                    <div className='w-[35px] h-[35px] bg-blue-700 hover:bg-blue-800 text-white flex justify-center items-center rounded-full'>
                                                        <MdEdit />
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr>
                                        <td colSpan="9" className='text-center py-4 font-semibold text-gray-700'>No Data Found</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>

                <div className='p-4'>
                    <ResponsivePagination current={currentPage} total={pages} onPageChange={setCurrentPage} />
                </div>
            </section>
        </>
    );
}