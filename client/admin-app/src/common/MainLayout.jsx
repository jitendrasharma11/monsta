import React from 'react'
import Sidebar  from './Sidebar'
import Header from './Header'

import { Outlet } from 'react-router'
import Footer from './footer'
export default function MainLayout() {
  return (
    <div>
<section className='w-full'>

    <div className='grid grid-cols-[20%_auto]'>

        <div>
            <Sidebar />
        </div>
        <div>
        <Header /> 
        <Outlet />
        <Footer/>
        </div>
    </div>
</section>


    </div>
  )
}
