import React from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'

export default function Home() {
  const logout = () => {
    Cookies.remove('token')
    Router.push('/admin')
  }

  return (
    <div className='w-full h-screen flex items-center justify-center text-white bg-red-600 flex-col tracking-widest uppercase'>
      <p className='text-4xl font-extrabold mb-4'>Welcome to home Page</p>
      <button onClick={logout} className='bg-white border-2 border-white hover:bg-transparent transition-all text-red-700 hover:text-white font-semibold text-lg px-4 py-2 rounded duration-700'>
        Logout
      </button>
    </div>
  )
}

export async function getServerSideProps(context) {
  const token = context.req.cookies.token

  if (!token) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
