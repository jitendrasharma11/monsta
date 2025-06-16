import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add_Product() {
    let navigate = useNavigate();

    let [parentCatList, setParentCatList] = useState([]);
    let [subCatList, setSubCatList] = useState([]);
    let [subsubCatList, setsubSubCatList] = useState([]);
    let [colorList, setColorList] = useState([]);
    let [meterialList, setMeterialList] = useState([]);

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL;

    let getParentcategory = () => {
    axios.get(`${apiBaseUrl}product/parent-category`)
        .then((res) => res.data)
        .then((finalRes) => {
            setParentCatList(finalRes.data);
        });
};

let getSubcategory = (id) => {
    axios.get(`${apiBaseUrl}product/sub-category/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
            setSubCatList(finalRes.data);
        });
};

let getsubSubcategory = (id) => {
    axios.get(`${apiBaseUrl}product/subsub-category/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
            setsubSubCatList(finalRes.data);
        });
};

let getColor = () => {
    axios.get(`${apiBaseUrl}product/product-color`)
        .then((res) => res.data)
        .then((finalRes) => {
            setColorList(finalRes.data);
        });
};

let getMeterial = () => {
    axios.get(`${apiBaseUrl}product/product-meterial`)
        .then((res) => res.data)
        .then((finalRes) => {
            setMeterialList(finalRes.data);
        });
};

    useEffect(() => {
        getParentcategory();
        getColor();
        getMeterial();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            $('.dropify').dropify({
                messages: {
                    default: "Drag and drop",
                    error: 'Ooops, something wrong happened.'
                },
                tpl: {
                    loader: '<div class="dropify-loader"></div>',
                    errorLine: '<p class="dropify-error">{{ error }}</p>',
                    message: `<div class="dropify-message"><span class="file-icon" /> <p class="text-[25px]">{{ default }}</p></div>`,
                },
            });
        }, 100);
    }, []);

    let productSave = (e) => {
        e.preventDefault();
        let formValue = new FormData(e.target);

        axios.post(`${apiBaseUrl}product/insert`, formValue)
            .then((res) => {
                let finalRes = res.data;
                if (finalRes.status) {
                    toast.success(finalRes.msg || "Added successfully");

                   
                    e.target.reset();

                    // Dropify reset (destroy + reinit)
                    $('.dropify').each(function () {
                        let drEvent = $(this).data('dropify');
                        if (drEvent) {
                            drEvent.resetPreview();
                            drEvent.clearElement();
                            drEvent.destroy();
                        }
                    });

                    setTimeout(() => {
                        $('.dropify').dropify();
                    }, 100);

                    
                    setTimeout(() => navigate('/view-product'), 2000);
                } else {
                    toast.error(finalRes.msg || "Something went wrong");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Server error. Try again later.");
            });
    };


    return (
        <div>

            <ToastContainer />
            <section className='w-full'>
                <div className='border-b-2 text-gray-300'></div>
                <div className='py-3'>
                    <nav className='mt-1'>
                        <ul className='flex items-center'>
                            <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
                            <li> <Link to={'/add-product'}><span className='font-bold text-gray-800'>/&nbsp;Product</span> </Link> </li>
                            <li> <span className='font-bold text-gray-800'>/&nbsp;Add</span></li>
                        </ul>

                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                        <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>Add Product</h3>
                        <form onSubmit={productSave} className=' py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                            <div className='grid grid-cols-3 gap-[10px]'>


                                <div id='images'>
                                    <div id='img-1'>
                                        <label className="mb-1">
                                            <b>Product Image</b>
                                        </label>
                                        <input
                                            name='productImage'
                                            type="file"
                                            className="dropify text-[15px]"
                                            data-height="250"
                                        />

                                    </div>

                                    <div id='img-2'>
                                        <label className="mb-1">
                                            <b>Back Image</b>
                                        </label>
                                        <input
                                            name='productBackimage'
                                            type="file"
                                            className="dropify text-[15px]"
                                            data-height="250"
                                        />


                                    </div>
                                    <div id='img-3'>
                                        <label className="mb-1">
                                            <b>Gallery Image</b>
                                        </label>
                                        <input
                                            name='productGallery'
                                            type="file"
                                            className="dropify text-[15px]"
                                            data-height="250"
                                            multiple
                                        />
                                    </div>

                                </div>
                                <div id='middle'>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Product Name </label>
                                        <input type='name' name='productName' id='pro_id' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Product Name' />
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Select Sub Category</label>
                                        <select
                                            name="subCategory"
                                            onChange={(e) => {
                                                getsubSubcategory(e.target.value);
                                            }}
                                            className='text-[20px] border-2 py-2 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500'
                                        >
                                            <option>Select Sub Category</option>
                                            {subCatList.map((items, index) =>
                                                <option key={index} value={items._id}>{items.subcategoryName}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Select Material </label>
                                        <select multiple name="productMeterial[]" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option>Select Material</option>
                                            {meterialList.map((items, index) =>
                                                <option key={index} value={items._id}>{items.materialName}</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Select Product Type</label>
                                        <select name="productType" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option value="">Nothing Selected</option>
                                            <option value="1">Featured</option>
                                            <option value="2">New Arrival</option>
                                            <option value="3">OnSale</option>

                                        </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Is Top Rated </label>
                                        <select name="productTopRated" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option value="">Nothing Selected</option>
                                            <option value="true">Yes</option>
                                            <option value='false'>No</option>

                                        </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Actual Price</label>
                                        <input type='number' name="productActualPrice" id='actual_price' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                     border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Actual Price' />
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Total In stocks</label>
                                        <input type='number' name="productStocks" id='stocks' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                     border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Total In stocks' />
                                    </div>
                                </div>
                                <div id='right'>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Select Parent Category  </label>
                                        <select onChange={(e) => {
                                            getSubcategory(e.target.value);
                                        }}
                                            name="parentCategory" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option>Parent Category</option>
                                            {parentCatList.map((items, index) =>
                                                <option key={index} value={items._id}>{items.categoryName}</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Select Sub Sub Category</label>
                                        <select name="subSubCategory" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option>Sub Sub Category</option>
                                            {subsubCatList.map((items, index) =>
                                                <option key={index} value={items._id}>{items.subsubcategoryName}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Select Colour</label>
                                        <select multiple name="productColor[]" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option>Colour</option>
                                            {colorList.map((items, index) =>
                                                <option key={index} value={items._id}>{items.colorName}</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Is Best Selling</label>
                                        <select name="productbestSelling" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option value="">Nothing Selected</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="name" className='p-1 block font-medium text-gray-900'>Is UpSell </label>
                                        <select name="productUpsell" className='text-[20px] border-2 py-2 px-2 block shadow-md
                                                             border-gray-400 w-full rounded-lg focus:border-blue-500'>
                                            <option value="">Nothing Selected</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>

                                    <div className='mb-5 p-1'>
                                        <label for="price" className='p-1 block font-medium text-gray-900'>Sale Price</label>
                                        <input type='number' name="productsalePrice" id='s_price' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
 border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Sale Price' />
                                    </div>
                                    <div className='mb-5 p-1'>
                                        <label for="order" className='p-1 block font-medium text-gray-900'>Order</label>
                                        <input type='number' name="productOrder" id='corder' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
 border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Order' />
                                    </div>
                                </div>



                            </div>
                            <div className='my-5'>
                                <label htmlFor="" className='text-[16px] font-semibold'>Description</label>


                                <textarea name="productDescription" className='w-[100%] h-[250px] border-2' id=""></textarea>
                            </div>

                            <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 my-3 mx-1.5'>Create Product

                            </button>
                        </form>
                    </div>

                </div>


            </section>

        </div>
    )
}
export { Add_Product }