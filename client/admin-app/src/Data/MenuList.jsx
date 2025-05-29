

import { FaUser } from "react-icons/fa";

import { IoMdRadioButtonOn } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineInvertColors } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";

import { LiaSlidersHSolid } from "react-icons/lia";
import { BiSolidNavigation } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { FcFaq } from "react-icons/fc";
import { RiPagesLine } from "react-icons/ri";
import { LuNotepadText } from 'react-icons/lu'

    export const menulist =[

        {
            id:1,
            menu: "Users",
            submenu:"View User",
           
            icon: <FaUser/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/user",
           
            
        },
        {
            id:2,
            menu: "Enquirys",
            submenu:"Contact Enquirys",
            submenu2:"Newsletters",
            icon: <FaMessage/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/contact-enquiry",
            name2:"/newsletters",
        },
        {
            id:3,
            menu: "Colors",
            submenu:"Add Color",
            submenu2:"View Color",
            icon: <MdOutlineInvertColors/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-color",
            name2:"/view-color",
        },
        {
            id:4,
            menu: "Materials",
            submenu:"Add Materials",
            submenu2:"View Materials",
            icon: <GiMaterialsScience/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-material",
            name2:"/view-material",
        },
        {
            id:5,
            menu: "Parent Categorys",
            submenu:"Add Category",
            submenu2:"View Category",
            icon: <FaBarsStaggered/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-category",
            name2:"/view-category",
        },
        {
            id:6,
            menu: "Sub Categorys",
            submenu:"Add Sub Category",
            submenu2:"View Sub Category",
            icon: <FaBarsStaggered/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-Sub-category",
            name2:"/view-Sub-category",
        },
        {
            id:7,
            menu: "Sub Sub Categorys",
            submenu:"Add Sub Sub Category",
            submenu2:"View Sub Sub Category",
            icon: <FaBarsStaggered/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-Sub-category_2",
            name2:"/view-Sub-category_2",
            
        },
        {
            id:8,
            menu: "Products",
            submenu:"Add Product",
            submenu2:"View Product",
            icon: <FaShoppingBag/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-product",
            name2:"/view-product",
        },
        {
            id:9,
            menu: "Why Choose Us",
            submenu:"Add Why Choose Us",
            submenu2:"View Why Choose Us",
            icon: <RxCountdownTimer/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-why",
            name2:"/view-why",
        },
        {
            id:10,
            menu: "Orders",
            submenu:"Orders",
           
            icon: <LuNotepadText/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/order",
            
            
        },
        {
            id:11,
            menu: "Sliders",
            submenu:"Add Slider",
            submenu2:"View Slider",
            icon: <LiaSlidersHSolid/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-slider",
            name2:"/view-slider",
        },
        {
            id:12,
            menu: "Country",
            submenu:"Add Country",
            submenu2:"View Country",
            icon: <BiSolidNavigation/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-country",
            name2:"/view-country",
        },
        {
            id:13,
            menu: "Testimonials",
            submenu:"Add Testimonials",
            submenu2:"View Testimonials",
            icon: <FaUserEdit />,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-testimonials",
            name2:"/view-testimonials",
        },
        {
            id:14,
            menu: "Faqs",
            submenu:"Add Faq",
            submenu2:"View Faq",
            icon: <FcFaq/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-faq",
            name2:"/view-faq",
        },
        {
            id:15,
            menu: "Terms & Conditions",
            submenu:"Conditions",
            icon: <RiPagesLine/>,
            iconradio: <IoMdRadioButtonOn />,
            name:"/add-conditions",
            name2:"/view-conditions",
        },
    ]