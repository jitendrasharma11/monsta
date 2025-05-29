/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


import { menulist } from '../Data/MenuList';

export default function Sidebar() {

    let [menu, setMenu] = useState(-1)

    return (
        <div>
     <div className='fixed  top-0 left-0 w-[20%] h-[100vh] overflow-y-scroll lg:block hidden'>
                <div className='max-w-full p-4 mt-4 mx-1'>
                    <Link to={'/dashboard'}>
                        <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" />
                    </Link>
                    <div className='border-b-1 py-2 mx-1'></div>
                    <ul className='font-medium'>

                        <Link to={'/dashboard'}>
                            <div className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                <MdDashboard className='text-gray-500 hover:text-gray-900' />
                                <span className='ms-3'>Dashboard</span>

                            </div>

                        </Link>
                        <div className='border-b-1  mx-1'></div>

                       {/*  // eslint-disable-next-line no-unused-vars */}
                        {menulist.map((items,index) => {
                            return (
                                <li className='cursor-pointer' key={index}>

                                    <div onClick={() => setMenu(items.id == menu ? -1 : items.id)}
                                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                        {/*   <FaUser /> */}{items.icon}
                                        <span className='flex-1 ms-3 '>
                                            {items.menu}
                                        </span>
                                        <div>
                                            {menu == items.id ?
                                                <IoIosArrowUp /> : <IoIosArrowDown />}

                                        </div>
                                    </div>
                                    <div className={`${menu == items.id ? '' : 'hidden'}`}>
                                        <Link to={`${items.name}`}>
                                            <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                                {/*  <IoMdRadioButtonOn /> */}{items.iconradio}
                                                <span className='pl-3 font-semibold text-[14px]'>{items.submenu}</span>
                                            </button>

                                        </Link>
                                        </div>
                                        <div className={`${menu == items.id && items.submenu2!=undefined ? '' : 'hidden'}`}>
                                        <Link to={`${items.name2}`}>
                                            <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                                {/*  <IoMdRadioButtonOn /> */}{items.iconradio}
                                                <span className=' pl-3 font-semibold text-[14px]'>{items.submenu2}</span>
                                            </button>

                                        </Link>

                                    </div>

                                </li>

                            )
                        })}

                        {/*   <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 2)}
                                className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                <FaMessage />
                                <span className='flex-1 ms-3 '>
                                    Enquirys
                                </span>
                                <div>
                                {menu==2 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==2 ? '' : 'hidden'}`}>
                                    <Link to={'/contact-enquiry'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Contact Enquirys</span>
                                        </button>

                                    </Link>
                                    <Link to={'/newsletters'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className=' pl-3 font-semibold text-[14px]'>Newsletters</span>
                                        </button>

                                    </Link>

                                </ul>
                           
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 3)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < MdOutlineInvertColors />
                                <span className='flex-1 ms-3 '>
                                    Colors
                                </span>
                                <div>
                                {menu==3 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==3 ? '' : 'hidden'}`}>
                                    <Link to={'/add-color'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Color</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-color'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Color</span>
                                        </button>

                                    </Link>

                                </ul>
                        
                        </li>
                         <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 4)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < GiMaterialsScience />
                                <span className='flex-1 ms-3 '>
                                    Materials
                                </span>
                                <div>
                                {menu==4 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==4 ? '' : 'hidden'}`}>
                                    <Link to={'/add-material'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Material</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-material'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Material</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 5)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < FaBarsStaggered />
                                <span className='flex-1 ms-3 '>
                                    Parent Categorys
                                </span>
                                <div>
                                {menu==5 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==5 ? '' : 'hidden'}`}>
                                    <Link to={'/add-category'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Category</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-category'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Category</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 6)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < FaBarsStaggered />
                                <span className='flex-1 ms-3 '>
                                    Sub Categorys
                                </span>
                                <div>
                                {menu==6 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==6 ? '' : 'hidden'}`}>
                                    <Link to={'/add-sub-category'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Sub Category</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-sub-category'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Sub Category</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 7)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < FaBarsStaggered />
                                <span className='flex-1 ms-3 '>
                                    Sub Sub Categorys
                                </span>
                                <div>
                                {menu==7 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==7 ? '' : 'hidden'}`}>
                                    <Link to={'/add-sub-sub-category'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Sub Sub Category</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-sub-sub-category'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Sub Sub Category</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 8)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < FaShoppingBag />
                                <span className='flex-1 ms-3 '>
                                    Products
                                </span>
                                <div>
                                {menu==8 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==8 ? '' : 'hidden'}`}>
                                    <Link to={'/add-product'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className=' pl-3 font-semibold text-[14px]'>Add Product</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-product'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className=' pl-3 font-semibold text-[14px]'>View Product</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 9)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < RxCountdownTimer />
                                <span className='flex-1 ms-3 '>
                                    Why Choose Us
                                </span>
                                <div>
                                {menu==9 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==9 ? '' : 'hidden'}`}>
                                    <Link to={'/add-why'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Why Choose Us</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-why'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Why Choose Us</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 10)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < LiaSlidersHSolid />
                                <span className='flex-1 ms-3 '>
                                    Sliders
                                </span>
                                <div>
                                {menu==10 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==10 ? '' : 'hidden'}`}>
                                    <Link to={'/add-slider'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Slider</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-slider'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Slider</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 11)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < BiSolidNavigation />
                                <span className='flex-1 ms-3 '>
                                    Country
                                </span>
                                <div>
                                {menu==11 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==11 ? '' : 'hidden'}`}>
                                    <Link to={'/add-country'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Country</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-country'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Country</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 12)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < FaUserEdit />
                                <span className='flex-1 ms-3 '>
                                    Testimonails
                                </span>
                                <div>
                                {menu==12 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==12 ? '' : 'hidden'}`}>
                                    <Link to={'/add-testimonail'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Testimonail</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-testimonail'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Testimonail</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 13)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < FcFaq />
                                <span className='flex-1 ms-3 '>
                                    Faqs
                                </span>
                                <div>
                                {menu==13 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==13 ? '' : 'hidden'}`}>
                                    <Link to={'/add-faq'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Faq</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-faq'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Faq</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li>
                        <li className='cursor-pointer'>
                        <div onClick={() => setMenu(menu!=-1 ? -1 : 14)}
                        className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100'>
                                < RiPagesLine />
                                <span className='flex-1 ms-3 '>
                                    Terms and Conditions
                                </span>
                                <div>
                                {menu==14 ?
                                        <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                </div>
                                <ul className={`${menu==14 ? '' : 'hidden'}`}>
                                    <Link to={'/add-term'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>Add Term and Condition</span>
                                        </button>

                                    </Link>
                                    <Link to={'/view-term'}>
                                        <button className='flex items-center p-2 w-full text-gray-900 hover:bg-gray-100'>
                                            <IoMdRadioButtonOn />
                                            <span className='pl-3 font-semibold text-[14px]'>View Term and Condition</span>
                                        </button>

                                    </Link>

                                </ul>
                            
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export { Sidebar }