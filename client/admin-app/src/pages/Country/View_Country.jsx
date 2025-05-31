import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFilter, FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function View_Country() {

    const [ids, setIds] = useState([]);
    const [countryName, setCountryName] = useState('');   // API filter param
    const [getCountryData, setGetCountryData] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');     // Client-side filter
    const [selectAll, setSelectAll] = useState(false);

    const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    // Fetch data from API with filter param
    const getCountry = () => {
        axios.get(`${apiBaseUrl}country/view`, {
            params: { countryName }
        })
            .then(res => res.data)
            .then(finalRes => {
                setGetCountryData(finalRes.data);
            })
            .catch(err => console.error("Fetch Country Error:", err));
    };

    // Call API whenever countryName changes (server side search)
    useEffect(() => {
        getCountry();
    }, [countryName]);

    // Toggle search input visibility
    const toggleSearch = () => {
        setShowSearch(prev => !prev);
        setSearchTerm('');  // Reset client-side filter on toggle
        setCountryName(''); // Reset API filter on toggle (optional)
    };

    // Filter data client side based on searchTerm
    const filteredCountries = getCountryData.filter(item =>
        item.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Select all checkbox handler
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            const allIds = getCountryData.map(item => item._id);
            setIds(allIds);
        } else {
            setIds([]);
        }
        setSelectAll(event.target.checked);
    };

    // Single checkbox handler
    const getAllCheckedvalue = (event) => {
        const value = event.target.value;
        if (event.target.checked && !ids.includes(value)) {
            setIds([...ids, value]);
        } else {
            setIds(ids.filter(id => id !== value));
        }
    };

    // Delete selected countries
    const countryDelete = () => {
        axios.post(`${apiBaseUrl}country/delete`, { ids })
            .then(res => res.data)
            .then(() => {
                getCountry();
                setIds([]);
            })
            .catch(err => console.error("Delete Error:", err));
    };

    // Change status for selected countries
    const changeStatus = () => {
        axios.post(`${apiBaseUrl}country/change-status`, { ids })
            .then(res => res.data)
            .then(() => {
                getCountry();
                setIds([]);
            })
            .catch(err => console.error("Change Status Error:", err));
    };

    // Sync selectAll if all individual checkboxes are selected
    useEffect(() => {
        if (getCountryData.length > 0) {
            setSelectAll(getCountryData.length === ids.length);
        }
    }, [ids, getCountryData]);

    return (
        <>
            <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
                <p className='flex items-center gap-3'>
                    <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
                    <Link to={'/country/add'} className='hover:text-blue-600'> / &nbsp; Country </Link>
                    <span className=' text-gray-500'>  / &nbsp; View </span>
                </p>
                <hr className="bg-[#ccc] h-px border-0 my-2" />
            </div>

            <section className='mt-5 max-w-full rounded-md border border-gray-300' id='viewCategory'>
                <div className='bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>View Country</h3>
                    <div className='flex items-center gap-2 mr-3'>
                        <button onClick={toggleSearch} className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'>
                            {showSearch ? <FaTimes /> : <FaFilter />}
                        </button>
                        <button onClick={changeStatus} className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white'>Change Status</button>
                        <button onClick={countryDelete} className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white'>Delete</button>
                    </div>
                </div>
                {showSearch && (
                    <form onSubmit={(e) => e.preventDefault()} className='p-4 flex items-center gap-2'>
                        <input
                            type='text'
                            placeholder='Search Name'
                            className='border border-gray-300 px-4 py-2 rounded-md w-[300px]'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="submit"
                            className='bg-blue-600 p-2 rounded-md text-white'
                            onClick={getCountry}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.707 20.293l-5.387-5.387A7.935 7.935 0 0016 9a8 8 0 10-8 8 7.935 7.935 0 005.906-2.68l5.387 5.387a1 1 0 001.414-1.414zM4 9a5 5 0 1110 0A5 5 0 014 9z" />
                            </svg>
                        </button>
                    </form>
                )}

                <div className='form px-4'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th className=" px-2 ">
                                    <input
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                                    />
                                </th>
                                <th className='lg:w-[60%] sm:w-[40%]'>Country Name</th>
                                <th className='w-[15%]'>Order</th>
                                <th className='lg:w-[15%] sm:w-[18%]'>Status</th>
                                <th className='w-[10%]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredCountries.length > 0
                                    ? filteredCountries.map((items, index) => {
                                        const { countryName, countryOrder, countryStatus } = items;
                                        return (
                                            <tr key={items._id || index} className='bg-white hover:bg-gray-50 '>
                                                <td>
                                                    <input
                                                        onChange={getAllCheckedvalue}
                                                        checked={ids.includes(items._id)}
                                                        value={items._id}
                                                        type="checkbox"
                                                        className='w-4 h-4'
                                                    />
                                                </td>
                                                <td className='text-base font-semibold text-black py-3'>{countryName}</td>
                                                <td>{countryOrder}</td>
                                                <td>
                                                    <button className={`py-1.5 px-5 font-semibold text-white rounded-sm 
                                                        ${countryStatus
                                                            ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
                                                            : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600'}`}>
                                                        {countryStatus ? 'Active' : 'Inactive'}
                                                    </button>
                                                </td>
                                                <td>
                                                    <Link to={`/edit-country/${items._id}`}>
                                                        <button className='flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-full'>
                                                            <MdEdit className='text-[18px]' />
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    :
                                    <tr>
                                        <td colSpan={5} className='text-center text-black text-xl'>No Country Found</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}