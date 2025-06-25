"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { Country } from '../data/Country';
import { useSelector } from 'react-redux';
import { store } from '../store/store';
import axios from 'axios';
export default function Dashboard() {

    let token = useSelector((store) => store.login.token)

    let [dashBoardButton, setdashBoardButton] = useState(1)

    let [countryBillingTitle, setcountryBillingTitle] = useState("Select Country")

    let [countryBillingButton, setcountryBillingButton] = useState(false)

    let [countryShippingTitle, setcountryShippingTitle] = useState("Select Country")

    let [countryShippingButton, setcountryShippingButton] = useState(false)

    let [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        address: '',
    });

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

    let userDta = (e) => {
        axios.post(`${apiBaseUrl}user/data`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log(res.data)
                let data = res.data.userData;
                setUserData({
                    userName: data.userName || '',
                    userEmail: data.userEmail || '',
                    userPhone: data.userPhone || '',
                    address: data.userAddress || '',
                    gender: data.userGender || '',
                });
            })
    }

    let changePassword = (e) => {

        let oldPassword = e.target.oldPassword.value
        let newPassword = e.target.newPassword.value
        let confirmPassword = e.target.confirmPassword.value

        console.log(token)
        console.log(oldPassword, newPassword, confirmPassword)

        let obj = {
            oldPassword,
            newPassword,
            confirmPassword
        }

        axios.post(`${apiBaseUrl}user/change-password`, obj, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.data.status) {

                }
                else {
                    alert(res.data.msg)
                }
            })

        e.preventDefault()
    }

    useEffect(() => {
        userDta()
    }, [])


    let editProfile = (e) => {
        e.preventDefault()

        let userObj = {
            name: e.target.userName.value,
            address: e.target.address.value,
            gender: e.target.gender.value,
            phone: e.target.userPhone.value,
        }

        axios.post(`${apiBaseUrl}user/update-profile`, userObj, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.data.status) {
                    alert("Profile updated successfully")
                }
                else {
                    alert(res.data.msg)
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <>
            <section className="max-w-full my-8" id="my-dashboard">
                <div className="max-w-[1320px] lg:mx-auto mx-2" id="mydashboard-mid">
                    <div className="w-full text-center" id="muAccount-mid-heading">
                        <h2 className="lg:text-4xl sm:text-4xl text-2xl font-semibold">
                            My Dashboard
                        </h2>
                        <div className="flex items-center justify-center gap-2 lg:my-3 sm:my-3 my-2">
                            <Link href="/" className="text-sm hover:text-[#C09578]">
                                Home
                            </Link>
                            <FaAngleRight className="text-[#C09578]" />
                            <Link href="/my-dashboard" className="text-sm text-[#C09578]">
                                My Dashboard
                            </Link>
                        </div>
                        <hr className="border-gray-200 my-5" />
                    </div>
                </div>
            </section>

            <section className='max-w-full my-8' id='my-dashboard-content'>
                <div className='max-w-[1320px] lg:mx-auto mx-2'>
                    <div className='max-w-full grid lg:grid-cols-[23%_auto] sm:grid-cols-[23%_auto] gap-5'>


                        <div id='my-dashBoard-button'>
                            <button className={`w-full  py-3 rounded-sm text-sm font-bold cursor-pointer text-left px-3 text-white hover:bg-[#C09578] my-1 ${dashBoardButton == 1 ? 'bg-[#C09578]' : 'bg-[#212121]'}`} onClick={() => setdashBoardButton(1)}>My Dashboard</button>

                            <button className={`w-full  py-3 rounded-sm text-sm font-bold cursor-pointer text-left px-3 text-white hover:bg-[#C09578] my-1 ${dashBoardButton == 2 ? 'bg-[#C09578]' : 'bg-[#212121]'}`} onClick={() => setdashBoardButton(2)}>Orders</button>

                            <button className={`w-full  py-3 rounded-sm text-sm font-bold cursor-pointer text-left px-3 text-white hover:bg-[#C09578] my-1 ${dashBoardButton == 3 ? 'bg-[#C09578]' : 'bg-[#212121]'}`} onClick={() => setdashBoardButton(3)}>Addresses</button>

                            <button className={`w-full  py-3 rounded-sm text-sm font-bold cursor-pointer text-left px-3 text-white hover:bg-[#C09578] my-1 ${dashBoardButton == 4 ? 'bg-[#C09578]' : 'bg-[#212121]'}`} onClick={() => setdashBoardButton(4)}>My Profile</button>

                            <button className={`w-full  py-3 rounded-sm text-sm font-bold cursor-pointer text-left px-3 text-white hover:bg-[#C09578] my-1 ${dashBoardButton == 5 ? 'bg-[#C09578]' : 'bg-[#212121]'}`} onClick={() => setdashBoardButton(5)}>Change Password</button>

                            <button className={`w-full  py-3 rounded-sm text-sm font-bold cursor-pointer text-left px-3 text-white hover:bg-[#C09578] my-1 ${dashBoardButton == 6 ? 'bg-[#C09578]' : 'bg-[#212121]'}`} onClick={() => setdashBoardButton(6)}>Logout</button>
                        </div>



                        <div id='my-dashboard-content'>

                            <div className={`${dashBoardButton == 1 ? 'block' : 'hidden'}`} id='my-dashboard'>
                                <h3 className='lg:text-xl text-base font-semibold'>My Dashboard</h3>
                                <p className='py-3 lg:text-base text-sm font-normal text-[#5A5A5A] '>From your account dashboard. you can easily check & view your <span className='text-black  font-semibold'> recent orders </span>, manage your   <span className='text-black font-semibold'>shipping and billing addresses </span> and <span className='text-black font-semibold'> Edit your password and account details.</span> </p>
                            </div>

                            <div className={`${dashBoardButton == 2 ? 'block' : 'hidden'}`} id='orders'>
                                <h3 className='text-xl font-semibold'>Orders</h3>
                                <div className="lg:overflow-x-auto sm:overflow-x-auto overflow-x-scroll my-5">
                                    <table className="max-w-full text-sm text-left border border-gray-200">
                                        <thead className="bg-gray-100 text-center">
                                            <tr>
                                                <th className="px-4 py-3 font-semibold text-gray-800 border border-gray-200">Order</th>
                                                <th className="px-4 py-3 font-semibold text-gray-800 border border-gray-200">Date</th>
                                                <th className="px-4 py-3 font-semibold text-gray-800 border border-gray-200">Status</th>
                                                <th className="px-4 py-3 font-semibold text-gray-800 border border-gray-200">Total</th>
                                                <th className="px-4 py-3 font-semibold text-gray-800 border border-gray-200">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            <tr className="border-t border-gray-200">
                                                <td className="px-4 py-3 text-gray-800 border-r-1 border-gray-200">1</td>
                                                <td className="px-4 py-3 text-gray-800 border-r-1 border-gray-200 ">May 10, 2018</td>
                                                <td className="px-4 py-3 font-semibold text-gray-800 border-r-1 border-gray-200">Completed</td>
                                                <td className="px-4 py-3 font-semibold text-gray-800 border-r-1 border-gray-200">Rs. 25.00 For 1 Item</td>
                                                <td className="px-4 py-3 text-[#C09578] font-semibold cursor-pointer hover:underline ">View</td>
                                            </tr>
                                            <tr className="border-t border-gray-200">
                                                <td className="px-4 py-3 text-gray-800 border-r-1 border-gray-200">2</td>
                                                <td className="px-4 py-3 text-gray-800 border-r-1 border-gray-200">May 10, 2018</td>
                                                <td className="px-4 py-3 font-semibold text-gray-800 border-r-1 border-gray-200">Processing</td>
                                                <td className="px-4 py-3 font-semibold text-gray-800 border-r-1 border-gray-200">Rs. 17.00 For 1 Item</td>
                                                <td className="px-4 py-3 text-[#C09578] font-semibold cursor-pointer hover:underline border-r-1 border-gray-200">View</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div className={`${dashBoardButton == 3 ? 'block' : 'hidden'}`} id='address'>
                                <p className='text-sm text-[#5A5A5A] font-normal'>The following addresses will be used on the checkout page by default.</p>

                                <div className='w-full grid lg:grid-cols-2 gap-5 my-5' id='billing-shipping-addresses'>


                                    <div id='billing-address'>
                                        <h3 className='lg:text-xl text-base font-normal capitalize'>Billing address</h3>
                                        <div className='w-full border-1 border-gray-300 rounded-sm my-2 p-4' id='billing-form'>
                                            <form action="">
                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Name*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-3' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Email*</label>
                                                <input type="email" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Mobile Number*</label>
                                                <input type="tel" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />


                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Address*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />


                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Country*</label>

                                                <div className='relative mb-2' id='country'>

                                                    <button type='button' className='w-full text-left lg:text-base text-sm p-2 border-1 border-gray-200 rounded-sm mt-2 text-gray-600' onClick={() => setcountryBillingButton(!countryBillingButton)}>{countryBillingTitle}
                                                    </button>
                                                    <div className={`w-full border-1 h-[500px] overflow-y-scroll  border-gray-200 rounded-sm absolute top-[100%] bg-white ${countryBillingButton ? 'block' : 'hidden'}`}>
                                                        <nav>
                                                            <ul>

                                                                {
                                                                    Country.map((value, index) => {
                                                                        let { id, title } = value
                                                                        return (
                                                                            <li key={id} className=' text-base py-1 hover:bg-blue-600 hover:text-white w-full p-3 ' onClick={() => {
                                                                                setcountryBillingButton(false)
                                                                                setcountryBillingTitle(title)
                                                                            }}>
                                                                                {title}
                                                                            </li>
                                                                        )
                                                                    })
                                                                }

                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>State*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>City*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <button type='submit' className='py-2 px-5 my-5  font-semibold text-sm bg-[#C09578] rounded-xl text-white flex justify-end ml-auto cursor-pointer hover:bg-black hover:text-white' >Update</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div id='shipping-address'>
                                        <h3 className='lg:text-xl text-base font-normal capitalize'>shipping address</h3>
                                        <div className='w-full border-1 border-gray-300 rounded-sm my-2 p-4' id='shipping-form'>
                                            <form action="">
                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Name*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-3' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Email*</label>
                                                <input type="email" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Mobile Number*</label>
                                                <input type="tel" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />


                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Address*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Country*</label>

                                                <div className='relative mb-2' id='country'>

                                                    <button type='button' className='w-full text-left lg:text-base text-sm p-2 border-1 border-gray-200 rounded-sm mt-2 text-gray-600' onClick={() => setcountryShippingButton(!countryShippingButton)}>{countryShippingTitle}
                                                    </button>
                                                    <div className={`w-full border-1 h-[500px] overflow-y-scroll  border-gray-200 rounded-sm absolute top-[100%] bg-white ${countryShippingButton ? 'block' : 'hidden'}`}>
                                                        <nav>
                                                            <ul>

                                                                {
                                                                    Country.map((value, index) => {
                                                                        let { id, title } = value
                                                                        return (
                                                                            <li key={id} className=' lg:text-base text-sm py-1 hover:bg-blue-600 hover:text-white w-full p-3 ' onClick={() => {
                                                                                setcountryShippingButton(false)
                                                                                setcountryShippingTitle(title)
                                                                            }}>
                                                                                {title}
                                                                            </li>
                                                                        )
                                                                    })
                                                                }

                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>State*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>City*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <button type='submit' className='py-2 px-5 my-5  font-semibold text-sm bg-[#C09578] rounded-xl text-white flex justify-end ml-auto cursor-pointer hover:bg-black hover:text-white' >Update</button>
                                            </form>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className={`${dashBoardButton == 4 ? 'block' : 'hidden'}`} id='profile'>
                                <h3 className='lg:text-xl text-base font-semibold'>My Profile</h3>
                                <div className='w-full border-1 border-gray-300 rounded-sm my-2 p-4' id='billing-form'>
                                    <form onSubmit={editProfile} action="">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={userData.gender === 'male'}
                                            onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                                        />
                                        <label className='font-semibold'>Mr.</label>
                                        &nbsp;&nbsp;&nbsp;
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={userData.gender === 'female'}
                                            onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                                        /> <label className='font-semibold'>Mrs.</label>
                                        <br /><br />

                                        <label className='text-sm font-semibold hover:text-[#C09578]'>Name*</label>
                                        <input
                                            type="text"
                                            name="userName"
                                            defaultValue={userData.userName}

                                            className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2'
                                        />

                                        <label className='text-sm font-semibold hover:text-[#C09578]'>Email*</label>
                                        <input
                                            type="email"
                                            name="userEmail"
                                            defaultValue={userData.userEmail}
                                            readOnly

                                            className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2'
                                        />

                                        <label className='text-sm font-semibold hover:text-[#C09578]'>Mobile Number*</label>
                                        <input
                                            type="tel"
                                            name="userPhone"
                                            defaultValue={userData.userPhone}
                                            

                                            className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2'
                                        />

                                        <label className='text-sm font-semibold hover:text-[#C09578]'>Address*</label>
                                        <input
                                            type="text"
                                            name="address"
                                            defaultValue={userData.address}

                                            className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2'
                                        />

                                        <button type='submit' className='py-2 px-5 my-5 font-semibold text-sm bg-[#C09578] rounded-xl text-white ml-auto hover:bg-black hover:text-white'>
                                            Update
                                        </button>
                                    </form>
                                </div>
                            </div>


                            <div className={`${dashBoardButton == 5 ? 'block' : 'hidden'}`} id='cahngePassword'>
                                <h3 className='lg:text-xl text-base font-semibold'>Change Password</h3>
                                <div className='w-full border-1 border-gray-300 rounded-sm my-2 p-4' id='changePassword-form'>
                                    <form onSubmit={changePassword} action="">
                                        <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Current Password</label>
                                        <input name='oldPassword' type="password" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />


                                        <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>New Password</label>
                                        <input name='newPassword' type="password" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />


                                        <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Confirm Password</label>
                                        <input name='confirmPassword' type="password" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />




                                        <button type='submit' className='py-2 px-5 my-5  font-semibold text-sm bg-[#C09578] rounded-xl text-white flex justify-end ml-auto cursor-pointer hover:bg-black hover:text-white' >Change Password</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
