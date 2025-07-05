"use client"
import Link from 'next/link';
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYou() {
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-50 px-4 py-10 sm:py-16 md:py-24">
      <FaCheckCircle className="text-green-500 text-5xl sm:text-6xl mb-4" />
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
        Thank you for your order!
      </h1>
      
      <p className="text-gray-600 text-center max-w-md mb-6 text-sm sm:text-base">
        Your order has been placed successfully. You will receive a confirmation email with your order details shortly.
      </p>
      
      <Link
        href="/"
        className="bg-[#C09578] hover:bg-black text-white font-semibold px-6 py-2 rounded-sm transition-all text-sm sm:text-base"
      >
        Continue Shopping
      </Link>
    </div>
  );
}