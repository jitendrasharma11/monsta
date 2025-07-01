import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import { Link } from "react-router-dom";


export default function ViewProduct() {
    
    let [viewProduct, setviewProduct] = useState(null)
    let [productDetails, setproductDetails] = useState(false)

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let [productList, setProductList] = useState([])
    let [imagePath, setImagepath] = useState('')
    let getProduct = () => {
        axios.get(`${apiBaseUrl}product/view/`, {

        })
            .then((res) => res.data)
            .then((finalRes) => {
                setProductList(finalRes.data)
                setImagepath(finalRes.staticPath)

            })
    }

    useEffect(() => {
        getProduct()
    }, [])


    let getsingleProducts = (id) => {
        axios.get(`${apiBaseUrl}product/view/${id}`, {

        })
            .then((res) => res.data)
            .then((finalRes) => {

                if (finalRes.status) {
                    setproductDetails(finalRes.data)
                    setviewProduct(true)
                }



            })
    }


    return (
        <>
            {/* PRODUCT DETAIL MODAL */}
            {productDetails && (
                <section className={`w-[95%] max-w-6xl mx-auto bg-white shadow-2xl rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ${viewProduct ? '' : 'hidden'}`}>
                    <div className='w-full flex items-center justify-between p-5 border-b'>
                        <h3 className='text-xl font-semibold'>Product Images & Price</h3>
                        <span className='text-4xl cursor-pointer text-gray-600 hover:text-black' onClick={() => setviewProduct(false)}>&times;</span>
                    </div>
                    <div className='w-full grid grid-cols-[60%_auto] gap-4 p-5 max-h-[80vh] overflow-y-auto'>
                        <div>
                            <h4 className='font-semibold mb-3'>Product Images</h4>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='border rounded-lg p-2'>
                                    <p className='text-sm font-medium mb-2'>Main Image</p>
                                    <img
                                        src={imagePath + productDetails.productImage}
                                        alt="Main Product"
                                        className='w-full h-48 object-cover rounded-md'
                                    />
                                </div>
                                <div className='border rounded-lg p-2'>
                                    <p className='text-sm font-medium mb-2'>Back Image</p>
                                    <img
                                        src={imagePath + productDetails.productBackimage}
                                        alt="Back View"
                                        className='w-full h-48 object-cover rounded-md'
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p className='text-sm font-medium mb-2'>Gallery Images</p>
                                <div className='grid grid-cols-4 gap-2'>
                                    {productDetails.productGallery.map((imagename, idx) => (
                                        <div key={idx} className='border p-1 rounded-md shadow-sm'>
                                            <img
                                                src={imagePath + imagename}
                                                alt={`Gallery ${idx}`}
                                                className='w-full h-24 object-cover rounded-sm hover:opacity-80 transition'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* PRODUCT INFO */}
                        <div className='shadow-lg border p-4 rounded-md bg-white'>
                            <h3 className='text-lg font-semibold mb-4'>Product Details</h3>
                            <div className='space-y-3 text-sm'>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>Product Name:</span>
                                    <span>{productDetails.productName}</span>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>Category:</span>
                                    <span>{productDetails.parentCategory.categoryName}</span>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>SubCategory:</span>
                                    <span>{productDetails.subCategory.subcategoryName}</span>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>SubSubCategory:</span>
                                    <span>{productDetails.subSubCategory.subsubcategoryName}</span>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>Description:</span>
                                    <span>{productDetails.productDescription}</span>
                                </div>
                                <div className='flex items-start'>
                                    <span className='font-semibold w-32'>Colors:</span>
                                    <div className='flex flex-wrap gap-2'>
                                        {productDetails.productColor.map((colorItems, index) => (
                                            <span
                                                key={index}
                                                className='px-3 py-1 text-white text-xs font-semibold rounded-md shadow'
                                                style={{ backgroundColor: colorItems.colorName }}
                                            >
                                                {colorItems.colorName}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <span className='font-semibold w-32'>Materials:</span>
                                    <div className='flex flex-wrap gap-2'>
                                        {productDetails.productMeterial.map((material, index) => (
                                            <span key={index} className='px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded-md'>
                                                {material.materialName}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>Stock:</span>
                                    <span>{productDetails.productStocks}</span>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>Price:</span>
                                    <span>₹ {productDetails.productActualPrice}</span>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>Sale Price:</span>
                                    <span>₹ {productDetails.productsalePrice}</span>
                                </div>
                                <div className='flex'>
                                    <span className='font-semibold w-32'>Order No.:</span>
                                    <span>{productDetails.productOrder}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* MAIN TABLE */}
            <section className='mt-5 mx-auto max-w-full rounded-md border border-gray-300'>
                <div className='bg-slate-100 p-4'>
                    <h3 className='text-[26px] font-semibold'>Product Items</h3>
                </div>
                <div className='px-4 overflow-x-auto'>
                    <table className='min-w-full text-sm text-left text-gray-700'>
                        <thead className='bg-gray-100 text-xs font-semibold uppercase'>
                            <tr>
                                <th className='py-3 px-2 text-center'>Delete</th>
                                <th className='py-3 px-2 text-center'>S. No.</th>
                                <th className='py-3 px-2'>Product Name</th>
                                <th className='py-3 px-2'>Description</th>
                                <th className='py-3 px-2'>Thumbnails</th>
                                <th className='py-3 px-2 text-center'>Action</th>
                                <th className='py-3 px-2 text-center'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm divide-y divide-gray-200'>
                            {productList.map((items, index) => (
                                <tr key={index} className='bg-white hover:bg-gray-50'>
                                    <td className='py-4 text-center'>
                                        <input type="checkbox" className='w-4 h-4' />
                                    </td>
                                    <td className='py-4 text-center'>{index + 1}</td>
                                    <td className='py-4 font-medium text-gray-800'>{items.productName}</td>
                                    <td className='py-4 text-gray-600'>
                                        <p className='line-clamp-2'>{items.productDescription}</p>
                                        <span
                                            className='text-blue-600 hover:underline cursor-pointer font-semibold text-sm mt-1 inline-block'
                                            onClick={() => getsingleProducts(items._id)}
                                        >
                                            View Product Details
                                        </span>
                                    </td>
                                    <td className='py-4'>
                                        <img src={imagePath + items.productImage} alt="Thumbnail" className='w-16 h-16 object-cover rounded-md border' />
                                    </td>
                                    <td className='py-4'>
                                        <div className='flex items-center gap-3 justify-center'>
                                            <RiDeleteBin6Line className='text-red-500 text-lg cursor-pointer hover:scale-110 transition' />
                                            <Link to={`/edit-product/${items._id}`}>
                                            <FaEdit className='text-yellow-500 text-lg cursor-pointer hover:scale-110 transition' />
                                            </Link>
                                        </div>
                                    </td>
                                    <td className='py-4 text-center text-green-600 font-semibold'>Active</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}