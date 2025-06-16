import React, { useEffect, useState } from 'react'

import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import $ from 'jquery';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function CompnayProfile() {



    let apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let [comna, setcomna] = useState("")

    let [id, setid] = useState("")

    let [companyProfileData, setcompanyProfileData] = useState(
        {

            companyName: "",
            companyEmail: "",
            companyMobileNumber: "",
            companyFacebookLink: "",
            companyAddress: "",
            companyInstagrmaLink: "",
            companyYoutubeLink: "",
            companyMapLink: ""
        }
    )


    console.log("companyProfileData",companyProfileData)


    let companyAdd = (event) => {

        let companyData = new FormData(event.target)

        if (id == 0) {
            axios.post(`${apiBaseUrl}company-profile/add`, companyData)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })

        }
        else {
            axios.put(`${apiBaseUrl}company-profile/edit`, companyData, {
                params: {
                    id
                }
            })
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                    }
                    else {
                        finalRes.error(finalRes.msg)
                    }
                })
        }



        event.preventDefault()

    }

    let companyProfileView = (req, res) => {
        axios.get(`${apiBaseUrl}company-profile/view`)
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes.data)
                setcompanyProfileData({
                    companyName: finalRes.data.companyName,
                    companyEmail: finalRes.data.companyEmail,
                    companyFacebookLink: finalRes.data.companyFacebookLink,
                    companyInstagrmaLink: finalRes.data.companyInstagrmaLink,
                    companyYoutubeLink: finalRes.data.companyYoutubeLink,
                    companyAddress: finalRes.data.companyAddress,
                    companyMapLink: finalRes.data.companyMapLink,
                    companyMobileNumber: finalRes.data.companyMobileNumber
                })
                setid(finalRes.data._id)
            })
    }


    useEffect(() => {

        $(".dropify").dropify({
            messages: {
                default: "Drag and drop",
                error: "Oops, something went wrong",
                remove: "Remove"
            }
        });
    }, []);

    useEffect(() => {
        companyProfileView()

    }, [])
    return (
        <>
            <ToastContainer />

            <section className='max-w-full shadow-xl border-1 border-gray-200 bg-white rounded-lg  mt-12'>
                <div className='w-full p-5'>
                    <form action="" onSubmit={companyAdd}>
                        <div className='grid grid-cols-[35%_auto] gap-5'>

                            

                            {/* <div className="w-1/3 relative  ">
                                <label
                                    className="block  text-md font-medium text-gray-900"
                                >
                                    Category Image
                                </label>
                                <img src={"editData.categoryImage"} alt="Category"
                                    className="w-full h-[300px] border-2 p-2 rounded-[5px]   mb-2" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="categoryImage"
                                    id="categoryImage"
                                   
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div> 
                    {/*  onChange={(e) => setEditData({ ...editData, categoryImage: URL.createObjectURL(e.target.files[0]) })
                                    }  */}
                             
                            <div className=''>
                                <label htmlFor="" className='text-base font-semibold'>Category Image</label>
                                <div>
                                    <input
                                        name="companyImage"
                                        type="file"
                                        className="dropify"
                                        data-height="250"

                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Name</label>
                                <input type="text" placeholder='Name' value={companyProfileData.companyName} name="companyName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1'
                                    onChange={(e) => {
                                        let obj = { ...companyProfileData }
                                        obj['companyName'] = e.target.value
                                        setcompanyProfileData(obj)
                                    }}
                                />
                                <label htmlFor="" className='text-[16px] font-semibold'>Email</label>
                                <input type="email" placeholder='Email' value={companyProfileData.companyEmail} name="companyEmail"
                                    id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1'
                                    onChange={(e) => {
                                        let obj = { ...companyProfileData }
                                        obj['companyEmail'] = e.target.value
                                        setcompanyProfileData(obj)
                                    }}
                                />
                                <label htmlFor="" className='text-[16px] font-semibold'>Mobile Number</label>
                                <input type="number" placeholder='Mobile Number' value={companyProfileData.companyMobileNumber} name="companyMobileNumber" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1'
                                    onChange={(e) => {
                                        let obj = { ...companyProfileData }
                                        obj['companyMobileNumber'] = e.target.value
                                        setcompanyProfileData(obj)
                                    }} />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-[50%]'>
                                <label htmlFor="" className='text-[16px] font-semibold'>Facebook</label>
                                <input type="text" value={companyProfileData.companyFacebookLink} placeholder='Facebook Link' name="companyFacebookLink" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' onChange={(e) => {
                                    let obj = { ...companyProfileData }
                                    obj['companyFacebookLink'] = e.target.value
                                    setcompanyProfileData(obj)
                                }} />
                            </div>
                            <div className='w-[50%]'>
                                <label htmlFor="" className='text-[16px] font-semibold'>Instagram</label>
                                <input type="text" value={companyProfileData.companyInstagrmaLink} placeholder='Instagram Link' name="companyInstagrmaLink" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1'
                                    onChange={(e) => {
                                        let obj = { ...companyProfileData }
                                        obj['companyInstagrmaLink'] = e.target.value
                                        setcompanyProfileData(obj)
                                    }} />
                            </div>
                            <div className='w-[50%]'>
                                <label htmlFor="" className='text-[16px] font-semibold'>You Tube</label>
                                <input type="text" value={companyProfileData.companyYoutubeLink} placeholder='You Tube Link' name="companyYoutubeLink" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1'
                                    onChange={(e) => {
                                        let obj = { ...companyProfileData }
                                        obj['companyYoutubeLink'] = e.target.value
                                        setcompanyProfileData(obj)
                                    }} />
                            </div>

                        </div>

                        <label htmlFor="" className='text-[16px] font-semibold'>Address</label>
                        <textarea type="text" placeholder='Address' value={companyProfileData.companyAddress} name="companyAddress" id="" className='text-sm h-24 w-full border-2 shadow-sm border-gray-300 p-2 rounded-sm mt-1 resize-none'

                            onChange={(e) => {
                                let obj = { ...companyProfileData }
                                obj['companyAddress'] = e.target.value
                                setcompanyProfileData(obj)
                            }}
                        />

                        <label htmlFor="" className='text-[16px] font-semibold'>Google Map URL</label>
                        <textarea type="text" value={companyProfileData.companyMapLink} placeholder='Google Map URL' name="companyMapLink" id="" className='text-sm h-24 w-full border-2 shadow-sm border-gray-300 p-2 rounded-sm mt-1 resize-none' onChange={(e) => {
                            let obj = { ...companyProfileData }
                            obj['companyMapLink'] = e.target.value
                            setcompanyProfileData(obj)
                        }} />

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d118147.80351149273!2d70.82129635!3d22.27348695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749649627078!5m2!1sen!2sin" className='w-full' height="" allowfullscreen="" loading="lazy" ></iframe>

                        <button type='submit' className='focus:outline-none my-8 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer'>Update Your Profile</button>
                    </form>
                </div>
            </section>
        </>
    )
}