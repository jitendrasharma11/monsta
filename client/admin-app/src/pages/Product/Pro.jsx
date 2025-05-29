import React from 'react'
import { useEffect} from "react";
import NavBar from "../common/NavBar";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";

export default function Pro() {


    const center = "Product";
    const last = "Product Details";
  
    useEffect(() => {
      $(".dropify").dropify({
        messages: {
          default: "Drag and drop",
        },
        tpl: {
          message: `<div class="dropify-message"><span class="file-icon" /> <p class="text-[25px]">{{ default }}</p></div>`,
        },
      });
    });
  return (
    <div>
  <NavBar center={center} last={last} />
        <form action="" className="mb-4 p-2 mt-4">
          <div className="w-full flex lg:flex-nowrap flex-wrap gap-4">
            <div className="lg:w-[40%] w-full">
              <div>
                <label className="mb-1">
                  <b>Category Image</b>
                </label>
                <input
                  type="file"
                  className="dropify text-[15px]"
                  data-height="250"
                />
              </div>
              <div className="mt-2">
                <label className="mb-1">
                  <b>Category Image</b>
                </label>
                <input
                  type="file"
                  className="dropify text-[15px]"
                  data-height="250"
                />
              </div>
              <div className="mt-2">
                <label className="mb-1">
                  <b>Category Image</b>
                </label>
                <input
                  type="file"
                  className="dropify text-[15px]"
                  data-height="250"
                />
              </div>
            </div>
            <div className="lg:w-[60%] w-full">
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Category Name</b>
                  </label>
                  <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"
                    required
                  />
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Select Parent Category</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Mobile Phones</option>
                    <option>Laptops</option>
                    <option>Men's Wear</option>
                    <option>Women's Wear</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Select Sub Category</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Select Sub Sub Category</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Select Meterial</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Select Color</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Select Prodcut Type</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Is Best Selling</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Is Top Rated</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Is Upsell</b>
                  </label>
                  <select
                    name=""
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Actual Price</b>
                  </label>
                  <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"
                    required
                  />
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Sale Price</b>
                  </label>
                  <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Total In Stocks</b>
                  </label>
                  <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"
                    required
                  />
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b>Order</b>
                  </label>
                  <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
            onSubmit={(e) => e.preventDefault()}
          >
            Add Category
          </button>
        </form>




    </div>
  )
}
