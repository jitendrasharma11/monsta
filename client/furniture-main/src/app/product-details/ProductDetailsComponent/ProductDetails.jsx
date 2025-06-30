import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function ProductDetails() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;
    const { slug } = useParams();

    const [getSingleProduct, setgetSingleProduct] = useState(null);
    const [preview, setPreview] = useState('');
    const [preview3, set3Preview] = useState([]);
    const [imagepath, setImagepath] = useState('');

    useEffect(() => {
        if (slug) {
            axios.get(`${apiBaseUrl}home/view/${slug}`)
                .then(res => res.data)
                .then(finalRes => {
                    const data = finalRes.data;

                    console.log("pp",data)
                    setgetSingleProduct(data);
                    setPreview(finalRes.staticPath + data.productImage);
                    set3Preview(data.productGallery || []);
                    setImagepath(finalRes.staticPath);
                })
              
                .catch(err => {
                    console.error("Failed to fetch product", err);
                });
        }
    }, [slug]);

    if (!getSingleProduct) {
        return <p className="text-center py-10 text-gray-500">Loading product details...</p>;
    }

    return (
        <section className='max-w-full' id='productDetails-content'>
            <div className='max-w-[1320px] lg:mx-auto mx-5' id='productDetails-content-mid'>
                <div className='w-full grid lg:grid-cols-2 sm:grid-cols-2 gap-5'>
                    {/* Left: Main Image + Gallery */}
                    <div className='w-full' id='productDetails-content-images'>
                        <figure>
                            <img
                                src={preview || "/placeholder.jpg"}
                                alt={getSingleProduct.productName}
                                className="w-full h-auto object-cover rounded shadow"
                            />
                        </figure>

                        {/* Gallery Thumbnails */}
                        <div className='flex gap-2 mt-4 flex-wrap'>
                            {preview3.map((img, i) => (
                                <img
                                    key={i}
                                    src={imagepath + img}
                                    alt={`gallery-${i}`}
                                    className='w-20 h-20 object-cover rounded border hover:scale-105 transition'
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className='w-full' id='productDetails-content-description'>
                        <div id='productDetails-content-description-heading'>
                            <h2 className='text-2xl font-semibold capitalize'>
                                {getSingleProduct.productName}
                            </h2>
                        </div>

                        <div id='productDetails-content-description-details'>
                            <p className='py-4 flex items-center gap-3'>
                                <span className='line-through text-gray-400 font-semibold'>
                                    Rs. {getSingleProduct.productActualPrice}
                                </span>
                                <span className='text-xl font-bold text-[#c09578]'>
                                    Rs. {getSingleProduct.productsalePrice}
                                </span>
                            </p>

                            <p className='leading-7 text-[#5A5A5A] font-semibold'>
                                {getSingleProduct.productDescription}
                            </p>

                            <hr className='my-10 border-gray-200' />

                            <button
                                type='button'
                                className='bg-[#c09578] text-white capitalize px-20 text-lg rounded-sm font-semibold py-2 cursor-pointer hover:bg-black hover:text-white'
                            >
                                Add To Cart
                            </button>
                        </div>

                        <div className='my-8 font-[500]' id='product-details'>
                            <ul>
                                <li className='py-1'>
                                    Category: {getSingleProduct.parentCategory?.categoryName || 'N/A'}
                                </li>
                                <li className='py-1'>
                                    Sub Category: {getSingleProduct.subCategory?.subcategoryName || 'N/A'}
                                </li>
                                <li className='py-1'>
                                    Sub Sub Category: {getSingleProduct?.subSubCategory.subsubcategoryName || 'N/A'}
                                </li>
                                <li className='py-1'>
                                    Color(s): {Array.isArray(getSingleProduct.productColor)
                                        ? getSingleProduct.productColor.map(c => c.colorName).join(', ')
                                        : 'N/A'}
                                </li>
                                <li className='py-1 flex gap-2'>
                                    <p>Materials:</p>
                                   {
                                     getSingleProduct?.productMeterial.map((v,i)=>{
                                        return (
                                            <span key={i}>{v.materialName}</span>
                                        )
                                    })
                                   }
                                </li>
                                <li className='py-1'>
                                    Stock: {getSingleProduct.productStocks || 'N/A'}
                                </li>
                                <li className='py-1'>
                                    Product Type: {getSingleProduct.productType || 'N/A'}
                                </li>
                                <li className='py-1'>
                                    Best Selling: {getSingleProduct.productbestSelling || 'N/A'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Full Description Section */}
                <div className='my-5' id='desc'>
                    <h2 className='text-3xl font-semibold text-[#c09578]'>Description</h2>
                    <hr className='my-5 border-gray-200' />
                    <p className='leading-7'>
                        {getSingleProduct.productDescription}
                    </p>
                </div>
            </div>
        </section>
    );
}