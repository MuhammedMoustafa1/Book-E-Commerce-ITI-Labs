import React from 'react'
import MyNav from '../components/MyNav'
import { Outlet } from 'react-router-dom'
import { Footer } from '../pages/Footer'

export default function SharedLayout() {
  return (
    <>
        <MyNav/>
        <div className='content-container my-5'>
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}
