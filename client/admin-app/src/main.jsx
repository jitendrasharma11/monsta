import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './common/MainLayout';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import Contact_Enquiry from './pages/Enquiry/Contact_Enquiry';
import Add_Color from './pages/Colors/Add_Color';
import View_Color from './pages/Colors/View_Color';
import DashBoard from './pages/DashBoard';
import Newslatters from './pages/Enquiry/Newslatters';
import Add_Material from './pages/Material/Add_Material';
import View_Material from './pages/Material/View_Material';
import Add_Category from './pages/Parent-Category/Add_Category';
import View_Category from './pages/Parent-Category/View_Category';
import Add_Sub_Category from './pages/Sub-Categories/Add_Sub_Category';
import View_Sub_Category from './pages/Sub-Categories/View_Sub_Category';
import Add_Sub_Category_2 from './pages/Sub-Categories-2/Add_Sub_Category_2';
import View_Sub_Category_2 from './pages/Sub-Categories-2/View_Sub_Category_2';
import Add_Why from './pages/Why_Chooes_Us/Add_Why';
import View_why from './pages/Why_Chooes_Us/View_why';
import Add_Slider from './pages/Slider/Add_Slider';
import View_Slider from './pages/Slider/View_Slider';
import Add_Country from './pages/Country/Add_Country';
import View_Country from './pages/Country/View_Country';
import Add_Testimonial from './pages/Testimonials/Add_Testimonial';
import View_Testimonial from './pages/Testimonials/View_Testimonial';
import Add_Faq from './pages/Faq/Add_Faq';
import View_Faq from './pages/Faq/View_faq';
import Add_Product from './pages/Product/Add_Product';
import View_Product from './pages/Product/View_Product';
import Order from './pages/Order/Order';

import 'react-responsive-pagination/themes/classic-light-dark.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Login Route Outside Layout */}
        <Route path='/' element={<Login />} />

        {/* All other routes inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/user' element={<User />} />
          <Route path='/contact-enquiry' element={<Contact_Enquiry />} />
          <Route path='/newsletters' element={<Newslatters />} />
          
          <Route path='/add-color' element={<Add_Color />} />
          <Route path='/view-color' element={<View_Color />} />
          <Route path='/edit-color/:id' element={<Add_Color />} />
          
          <Route path='/add-material' element={<Add_Material />} />
          <Route path='/view-material' element={<View_Material />} />
          <Route path='/edit-material/:id' element={<Add_Material />} />

          <Route path='/add-category' element={<Add_Category />} />
          <Route path='/edit-category/:id' element={<Add_Category />} />
          <Route path='/view-category' element={<View_Category />} />

          <Route path='/add-Sub-category' element={<Add_Sub_Category />} />
          <Route path='/edit-subcategory/:id' element={<Add_Sub_Category />} />
          <Route path='/view-Sub-category' element={<View_Sub_Category />} />
          
          <Route path='/add-Sub-category_2' element={<Add_Sub_Category_2 />} />
          <Route path='/view-Sub-category_2' element={<View_Sub_Category_2 />} />

          <Route path='/add-why' element={<Add_Why />} />
          <Route path='/edit-why/:id' element={<Add_Why />} />
          <Route path='/view-why' element={<View_why />} />

          <Route path='/add-slider' element={<Add_Slider />} />
          <Route path='/view-slider' element={<View_Slider />} />

          <Route path='/add-country' element={<Add_Country />} />
          <Route path='/view-country' element={<View_Country />} />
          <Route path='/edit-country/:id' element={<Add_Country />} />

          <Route path='/add-testimonials' element={<Add_Testimonial />} />
          <Route path='/view-testimonials' element={<View_Testimonial />} />

          <Route path='/add-faq' element={<Add_Faq />} />
          <Route path='/view-faq' element={<View_Faq />} />
          <Route path='/edit-faq/:id' element={<Add_Faq />} />

          <Route path='/add-product' element={<Add_Product />} />
          <Route path='/view-product' element={<View_Product />} />
          
          <Route path='/order' element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);