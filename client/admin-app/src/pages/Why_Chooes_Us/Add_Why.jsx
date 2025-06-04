import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add_Why() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;
  const navigate = useNavigate();

  let { id } = useParams()

  useEffect(() => {
    $('.dropify').dropify({
      messages: {
        default: 'Drag and drop',
        error: 'Ooops, something went wrong.',
      },
      tpl: {
        loader: '<div class="dropify-loader"></div>',
        errorLine: '<p class="dropify-error">{{ error }}</p>',
        message: `<div class="dropify-message"><span class="file-icon" /> <p class="text-[25px]">{{ default }}</p></div>`,
      },
    });
  }, []);
  

  const saveWhyChoose = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios.post(`${apiBaseUrl}whychoose/insert`, formData)
      .then((finalRes) => {
        const res = finalRes.data;
        if (res.status) {
          toast.success(res.msg || 'Why Choose Us item added successfully');
          e.target.reset();
          $('.dropify').data('dropify').clearElement();

          setTimeout(() => {
            navigate('/view-why');
          }, 2000);
        } else {
          toast.error(res.msg || 'Something went wrong');
        }
      })
      .catch(() => {
        toast.error('Network error or server not responding');
      });
  };

  return (
    <div>
      <ToastContainer />
      <section className="w-full">
        <div className="border-b-2 text-gray-300"></div>
        <div className="py-3">
          <nav className="mt-1">
            <ul className="flex items-center">
              <li>
                <Link to="/dashboard">
                  <span className="font-bold text-gray-800">Home</span>
                </Link>
              </li>
              &nbsp;
              <li>
                <Link to="/user">
                  <span className="font-bold text-gray-800">/&nbsp;Why Choose Us</span>
                </Link>
              </li>
              <li>
                <span className="font-bold text-gray-800">/&nbsp;Add</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-b-2 text-gray-300"></div>
        <div className="w-full min-h-[620px]">
          <div className="max-w-[1220px] mx-auto py-5">
            <h3 className="text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200">
              Add Why Choose Us
            </h3>
            <form
              onSubmit={saveWhyChoose}
              className="py-3 px-2 border border-t-0 rounded-b-md border-slate-400"
              autoComplete="off"
              encType="multipart/form-data"
            >
              <div className="flex gap-5">
                <div className="w-[30%]">
                  <label className="mb-1 font-medium block">Category Image</label>
                  <input
                    type="file"
                    name="whychooseImage"
                    className="dropify text-[15px]"
                    data-height="250"
                    accept="image/*"
                  />
                </div>
                <div className="w-[62%]">
                  <div className="mb-5 p-1">
                    <label htmlFor="whychooseTitle" className="p-1 block font-medium text-gray-900">
                      Title
                    </label>
                    <input
                      type="text"
                      name="whychooseTitle"
                      id="whychooseTitle"
                      className="text-[20px] border-2 py-2.5 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500"
                      placeholder="Title"
                      required
                    />
                  </div>

                  <div className="mb-5 p-1">
                    <label htmlFor="whychooseOrder" className="p-1 block font-medium text-gray-900">
                      Order
                    </label>
                    <input
                      type="number"
                      name="whychooseOrder"
                      id="whychooseOrder"
                      className="text-[20px] border-2 py-2.5 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500"
                      placeholder="Order"
                      required
                    />
                  </div>

                  <div className="mb-5 p-1">
                    <label htmlFor="whychooseDescription" className="p-1 block font-medium text-gray-900">
                      Description
                    </label>
                    <textarea
                      name="whychooseDescription"
                      id="whychooseDescription"
                      className="text-[20px] border-2 py-2.5 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500"
                      placeholder="Description"
                      rows="4"
                      maxLength="500"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-6 my-3 mx-1.5"
              >
               {id ? "Update" : "Add"} Why Choose Us
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}