"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useRazorpay } from "react-razorpay";

export default function Checkout() {

    const { Razorpay } = useRazorpay();
    const [paymentMethod, setPaymentMethod] = useState("1"); // 1 = COD, 2 = Online

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL
    let token = useSelector((store) => store.login.token)

    const [shippingAddress, setShippingAddress] = useState({
        name: "",
        billingName: "",
        mobile: "",
        billingEmail: "",
        billingMobile: "",
        billingAddress: "",
        state: "",
        city: "",
        orderNotes: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress({ ...shippingAddress, [name]: value });
    };

    const cart = useSelector((store) => store.cart.cart);

    const orderAmount = cart.reduce((total, item) => total + item.productPrice * item.productQuantity, 0);
    const orderQty = cart.reduce((total, item) => total + item.productQuantity, 0);

    const orderPlace = (event) => {
        event.preventDefault();

        const orderItems = cart.map((item) => ({

            productName: item.productName,
            productPrice: item.productPrice,
            productQuantity: item.productQuantity,
            colorName: item.color.colorName,
            productImage: item.productImage

        }));

        console.log("Cart:", orderItems);
        console.log("Total Qty:", orderQty);
        console.log("Cart Total:", orderItems);
        console.log("Payment Method:", paymentMethod);
        console.log("Shipping Address:", shippingAddress);


        let obj = {
            paymentMethod,
            shippingAddress,
            orderItems,
            orderAmount,
            orderQty
        }

        axios.post(`${apiBaseUrl}order/order-save`, obj, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.data)
            .then((res) => {
                if (res.paymentMethod == "1") { //COD
                    //Thank you page
                }
                else {  //Online

                    const RazorpayOrderOptions = {
                        key: "rzp_test_WAft3lA6ly3OBc",
                        amount: res.ordersRes.amount, // Amount in paise
                        currency: "INR",
                        name: "Monsta Furniture",
                        description: "Test Transaction",
                        order_id: res.ordersRes.id, // Generate order_id on server
                        handler: (response) => {
                            console.log(response);
                            //razorpay_payment_id: 'pay_Qofh90kAeYHp7P', razorpay_order_id: 'order_QoffF9Y9PE9rB9', razorpay_signature: '37868029ac826841d8647b0f50cb27e97b7986b5e72cf8f2f4d22db09d1dcce1'}

                        },
                        prefill: {
                            name: shippingAddress.billingName || shippingAddress.name,
                            email: shippingAddress.billingEmail,
                            contact: shippingAddress.billingMobile || shippingAddress.mobile,
                        },
                        theme: {
                            color: "#F37254",
                        },
                    };

                    const razorpayInstance = new Razorpay(RazorpayOrderOptions);
                    razorpayInstance.open();
                    console.log(res.ordersRes)
                }
            })



    };

    return (
        <>
            {/* Heading */}
            <section className='max-w-full my-8'>
                <div className='max-w-[1320px] mx-auto'>
                    <div className='text-center'>
                        <h2 className='text-2xl sm:text-4xl font-semibold'>Checkout</h2>
                        <div className='flex items-center justify-center gap-1 my-2'>
                            <Link href='/' className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href='/about' className='text-sm text-[#C09578]'>Checkout</Link>
                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>
                </div>
            </section>

            {/* Checkout Body */}
            <section className='max-w-full'>
                <div className='max-w-[1320px] mx-auto my-10 px-3'>
                    <form onSubmit={orderPlace} className='grid grid-cols-1 lg:grid-cols-[70%_30%] gap-5'>
                        {/* Billing Form */}
                        <div>
                            <h2 className='text-base font-semibold bg-black text-white p-2 uppercase'>Billing Details</h2>
                            <div className='mt-5'>
                                <div className='grid sm:grid-cols-2 gap-5'>
                                    <div>
                                        <label className='text-sm font-semibold'>Name*</label>
                                        <input type='text' name='name' value={shippingAddress.name} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />
                                        <label className='text-sm font-semibold'>Billing Name*</label>
                                        <input type='text' name='billingName' value={shippingAddress.billingName} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />
                                    </div>
                                    <div>
                                        <label className='text-sm font-semibold'>Mobile Number*</label>
                                        <input type='tel' name='mobile' value={shippingAddress.mobile} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />
                                        <label className='text-sm font-semibold'>Billing Email*</label>
                                        <input type='email' name='billingEmail' value={shippingAddress.billingEmail} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />
                                    </div>
                                </div>

                                <label className='text-sm font-semibold'>Billing Mobile Number*</label>
                                <input type='tel' name='billingMobile' value={shippingAddress.billingMobile} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />

                                <label className='text-sm font-semibold'>Billing Address*</label>
                                <input type='text' name='billingAddress' value={shippingAddress.billingAddress} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />

                                <label className='text-sm font-semibold mt-2'>Country</label>
                                <input type='text' value='India' disabled className='w-full p-2 border border-gray-300 rounded-sm my-2 bg-gray-100 text-gray-500' />

                                <div className='grid sm:grid-cols-2 gap-5 mt-4'>
                                    <div>
                                        <label className='text-sm font-semibold'>State*</label>
                                        <input type='text' name='state' value={shippingAddress.state} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />
                                    </div>
                                    <div>
                                        <label className='text-sm font-semibold'>City*</label>
                                        <input type='text' name='city' value={shippingAddress.city} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2' />
                                    </div>
                                </div>

                                <label className='text-sm font-semibold'>Order Notes</label>
                                <textarea name='orderNotes' value={shippingAddress.orderNotes} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded-sm my-2 h-[100px]' placeholder='Notes about your order...' />
                            </div>
                        </div>

                        {/* Order Summary & Payment */}
                        <div className='space-y-5'>
                            <div>
                                <h2 className='text-base font-bold bg-black text-white p-2 uppercase'>Your Order</h2>
                                <table className='w-full mt-2 border border-gray-200 text-sm'>
                                    <thead className='bg-gray-100'>
                                        <tr>
                                            <th className='text-left p-2 border'>Product</th>
                                            <th className='text-right p-2 border'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index} className='border'>
                                                <td className='p-2'>{item.productName} × {item.productQuantity}</td>
                                                <td className='p-2 text-right'>Rs. {item.productPrice * item.productQuantity}</td>
                                            </tr>
                                        ))}
                                        <tr className='border'>
                                            <td className='p-2'>Cart Subtotal</td>
                                            <td className='p-2 text-right'>Rs. {orderAmount}</td>
                                        </tr>
                                        <tr className='border font-bold'>
                                            <td className='p-2'>Order Total</td>
                                            <td className='p-2 text-right'>Rs. {orderAmount}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='bg-gray-50 border border-gray-200 p-4 rounded-sm'>
                                <h3 className='text-base font-semibold mb-3'>Select Payment Method</h3>
                                <div className='flex items-center gap-2 mb-2'>
                                    <input type='radio' id='cod' name='paymentMethod' value='1' checked={paymentMethod === '1'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                    <label htmlFor='cod' className='text-sm'>Cash on Delivery (COD)</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='online' name='paymentMethod' value='2' checked={paymentMethod === '2'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                    <label htmlFor='online' className='text-sm'>Online Payment</label>
                                </div>
                            </div>

                            <button type='submit' className='w-full bg-[#C09578] text-white px-4 py-2 rounded-sm font-semibold hover:bg-black'>
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}