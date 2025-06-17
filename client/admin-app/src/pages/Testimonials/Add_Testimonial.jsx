import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import $ from 'jquery';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
export default function AddTestimonials() {



  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let navigation = useNavigate()

  let { id } = useParams()

  let [staticPath, setstaticPath] = useState("")

  let [testimonialsSingleData, settestimonialsSingleData] = useState({
    testimonialsName: "",
    testimonialsDesignation: "",
    testimonialsRating: "",
    testimonialsOrder: "",
    testimonialsMessage: "",
    testimonialsImage: ""
  })

  let testimonialsAdd = (event) => {
    event.preventDefault()


    let testimonialsValue = new FormData(event.target)

    if (id) {
      axios.put(`${apiBaseUrl}testimonials/edit/${id}`, testimonialsValue)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            toast.success(finalRes.msg)
            event.target.reset()
            $(".dropify").data('dropify').clearElement();
            setTimeout(() => {
              navigation("/view-testimonials")
            }, 2000)
          }
          else {
            toast.error(finalRes.msg)
          }
        })
    }

    else {
      axios.post(`${apiBaseUrl}testimonials/add`, testimonialsValue)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            toast.success(finalRes.msg)
            event.target.reset()
            $(".dropify").data('dropify').clearElement();
            setTimeout(() => {
              navigation("/view-testimonials")
            }, 2000)
          }
          else {
            toast.error(finalRes.msg)
          }
        })
    }

  }

  let testimonialsSingleView = () => {
    axios.get(`${apiBaseUrl}testimonials/view/${id}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setstaticPath(finalRes.staticPath)
        settestimonialsSingleData({
          testimonialsName: finalRes.data.testimonialsName,
          testimonialsOrder: finalRes.data.testimonialsOrder,
          testimonialsDesignation: finalRes.data.testimonialsDesignation,
          testimonialsRating: finalRes.data.testimonialsRating,
          testimonialsMessage: finalRes.data.testimonialsMessage,
          testimonialsImage: staticPath + finalRes.data.testimonialsImage
        })
      })
  }

  useEffect(() => {
    // Initialize Dropify with custom placeholder text
    $(".dropify").dropify({
      messages: {
        default: "Drag and drop", // Custom placeholder-like text
        error: "Oops, something went wrong",
        remove: "Remove"
      }
    });
  }, []);

  useEffect(() => {

    settestimonialsSingleData({
      testimonialsName: "",
      testimonialsDesignation: "",
      testimonialsRating: "",
      testimonialsOrder: "",
      testimonialsMessage: "",
      testimonialsImage: ""
    })

    if (id) {
      testimonialsSingleView()

    }
  }, [id])
  return (
    <>
      {/* <img src={testimonialsSingleData.testimonialsImage} alt="" /> */}
      <ToastContainer />
      <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
        <p className='flex items-center gap-3'>
          <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
          <Link to={'/testimonials/add'} className='hover:text-blue-600'> / &nbsp; Testimonials </Link>
          <span className=' text-gray-500'>  / &nbsp; View </span>
        </p>
        <hr className="bg-[#ccc] h-px border-0 my-2" />
      </div>
      <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addWhyChoose'>
        <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
          <h3 className='text-[26px] font-semibold'>Add Testimonials</h3>
        </div>
        <div>
          <form onSubmit={testimonialsAdd} action="" className='p-2'>
            <div className='grid grid-cols-[35%_auto] gap-5'>
              <div className='' >
                <label htmlFor="" className='text-[16px] font-semibold'>Testimonials Image</label>
                <div>
                  <input

                    name="testimonialsImage"
                    type="file"
                    className="dropify"
                    data-height="250"
                    data-default-file={testimonialsSingleData.testimonialsImage}
                  />
                </div>
              </div>
              <div>

                <label htmlFor="" className='text-[16px] font-semibold'>Name</label>
                <input type="text" value={testimonialsSingleData.testimonialsName} placeholder='Name' name="testimonialsName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'

                  onChange={(e) => {
                    let obj = { ...testimonialsSingleData };
                    obj['testimonialsName'] = e.target.value;
                    settestimonialsSingleData(obj);
                  }}

                />

                <label htmlFor="" className='text-[16px] font-semibold'>Designation</label>
                <input type="text" value={testimonialsSingleData.testimonialsDesignation} placeholder='Designation' name="testimonialsDesignation" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'

                  onChange={(e) => {
                    let obj = { ...testimonialsSingleData };
                    obj['testimonialsDesignation'] = e.target.value;
                    settestimonialsSingleData(obj);
                  }}

                />


                <label htmlFor="" className='text-[16px] font-semibold'>Rating</label>
                <input type="number" value={testimonialsSingleData.testimonialsRating} placeholder='Rating' name="testimonialsRating" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'
                  onChange={(e) => {
                    let obj = { ...testimonialsSingleData };
                    obj['testimonialsRating'] = e.target.value;
                    settestimonialsSingleData(obj);
                  }}

                />

                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                <input type="number" value={testimonialsSingleData.testimonialsOrder} placeholder='Order' name="testimonialsOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'
                  onChange={(e) => {
                    let obj = { ...testimonialsSingleData };
                    obj['testimonialsOrder'] = e.target.value;
                    settestimonialsSingleData(obj);
                  }}
                />

                <label htmlFor="" className='text-[16px] font-semibold'>Message</label>
                <textarea name='testimonialsMessage' value={testimonialsSingleData.testimonialsMessage} className='text-sm w-full border-2 shadow-sm resize-none  border-gray-300 h-[100px] p-2 rounded-sm mt-1'

                  onChange={(e) => {
                    let obj = { ...testimonialsSingleData };
                    obj['testimonialsMessage'] = e.target.value;
                    settestimonialsSingleData(obj);
                  }}
                />
              </div>
            </div>


            <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2 cursor-pointer'>{id ? "Update" : "Add"} Testimonial</button>
          </form>

        </div>
      </section>
    </>
  )
}