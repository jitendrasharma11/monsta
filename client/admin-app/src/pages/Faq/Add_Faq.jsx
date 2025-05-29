import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function AddFaq() {

    let { id } = useParams()
    console.log(id)

    let [faqQuestion, setfaqQustion] = useState("")
    let [faqAnswer, setfaqAnswer] = useState("")
    let [faqOrder, setfaqOrder] = useState("")


    let navigtion = useNavigate()

    let baseUrl = import.meta.env.VITE_APIBASEURL

    let faqSave = (event) => {
        event.preventDefault()

        let faqInsert = {
            faqQuestion,
            faqAnswer,
            faqOrder
        }
        if (id) {
            axios.put(`${baseUrl}faq/update/${id}`, faqInsert)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setfaqQustion("")
                        setfaqAnswer("")
                        setfaqOrder("")

                        setTimeout(() => {
                            navigtion("/view-faq")
                        }, 2000)

                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }
       
        else {
            axios.post(`${baseUrl}faq/add`, faqInsert)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setfaqQustion("")
                        setfaqAnswer("")
                        setfaqOrder("")

                        setTimeout(() => {
                            navigtion("/view-faq")
                        }, 2000)

                    }
                    else {
                        toast.error(finalRes.msg)
                    }
                })
        }

    }

    useEffect(() => {

        setfaqQustion('');
        setfaqAnswer('');
        setfaqOrder('');

        if (id) {
            axios.get(`${baseUrl}faq/edit-row-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    let { faqQuestion, faqAnswer, faqOrder } = finalRes.data;

                    setfaqQustion(faqQuestion);
                    setfaqAnswer(faqAnswer);
                    setfaqOrder(faqOrder);
                })

        }
    }, [id])

    return (
        <>
            <ToastContainer />
            <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
                <p className='flex items-center gap-3'>
                    <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
                    <Link to={'/faq/add'} className='hover:text-blue-600'> / &nbsp; Faq </Link>
                    <span className=' text-gray-500'>  / &nbsp; Add </span>
                </p>

                <hr className="bg-[#ccc] h-px border-0 my-2" />
            </div>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addFaq'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>Add Faq</h3>
                </div>
                <div>
                    <form onSubmit={faqSave} action="" className='p-2'>

                        <label htmlFor="" className='text-[16px] font-semibold'>Question</label>
                        <input type="text" value={faqQuestion} placeholder='Question' name="faqQustion" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5 mt-1' onChange={(e) => setfaqQustion(e.target.value)} />


                        <label htmlFor="" className='text-[16px] font-semibold'>Answer</label>
                        <textarea type="number" placeholder='Answer' name="faqAnswer" value={faqAnswer} id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[150px] p-2 rounded-sm mt-1 resize-none' onChange={(e) => setfaqAnswer(e.target.value)} />


                        <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                        <input type="number" value={faqOrder} onChange={(e) => setfaqOrder(e.target.value)} placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />

                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>{id ? "Update" : "Add"} Faq</button>
                    </form>

                </div>
            </section>
        </>
    )
}
