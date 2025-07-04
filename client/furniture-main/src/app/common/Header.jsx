'use client';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../slice/userSlice';
import { fetchCart } from '../slice/cartSlice';
import { redirect } from 'next/navigation';


export default function Header() {



    let user = useSelector((store) => store.login.user)
    let cart = useSelector((store) => store.cart.cart)

    // let [logoutStatu, setLogoutStatus] = useState(false)

    let dispatch = useDispatch()


    let [mobileNav, setmobileNav] = useState(false)

    let [cartItems, setcartItems] = useState(false)

    let [livingMenu, setlivingMenu] = useState(false)

    let [tablelivingMenu, settablelivingMenu] = useState(false)

    let [livingStorageLivingMenu, setlivingStorageLivingMenu] = useState(false)

    let [mirrorLivingMenu, setmirrorLivingMenu] = useState(false)

    let [sofaMenu, setsofaMenu] = useState(false)

    let [sofaBedSofaMenu, setsofaBedSofaMenu] = useState(false)
    let [sofaSetSofaMenu, setsofaSetSofaMenu] = useState(false)
    let [sofaSwingSofaMenu, setsofaSwingSofaMenu] = useState(false)

    let [pageMenu, setpageMenu] = useState(false)

    let totalQuantity = 0;

    if (Array.isArray(cart)) {
        totalQuantity = cart.reduce((acc, item) => acc + item.productQuantity, 0);
    }

    let subtotal = 0;
    if (Array.isArray(cart)) {
        subtotal = cart.reduce((acc, item) => acc + (item.productPrice * item.productQuantity), 0);
    }


    useEffect(() => {
        if (user) {
            dispatch(fetchCart());
        }
    }, [user]);

    // useEffect(() => {
    //     if (logoutStatu) {

    //         console.log("Hello")


    //         setLogoutStatus(false)
    //     }
    // }, [logoutStatu])

    return (
        <>
            <header className='max-w-full lg:static  sticky top-0 z-9999 bg-white shadow-lg'>


                {/* MOBILE AND TABLET MENU */}

                <div className='max-w-[1320px] lg:mx-auto sm:mx-2 mx-2 lg:hidden  block'>
                    <div className={`lg:w-auto  w-[90%] sm:w-[40%] lg:h-auto  h-screen overflow-y-scroll   lg:my-3 lg:py-5 lg:p-0 p-2 lg:static z-999 bg-white fixed lg:block  ${mobileNav ? 'left-0' : 'left-[-100%]'} duration-200`} id='header-menu'>
                        <div className='w-full flex justify-end lg:hidden  ' >
                            <IoMdClose className=' border-1 h-[30px] w-[30px] text-gray-400 rounded-[50%]  text-xl' onClick={() => setmobileNav(false)} />
                        </div>

                        <div className='max-w-full flex flex-col text-center item-center   ' id='header-mid-top'>
                            <Link href={'/'} className='text-[12px] py-3 '>Contact us 24/7 : +91-8540064060  </Link>
                            {user ?
                                <button onClick={() => {
                                    dispatch(logOut())
                                    dispatch(fetchCart())
                                    redirect("/login")
                                }}>Logout</button>
                                :
                                <Link href={'/login'} className='text-[12px] py-3 hover:text-[#c09578] hover:cursor-pointer '>Login / Register</Link>
                            }


                        </div>
                        <ul className='flex lg:gap-8 sm:gap-8 gap-5 w-full justify-center items-center  lg:flex-row flex-col'>
                            <li className=' lg:w-auto  lg:border-0  border-b w-full lg:pb-0  pb-1 border-gray-300' >
                                <Link href={'/'} className='hover:text-[#c09578] font-semibold uppercase text-[#212121] text-sm' onClick={(() => setmobileNav(false))}>
                                    Home
                                </Link>
                            </li>
                            <li className='lg:w-auto  group   w-full lg:pb-0  pb-1 border-gray-300'>
                                <Link href={'/'} className='group-hover:text-[#c09578] font-semibold uppercase text-[#212121] text-sm flex items-center gap-2 border-b border-gray-300 pb-2 justify-between' onClick={() => {
                                    setsofaMenu(false),
                                        setpageMenu(false)
                                    setlivingMenu(!livingMenu)
                                }}>
                                    living

                                    {livingMenu

                                        ?
                                        <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />

                                        :


                                        <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                    }
                                </Link>

                                <div className={`w-full  bg-white   p-3 ${livingMenu ? 'scale-100 block' : 'scale-0 hidden'} duration- origin-top`}>

                                    <button className={`w-full border-b-1 text-start py-2 border-gray-300 text-[#212121] flex items-center justify-between my-1  text-sm`} onClick={() => {
                                        setmirrorLivingMenu(false),
                                            setlivingStorageLivingMenu(false)
                                        settablelivingMenu(!tablelivingMenu)
                                    }}>Tables

                                        {

                                            tablelivingMenu
                                                ?
                                                <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                                :
                                                <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                        }

                                    </button>
                                    <div className={`w-full bg-white  p-6 ${tablelivingMenu ? 'block' : 'hidden'}`}>
                                        <nav>
                                            <ul>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <Link href={'/product-listing'} onClick={() => {
                                                        setmobileNav(false)
                                                    }} className='text-sm'>Side and End Tables</Link>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Nest Of Tables</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Console Table</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Console Table</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Coffee Table Sets</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Coffee Tables</p>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                    <button className='w-full border-b-1 text-start py-2 border-gray-300 text-[#212121] flex items-center justify-between my-1  text-sm' onClick={() => {
                                        settablelivingMenu(false),
                                            setmirrorLivingMenu(false)
                                        setlivingStorageLivingMenu(!livingStorageLivingMenu)

                                    }}>living storage
                                        {

                                            livingStorageLivingMenu
                                                ?
                                                <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                                :
                                                <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                        }
                                    </button>
                                    <div className={`w-full bg-white  p-6 ${livingStorageLivingMenu ? 'block' : 'hidden'}`}>
                                        <nav>
                                            <ul>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Prayer Units</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Display Units</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Shoe Racks</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Chest Of Drawers</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Cabinets and Sideboard</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>Bookshelves</p>
                                                </li>
                                                <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                    <p className='text-sm'>CTv Units</p>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <button className='w-full border-b-1 text-start py-2 border-gray-300 text-[#212121] flex items-center justify-between text-sm  ' onClick={() => {
                                        settablelivingMenu(false),
                                            setlivingStorageLivingMenu(false),
                                            setmirrorLivingMenu(!mirrorLivingMenu)
                                    }}>Mirrors
                                        {

                                            mirrorLivingMenu
                                                ?
                                                <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                                :
                                                <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                        }
                                    </button>

                                    <div className={`w-full bg-white  p-6 ${mirrorLivingMenu ? 'block' : 'hidden'}`}>
                                        <nav>
                                            <ul>
                                                <li className='border-b-1 border-gray-300 pb-1'>
                                                    <p className='text-sm'>Wooden Mirrors</p>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                            </li>


                            <li className='lg:w-auto  group  border-b w-full lg:pb-0  pb-1 border-gray-300'>
                                <Link href={'/'} className='group-hover:text-[#c09578] font-semibold uppercase text-[#212121] text-sm flex items-center gap-2 justify-between' onClick={() => {
                                    setlivingMenu(false),
                                        setpageMenu(false)
                                    setsofaMenu(!sofaMenu)
                                }
                                } >
                                    sofa

                                    {
                                        sofaMenu
                                            ?
                                            <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                            :
                                            <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                    }


                                </Link>

                            </li>


                            <div className={`w-full  bg-white   p-3 ${sofaMenu ? 'scale-100 block' : 'scale-0 hidden'} duration- origin-top`}>

                                <button className={`w-full border-b-1 text-start py-2 border-gray-300 text-[#212121] flex items-center justify-between my-1  text-sm`} onClick={() => {
                                    setsofaSetSofaMenu(false),
                                        setsofaSwingSofaMenu(false)
                                    setsofaBedSofaMenu(!sofaBedSofaMenu)
                                }}>Sofa Cum Bed

                                    {

                                        sofaBedSofaMenu
                                            ?
                                            <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                            :
                                            <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                    }

                                </button>
                                <div className={`w-full bg-white  p-6 ${sofaBedSofaMenu ? 'block' : 'hidden'}`}>
                                    <nav>
                                        <ul>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <p className='text-sm'>Wooden Sofa Cum Bed</p>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <button className='w-full border-b-1 text-start py-2 border-gray-300 text-[#212121] flex items-center justify-between my-1  text-sm' onClick={() => {
                                    setsofaBedSofaMenu(false),
                                        setsofaSwingSofaMenu(false)
                                    setsofaSetSofaMenu(!sofaSetSofaMenu)

                                }}>Sofa Sets
                                    {

                                        sofaSetSofaMenu
                                            ?
                                            <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                            :
                                            <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                    }
                                </button>
                                <div className={`w-full bg-white  p-6 ${sofaSetSofaMenu ? 'block' : 'hidden'}`}>
                                    <nav>
                                        <ul>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <p className='text-sm'>L Shape Sofa</p>
                                            </li>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <p className='text-sm'>1 Seater Sofa</p>
                                            </li>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <p className='text-sm'>2 Seater Sofa</p>
                                            </li>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <p className='text-sm'>3 Seater Sofa</p>
                                            </li>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <p className='text-sm'>Wooden Sofa Sets</p>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <button className='w-full border-b-1 text-start py-2 border-gray-300 text-[#212121] flex items-center justify-between text-sm ' onClick={() => {
                                    setsofaBedSofaMenu(false),
                                        setsofaSetSofaMenu(false),
                                        setsofaSwingSofaMenu(!sofaSwingSofaMenu)
                                }}>Swing Jhula
                                    {

                                        sofaSwingSofaMenu
                                            ?
                                            <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                            :
                                            <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                    }
                                </button>

                                <div className={`w-full bg-white  p-6 ${sofaSwingSofaMenu ? 'block' : 'hidden'}`}>
                                    <nav>
                                        <ul>
                                            <li className='border-b-1 border-gray-300 pb-1'>
                                                <p className='text-sm'>Wooden Julha</p>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <li className='lg:w-auto  group  border-b w-full lg:pb-0  pb-1 border-gray-300' onClick={() => {
                                setlivingMenu(false),
                                    setsofaMenu(false)
                                setpageMenu(!pageMenu)
                            }
                            } >
                                <p href={'/'} className='group-hover:text-[#c09578] font-semibold uppercase text-[#212121] text-sm flex items-center justify-between gap-2'>
                                    pages

                                    {
                                        pageMenu
                                            ?
                                            <FaAngleUp className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                            :
                                            <FaAngleDown className='text-[10px] group-hover:text-[#c09578] font-normal' />
                                    }

                                </p>
                                <div className={`w-full bg-white  p-6 ${pageMenu ? 'block' : 'hidden'}`}>
                                    <nav>
                                        <ul>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <Link href={'/about'} onClick={() => {
                                                    setmobileNav(false)
                                                }} className='text-sm'>About Us</Link>
                                            </li>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4' >
                                                <Link href={'/cart'} className='text-sm' onClick={() => setmobileNav(false)}>Cart</Link>
                                            </li>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <Link href={'/checkout'} className='text-sm' onClick={() => setmobileNav(false)}>Checkout</Link>
                                            </li>
                                            <li className='border-b-1 border-gray-300 pb-1 mb-4'>
                                                <Link href={'/frequently-questions'} className='text-sm' onClick={() => setmobileNav(false)}>Frequently Questions</Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>

                            </li>
                            <li className='lg:w-auto   border-b w-full lg:pb-0  pb-1 border-gray-300'>
                                <Link href={'/'} className='hover:text-[#c09578] font-semibold uppercase text-[#212121] text-sm'>
                                    contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* MOBILE AND TABLET MENU */}

                <hr className='h-px bg-gray-200 border-0 lg:block  hidden ' />

                <div className='max-w-[1320px] lg:mx-auto sm:mx-2 mx-2 ' id='header-mid'>
                    <div className='max-w-full lg:flex justify-between item-center  hidden ' id='header-mid-top'>
                        <Link href={'/'} className='text-[12px] py-3 '>Contact us 24/7 : +91-8540064060 / jitendrasharma30990@gmail.com </Link>
                        {user ?
                            <button onClick={() => {
                                dispatch(logOut())
                                dispatch(fetchCart())
                                redirect("/login")
                            }}>Logout</button>
                            :
                            <Link href={'/login'} className='text-[12px] py-3 hover:text-[#c09578] hover:cursor-pointer '>Login / Register</Link>
                        }

                    </div>
                </div>
                <hr className='h-px bg-gray-200 border-0 lg:block  hidden' />

                <br className='lg:block  hidden' />

                <hr className='h-px bg-gray-200 border-0 lg:block  hidden' />

                <div className='max-w-[1320px] lg:mx-auto sm:mx-2 mx-1 lg:my-1 '>
                    <div className='lg:flex sm:flex flex  lg:justify-between sm:justify-between justify-between lg:gap-0 sm:gap-0 gap-5 items-center' id='header-mid-middle'>
                        <div id='logo'>
                            <img src="/images/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" className='lg:w-[155px] sm:w-[155px] w-[107px]' alt="" />
                        </div>
                        <div className='my-3'>
                            <nav>
                                <ul className='flex items-center  lg:gap-4 sm:gap-4 gap-6'>
                                    <li>
                                        <div className='lg:flex sm:hidden hidden items-center relative  '>
                                            <input type="text" className='border-1 text-[12px] w-[275px] h-[40px] p-2 border-gray-200' placeholder='Search products...' />
                                            <IoIosSearch className='font-semibold text-black text-xl absolute top-[10px] end-[15px]' />
                                        </div>
                                    </li>
                                    <li>
                                        <div className='bg-white border-1 group border-gray-200 rounded-sm h-[40px] w-[40px] flex justify-center items-center cursor-pointer'>
                                            <FaHeart className='text-xl group-hover:text-[#c09578] ' />
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`bg-white border-1 h-[40px] p-3 border-gray-200 rounded-sm gap-3 flex items-center relative hover:text-[#c09578] cursor-pointer `} onClick={() => setcartItems(true)}>
                                            <FaCartShopping className=' border-gray-200' />
                                            <span className='text-sm font-semibold lg:flex sm:flex items-center gap-1 border-l-1 pl-3 hidden'>Rs.{subtotal}
                                                <FaAngleDown />
                                            </span>

                                            <div className='h-[20px] w-[20px] bg-[#c09578] rounded-[50%] absolute top-1/2 -translate-y-[50%] left-[-10px] flex justify-center items-center' id='cartItems'>
                                                <p className='text-white text-sm font-semibold'>{totalQuantity}</p>
                                            </div>

                                        </div>

                                    </li>
                                    <li>
                                        <div className='lg:hidden  block border-1 rounded-sm bg-white p-2'>
                                            <CiMenuBurger className='text-lg font-semibold' onClick={() => setmobileNav(true)} />
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>

                </div>

                <hr className='h-px bg-gray-200 border-0 lg:block  hidden' />

                {/* LEPTOP AND DESKTOP MENU STARTED */}

                <div className="max-w-[1320px] mx-auto hidden lg:block ">
                    <div
                        className="w-auto h-auto mt-3 py-5 p-0 static z-10 bg-white block"
                        id="header-menu"
                    >
                        <ul className="flex gap-8 w-full justify-center items-center flex-row">
                            <li className="w-auto border-0 pb-0">
                                <Link
                                    href="/"
                                    className="text-[#c09578] font-semibold uppercase  text-[13px]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="w-auto group border-0 pb-0 relative ">
                                <Link
                                    href="/"
                                    className="group-hover:text-[#c09578] group font-semibold uppercase text-[#212121] text-[13px] flex items-center gap-2"
                                >
                                    living
                                    <FaAngleDown className="text-[10px] group-hover:text-[#c09578] font-normal" />
                                </Link>

                                <div className='bg-white shadow-lg my-5 w-[580px] absolute top-[100%] origin-top scale-0 duration-300 group-hover:scale-100 z-99 border-1 border-gray-300'>
                                    <div className='w-full grid grid-cols-3 gap-5 p-5' id='megaMenu-living'>
                                        <div>
                                            <h2 className='text-[13px] uppercase font-semibold py-1'>Tables</h2>
                                            <nav>
                                                <ul>
                                                    <li className='py-1'>
                                                        <Link href={'/product-listing'} className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Side and End Tables</Link>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Nest Of Tables</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Console Table</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Coffee Table Sets</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Coffee Tables</p>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>


                                        <div>
                                            <h2 className='text-[13px] uppercase font-semibold py-1'>Living Storage</h2>
                                            <nav>
                                                <ul>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Prayer Units</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Display Units</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Shoe Racks</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Chest Of Drawers</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Cabinets and Sideboard</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Bookshelves</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>CTv Units</p>
                                                    </li>


                                                </ul>
                                            </nav>
                                        </div>

                                        <div>
                                            <h2 className='text-[13px] uppercase font-semibold py-1'>Mirrors</h2>
                                            <nav>
                                                <ul>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Wooden Mirrors</p>
                                                    </li>



                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="w-auto group border-0 pb-0 relative">
                                <Link
                                    href="/"
                                    className="group-hover:text-[#c09578] font-semibold uppercase text-[#212121] text-[13px] flex items-center gap-2"
                                >
                                    sofa
                                    <FaAngleDown className="text-[10px] group-hover:text-[#c09578] font-normal" />
                                </Link>
                                <div className='bg-white shadow-lg w-[580px] my-5 absolute top-[100%] origin-top scale-0 duration-300 group-hover:scale-100 z-99 border-1 border-gray-300'>
                                    <div className='w-full grid grid-cols-3 gap-5 p-5' id='megaMenu-living'>
                                        <div>
                                            <h2 className='text-[13px] uppercase font-semibold py-1'>Sofa Cum Bed</h2>
                                            <nav>
                                                <ul>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Wooden Sofa Cum Bed</p>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>


                                        <div>
                                            <h2 className='text-[13px] uppercase font-semibold py-1'>Sofa Sets</h2>
                                            <nav>
                                                <ul>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>L Shape Sofa</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>1 Seater Sofa</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>2 Seater Sofa</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>3 Seater Sofa</p>
                                                    </li>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Wooden Sofa Sets</p>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div>
                                            <h2 className='text-[13px] uppercase font-semibold py-1'>Swing Jhula</h2>
                                            <nav>
                                                <ul>
                                                    <li className='py-1'>
                                                        <p className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Wooden Jhula</p>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>

                            </li>

                            <li className="w-auto group border-0 pb-0 relative">
                                <Link
                                    href="/"
                                    className="group-hover:text-[#c09578] font-semibold uppercase text-[#212121] text-[13px] flex items-center gap-2"
                                >
                                    pages
                                    <FaAngleDown className="text-[10px] group-hover:text-[#c09578] font-normal" />
                                </Link>

                                <div className='bg-white my-5 shadow-lg w-[200px] absolute top-[100%] origin-top scale-0 duration-300 group-hover:scale-100 z-99 border-1 border-gray-300'>
                                    <div className='w-full  p-5' id='megaMenu-living'>
                                        <div>
                                            <nav>
                                                <ul>
                                                    <li className='py-1'>
                                                        <Link href={'/about'} className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>About Us</Link>
                                                    </li>
                                                    <li className='py-1'>
                                                        <Link href={'/cart'} className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Carts</Link>
                                                    </li>
                                                    <li className='py-1'>
                                                        <Link href={'/checkout'} className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Checkout</Link>
                                                    </li>
                                                    <li className='py-1'>
                                                        <Link href={'/frequently-questions'} className='text-sm text-gray-700 font-normal hover:text-[#c09578] cursor-pointer'>Frequently Questions</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                            </li>


                            <li className="w-auto border-0 pb-0">
                                <Link
                                    href={'/contact-us'}
                                    className="hover:text-[#c09578] font-semibold uppercase text-[#212121] text-[13px]"
                                >
                                    contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* LEPTOP AND DESKTOP MENU ENDED */}
                <div className={`bg-white h-screen w-[350px] fixed right-0 top-0 duration-500 z-999 p-5 ${cartItems ? 'right-0' : 'right-[-100%]'} hidden lg:block sm:block shadow-lg`} id='cartItems'>
                    <div className='flex items-center justify-between border-b-1 py-5 border-gray-400'>
                        <p className='font-semibold text-xl'>Cart</p>
                        <IoMdClose className='text-xl cursor-pointer' onClick={() => setcartItems(false)} />
                    </div>
                    <figure>
                        <img src="/images/my-Order.jpg" className='w-48 mx-auto my-12' alt="" />
                    </figure>
                    <div className='flex justify-center'>
                        <p className='text-gray-600 border-y-1 border-gray-400 py-5 px-3'>Your shopping cart is empty!</p>
                    </div>
                </div>
            </header >
        </>
    )
}
