import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'
import Navbar from '../Pages/Shared/Navbar'

export default function MainLayout() {
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
     { noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
     {noHeaderFooter|| <Footer></Footer>}
    </div>
  )
}
