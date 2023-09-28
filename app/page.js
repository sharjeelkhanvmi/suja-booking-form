"use client"
import React from 'react'
import Form from './components/Form';
import Header from './components/Header'

const page = () => {
  return (
    <div className='bg-[#f2f2f2] h-screen'>
      <Header/>
      <Form/>
    </div>
  )
}

export default page