







import { login_user } from "@/app/service/mailService";
import Head from 'next/head'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Router from 'next/router';
import jwt_decode from "jwt-decode";


export default function resetpassword() {

  return (
    <>
     
      <section className="bg-[#f8f8f8] text-center text-navy-700 md:mt-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-10 lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-800 dark:border-red-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-red-600 md:text-2xl dark:text-white">
                FORGOT PASSWORD
              </h1>
              <form className=" space-y-4 " action="#">
                <div className='text-left'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-white">Password</label>
                  <input  type="password" name="password" id="password" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                </div>
                <div className='text-left'>
                  <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-black dark:text-white">Confirm Password</label>
                  <input  type="password" name="confirmpassword" id="confirmpassword" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required="" />
                </div>
                <button type="submit" className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
               
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}



export async function getServerSideProps(context) {
  const token = context.req.cookies.token

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}