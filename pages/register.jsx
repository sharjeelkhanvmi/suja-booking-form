import { register_user } from "@/app/service/mailService";
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [formData, setFormData] = useState({ fname: "", email: "", password: "", lname: "", phone: "", role: "customer" });



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const res = await register_user(formData);
        if (res.success) {
            toast.success(res.message);
        }
        else {
            toast.error(res.message);
        }
    };

    return (
        <>
            <section className="bg-[#f8f8f8] text-center md:mt-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-10 lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-800 dark:border-red-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-red-600 md:text-2xl dark:text-white">
                                Create an Account
                            </h1>
                            <form onSubmit={handleSubmit} className=" space-y-4 md:space-y-6" action="#">
                                <div className='text-left'>
                                    <label htmlFor="fname" className="block mb-2 text-sm font-medium text-black dark:text-white">First Name</label>
                                    <input onChange={(e) => setFormData({ ...formData, fname: e.target.value })} type="text" name="fname" id="fname" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdullah Moiz" required="" />
                                </div>
                                <div className='text-left'>
                                    <label htmlFor="lname" className="block mb-2 text-sm font-medium text-black dark:text-white">Last Name</label>
                                    <input onChange={(e) => setFormData({ ...formData, lname: e.target.value })} type="text" name="lname" id="lname" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdullah Moiz" required="" />
                                </div>
                                <div className='text-left'>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black dark:text-white">Phone Number</label>
                                    <input onChange={(e) => setFormData({ ...formData, phone: e.target.value })} type="text" name="phone" id="phone" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdullah Moiz" required="" />
                                </div>
                                
                                <div className='text-left'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">Your email</label>
                                    <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className='text-left'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-white">Password</label>
                                    <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <button type="submit" className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                                <p className="text-sm font-light text-black dark:text-red-400">
                                    Already have an account  <Link href="/admin" className="font-medium text-primary-600 hover:underline text-red-500 dark:text-primary-500">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}


// export async function getServerSideProps(context) {
//     const token = context.req.cookies.token
  
//     if (token) {
//       return {
//         redirect: {
//           destination: '/home',
//           permanent: false,
//         },
//       }
//     }
  
//     return {
//       props: {},
//     }
//   }