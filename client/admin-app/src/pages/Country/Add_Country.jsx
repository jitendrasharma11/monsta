import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'


export default function Add_Country() {

    let { id } = useParams()


    let [countryName, setcountryName] = useState("")

    let [countryOrder, setcountryOrder] = useState("")

    let baseUrl = import.meta.env.VITE_APIBASEURL

    let navigation = useNavigate()
    let countrySave = (event) => {
        event.preventDefault()

        let countryData = {
            countryName,
            countryOrder
        }
        if (id) {
             axios.put(`${baseUrl}country/update/${id}`, countryData)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setcountryName("")
                        setcountryOrder("")
                        setTimeout(() => {
                            navigation("/view-country")
                        }, 2000)
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }
        else {
            axios.post(`${baseUrl}country/add`, countryData)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setcountryName("")
                        setcountryOrder("")
                        setTimeout(() => {
                            navigation("/view-country")
                        }, 2000)
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }


    }
    useEffect(() => {

        setcountryName('');
        setcountryOrder('');

        if (id) {
            axios.get(`${baseUrl}country/edit-row-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    console.log("editData",finalRes)
                    let { countryName, countryOrder } = finalRes.data;

                    setcountryName(countryName);
                    setcountryOrder(countryOrder);
                })

        }
    }, [id])

    return (
        <>
            <ToastContainer />
            <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
                <p className='flex items-center gap-3'>
                    <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
                    <Link to={'/country/add'} className='hover:text-blue-600'> / &nbsp; Country </Link>
                    <span className=' text-gray-500'>  / &nbsp; Add </span>
                </p>
                <hr className="bg-[#ccc] h-px border-0 my-2" />
            </div>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addMetrials'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>Add Country</h3>
                </div>
                <div>
                    <form action="" onSubmit={countrySave} className='p-2'>
                        <label htmlFor="" className='text-[16px] font-semibold'>Country Name</label>
                        <input type="text" value={countryName} onChange={(e) => setcountryName(e.target.value)} placeholder='Enter Color Name' name="countryName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                        <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                        <input type="number" value={countryOrder} onChange={(e) => setcountryOrder(e.target.value)} placeholder='Enter Order' name="countryOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />

                        <button className='text-white cursor-pointer bg-purple-700 border-0 my-5 rounded-sm p-2'>{id ? "Update" : "Add"} Country</button>
                    </form>

                </div>
            </section>
        </>
    )
}

export { Add_Country }