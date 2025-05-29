import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function ViewColor() {
    
    let [ids, setIds] = useState([]);
    let [getColorData, setGetColorData] = useState([]);
    let baseUrl = import.meta.env.VITE_APIBASEURL;

    let colorView = () => {
        axios.get(`${baseUrl}color/view`)
            .then((res) => res.data)
            .then((finalRes) => {
                setGetColorData(finalRes.data);
            });
    };

    useEffect(() => {
        colorView();
    }, []);

   let handleSelectAll = (e) => {
        if (e.target.checked) {
           let allIds = getColorData.map(item => item._id);
            setIds(allIds);
        } else {
            setIds([]);
        }
    };


    let getAllCheckedvalue = (event) => {
        if (event.target.checked && !ids.includes(event.target.value)) {
            setIds([...ids, event.target.value])
        }
        else {
            // let filnalArray=ids.filter((v)=>v!=event.target.value)
            setIds(ids.filter((v) => v != event.target.value))
        }
    }

    const colorMultipleDelete = () => {
        axios.post(`${baseUrl}color/delete`, { ids })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                colorView();
                setIds([]);
            });
    };
    useEffect(() => {
        console.log(ids)
    }, [ids])
    
    let changeStatus=()=>{
        axios.post(`${baseUrl}color/change-status`, { ids })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                colorView();
                setIds([]);
            });
    }
    return (
        <>
            <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
                <p className='flex items-center gap-3'>
                    <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
                    <Link to={'/color/add'} className='hover:text-blue-600'> / &nbsp; Color </Link>
                    <span className='text-gray-500'> / &nbsp; View </span>
                </p>
                <hr className="bg-[#ccc] h-px border-0 my-2" />
            </div>

            <section className='mt-5 max-w-full rounded-md' style={{ border: "1px solid #ccc" }} id='userForm'>
                <div className='bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <div>
                        <h3 className='text-[26px] font-semibold'>View Color</h3>
                    </div>
                    <div className='flex items-center gap-2 mr-3'>
                        <div className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'>
                            <FaFilter />
                        </div>
                        <button onClick={changeStatus} className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white'>Change Status</button>
                        <button onClick={colorMultipleDelete} className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white'>Delete</button>
                    </div>
                </div>

                <div className='form px-4'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th className='lg:w-[3%] sm:w-[7%]'>
                                    <div className='flex items-center'>
                                        <input
                                            type="checkbox"
                                            className='w-4 h-4'
                                            onChange={handleSelectAll}
                                            checked={getColorData.length > 0 && ids.length === getColorData.length}
                                        />
                                    </div>
                                </th>
                                <th scope='col' className='w-[20%]'>Color Name</th>
                                <th scope='col' className='w-[12%]'>Code</th>
                                <th scope='col' className='w-[15%]'>Order</th>
                                <th scope='col' className='w-[11%]'>Status</th>
                                <th scope='col' className='w-[6%]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getColorData.length >= 1 ? (
                                getColorData.map((value) => {
                                    const { _id, colorName, colorCode, colorOrder, colorStatus } = value;
                                    return (
                                        <tr key={_id} className='bg-white border-gray-200 hover:bg-gray-50'>
                                            <td className='w-[3%] py-7'>
                                                <input
                                                    onChange={getAllCheckedvalue}
                                                    type="checkbox"
                                                    className='w-4 h-4'
                                                    checked={ ids.includes(value._id)}
                                                    value={value._id}
                                                />
                                            </td>
                                            <td className='text-base font-semibold text-black'>{colorName}</td>
                                            <td>{colorCode}</td>
                                            <td>{colorOrder}</td>
                                            <td>
                                                {colorStatus ? (
                                                    <button className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Active</button>
                                                ) : (
                                                    <button className='bg-gradient-to-r from-red-400 via-red-500 to-red-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Deactive</button>
                                                )}
                                            </td>
                                            <td>
                                                <Link to={`/edit-color/${value._id}`}>
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
                                    <td className='text-center text-black text-xl' colSpan={6}>Color Not Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}