import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className=''>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
