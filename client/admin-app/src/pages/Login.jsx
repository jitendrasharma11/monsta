import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { loginContext } from '../Context/mainContext';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Login() {

  let { adminID, setAdminID } = useContext(loginContext)
  let [showPassword, setShowPassword] = useState(false);

  let navigation = useNavigate()
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let loginAdmin = (event) => {

    let obj = {
      adminEmail: event.target.email.value,
      adminPassword: event.target.password.value
    }
    event.preventDefault()
    axios.post(`${apiBaseUrl}auth/login`, obj)
      .then((res) => res.data)

      .then((finalRes) => {
        if (finalRes.status) {

          setAdminID(finalRes.adminId)

        }
        else {
          alert(finalRes.msg)

        }
      })
  }


  useEffect(() => {
    if (adminID != "") {
      navigation("/dashboard")
    }

  }, [adminID])


  return (
    <div>
      <section className='bg-gray-50'>
        <div className='flex flex-col items-center justify-center gap-4 py-[50px]'>
          <a href='#'>
            <img src='https://www.wscubetech.com/images/wscube-tech-logo-2.svg' alt='WsCube Tech Logo' />
          </a>

          <form onSubmit={loginAdmin} className="w-[500px] bg-white rounded-lg shadow-2xl py-8 px-6">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className="mb-5 relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-3 text-sm text-gray-500 cursor-pointer select-none"
              >
                {showPassword ? <FaRegEye className='text-2xl' /> : <FaRegEyeSlash  className='text-2xl' />}
              </span>
            </div>
            <div className="mb-5 text-right">
              <Link to={'/forgot-password'} className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}