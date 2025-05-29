import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color';
import { Link, useNavigate, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
export default function Addcolor() {

  let { id } = useParams()


  let [colorFromValue, setcolorFromValue] = useState({
    colorName: '',
    colorCode: '',
    colorOrder: ''
  })

  let baseUrl = import.meta.env.VITE_APIBASEURL

  let navigation = useNavigate()

  const handleChangeComplete = (newColor) => {
    let obj = { ...colorFromValue }
    obj['colorCode'] = newColor.hex;
    setcolorFromValue(obj)

  };




  let colorSave = (event) => {
    event.preventDefault()
    
    if (id) {
       axios.put(`${baseUrl}color/update/${id}`, colorFromValue)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            toast.success(finalRes.msg)
            setcolorFromValue({
              colorName: '',
              colorCode: '',
              colorOrder: ''
            })
            setTimeout(() => {
              navigation('/view-color')
            }, 2000)
          }
          else {
            toast.error(finalRes.msg)
          }
        })
    }
    
    else {
      axios.post(`${baseUrl}color/insert`, colorFromValue)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            toast.success(finalRes.msg)
            setcolorFromValue({
              colorName: '',
              colorCode: '',
              colorOrder: ''
            })
            setTimeout(() => {
              navigation('/view-color')
            }, 2000)
          }
          else {
            toast.error(finalRes.msg)
          }
        })
    }

  }
  useEffect(() => {

    setcolorFromValue({
      colorName: '',
      colorCode: '',
      colorOrder: ''
    })

    if (id) {
      axios.get(`${baseUrl}color/edit-row-data/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {

          setcolorFromValue({
            colorName: finalRes.data.colorName,
            colorCode: finalRes.data.colorCode,
            colorOrder: finalRes.data.colorOrder
          });

        });
    }
  }, [id]);
  return (
    <>
      <ToastContainer />
      <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
        <p className='flex items-center gap-3'>
          <Link to={'/dashboard'} className='hover:text-blue-600'>Home</Link>
          <Link to={'/color/add'} className='hover:text-blue-600'> / &nbsp; Color </Link>
          <span className=' text-gray-500'>  / &nbsp; Add </span>
        </p>
        <hr className="bg-[#ccc] h-px border-0 my-2" />
      </div>
      <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addColor'>
        <div className=' bg-slate-100 flex p-2 justify-between items-center form-heading'>
          <h3 className='text-[20px] font-semibold'>Add Colors</h3>
        </div>
        <div>
          <form action="" onSubmit={colorSave} className='p-2'>
            <label htmlFor="" className='text-[16px] font-semibold'>Color Name</label>
            <input type="text" placeholder='Enter Color Name' name="colorName" value={colorFromValue.colorName} id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1'
              onChange={(e) => {
                let obj = { ...colorFromValue }
                obj['colorName'] = e.target.value
                // console.log(obj['colorName'])
                setcolorFromValue(obj)
                // console.log(e.target.value)
              }}
            />
            <div className='my-4'>

              <label htmlFor="" className='text-[16px] font-semibold'>Color Picker</label>
              <SketchPicker color={colorFromValue.colorCode} onChangeComplete={handleChangeComplete} />
            </div>
            <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
            <input type="number" placeholder='Enter Order' value={colorFromValue.colorOrder} name="colorOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1'

              onChange={(e) => {
                let obj = { ...colorFromValue }
                obj['colorOrder'] = e.target.value
                setcolorFromValue(obj)
              }}

            />

            <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>{id ? "Update" : "Add"} Color</button>
          </form>

        </div>
      </section>

    </>
  )
}
