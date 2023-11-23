import React from 'react';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Footnote from '@/app/components/Footnote';
import Formnav from '@/app/components/Formnav';
import Sidebar from '@/app/components/sidebar/sidebar';


const thankyou = () => {
const router = useRouter();
return (
<div>
<Formnav />
<div className="mt-[0px] flex justify-center items-top px-7 py-8">
<div className='w-full lg:max-w-[750px] pb-24'>
<div className="mt-[10px] items-center pt-36 pb-36">
    <div className="w-full lg:max-w-[750px] text-center">
    <h1 class="text-black font-bold lg:text-6xl text-5xl text-center">Booking Confirmed</h1>
<p className="text-center lg:my-10 my-4 text-xl text-dark font-medium">
Thank you for booking with us. Your payment has been received. We will contact you shortly to confirm the details. If you have any urgent inquiries, please feel free to call us now. You can also view your order history by clicking the "Go to Dashboard" button below.</p>
<a href="http://localhost:3000/customer" class="red-btn  uppercase tracking-[-1.2px] lg:p-4 p-3 font-bold lg:px-8 px-5
  rounded-full bg-red-700  hover:bg-red-600 hover:text-white text-2xl text-center
  text-white inline-flex items-center btnanimate mr-2">
 Go to Dashboard
<svg aria-hidden="true" class="w-6 h-6 ml-4 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
</svg>
      </a> 

 <a href="tel:03333222233" class="red-btn  uppercase tracking-[-1.2px] lg:p-4 p-3 font-bold lg:px-8 px-5
  rounded-full bg-red-700  hover:bg-red-600 hover:text-white text-2xl text-center
  text-white inline-flex items-center btnanimate">
 033 33 22 22 33
<svg aria-hidden="true" class="w-6 h-6 ml-4 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
</svg>
      </a>     
</div>
</div>

  </div>
  </div>

  {/* <Sidebar /> */}
    <Footnote />
</div>
);
}
export default thankyou;