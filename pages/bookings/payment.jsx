import React from 'react';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Sidebar from '@/app/components/sidebar/sidebar';
import Footnote from '@/app/components/Footnote';
import Formnav from '@/app/components/Formnav';
import Amex from '@/public/assets/amex.f54f9bb1.svg';
import Mastercard from '@/public/assets/mastercard.a1764ac8.svg';
import Visa from '@/public/assets/visa.7c2bf868.svg';
import Apple from '@/public/assets/apple_pay.svg';
import Googlepay from '@/public/assets/google_pay.svg';
import Image from "next/image";
// stripe integration
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '@/app/components/PaymentForm';
// stripe integration
const stripePromise = loadStripe('pk_test_51OCgAiLtI6eAAvg7XJGkaG35swVZUZF8RfzmeizRJ2WaE9SvASJaUUMD0POWNC34gIcWLwmGLuH7yltlphocFIIE00DATZf8Tf');
let formdata = Cookies.get('formData');
const data = formdata ? JSON.parse(formdata) : { auto_manual: '' };
const validationSchema = Yup.object().shape({
// auto_manual: Yup.string()
//   .required("Auto Manual is required")
});
// 
const payment = () => {
const router = useRouter();
return (
<div>



<Formnav />
<div className="mt-[0px] lg:w-[calc(100vw-360px)] flex justify-center items-top px-7 py-8">
<div className='w-full lg:max-w-[750px] pb-24'>
<div className="mt-[10px] items-top py-8">
<div className="w-full lg:max-w-[750px]">
<div className="w-full mb-5 pr-4">
<h1 className="text-[24px] font-semibold">Payment Details</h1>
<p className="mb-4 font-regular text-stone-500   text-[16px] mt-2">
Secure your course today! We accept all major
credit and debit cards, including American Express.
</p>
<div className="flex items-center mb-4 justify-between space-x-2">
<div className="flex space-x-2 items-center">
<div className="w-12 transition-all duration-300 opacity-100">
<Image alt="AMEX Brand Logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
src={Amex} />
</div>
<div className="w-12 transition-all duration-300 opacity-100">
<Image alt="Master Card Logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
src={Mastercard} />
</div>
<div className="w-12 transition-all duration-300 opacity-100">
<Image alt="Visa Brand Logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
src={Visa} />
</div>
</div>
<div className="flex space-x-2 items-center">
<div className="w-12">
<Image alt="Apple Pay" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
src={Apple} />
</div>
<div className="w-12">
<Image alt="Apple Pay" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
src={Googlepay} />
</div>
</div>
</div>
<div>
<p className="mb-2 pt-4 text-secondary leading-snug text-opacity-70 font-medium text-[15px] mt-2">Card Holder Name</p>
<div className="mb-6">
<div className=" w-full">
<div>
<div className="relative w-full">
<input type="text" placeholder="Enter card holder name" 
className=" w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border 
border-[#BEBEBE] text-dust bg-white outline-none  transition-all " 
id="" />
</div>
</div>
</div>
</div>
<p className="mb-2 font-medium text-[15px] mt-2">Card Number</p>
<div>
<div className="w-full rounded-md px-5 py-4 border border-[#BEBEBE] text-dust bg-white outline-none font-semibold
text-base">
<div className="">
<input type="text" className="w-full outline-none" placeholder="card number" aria-hidden="true" aria-label="" maxLength="1" />
</div>
</div>
</div>
<div className="flex my-5 mb-10">
<div className="w-1/2">
<p className="mb-2   font-medium text-[15px] mt-2">Expiry Date</p>
<div>
<div className="w-full rounded-md px-5 py-4 border border-[#BEBEBE] text-dust bg-white outline-none font-semibold text-base">
<div className="">
<input className="w-full outline-none" placeholder="expiry date" aria-hidden="true" aria-label=" " maxLength="1"
/>
</div>
</div>
</div>
</div>
<div className="w-1/2 ml-6">
<p className="mb-2 text-secondary leading-snug text-opacity-70 font-medium text-[15px] mt-2">CVC</p>
<div>
<div className="w-full rounded-md px-5 py-4 border border-[#BEBEBE] text-dust bg-white outline-none font-semibold text-base
StripeElement StripeElement--empty">
<div className=""> 
<input className="w-full outline-none" placeholder='CVC' aria-hidden="true" aria-label=" " maxLength="1"  />
</div>
</div>
</div>
</div>
</div>
{/* <button className="w-full text-secondary bg-[#17B745]
hover:bg-[#17B745] focus:bg-[#17B745] flex border relative items-center justify-center px-4 false opacity-100 py-2 rounded-md font-semibold text-[15px] outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 transition-all">
<span className="flex items-center">Pay £840</span>
</button> */}
</div>
<Elements stripe={stripePromise}>
<PaymentForm />
</Elements>
</div>
</div>
</div>

<div className="block items-center justify-content-center">
<button type="submit" className="bg-theme-red-color hover:bg-red-900 w-full hover:text-white rounded-md mb-5 px-12 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600">
<span className="flex items-center justify-center">
Pay £840
<span className="ml-4">
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M5 12h13M12 5l7 7-7 7"></path>
</svg>
</span>
</span>
</button>
</div>
</div>
<Sidebar/>
</div>
<Footnote />
</div>
);
}
export default payment;