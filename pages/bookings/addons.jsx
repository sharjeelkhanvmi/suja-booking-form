import React from 'react';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Sidebar from '@/app/components/sidebar/sidebar';
import Footnote from '@/app/components/Footnote';
import Formnav from '@/app/components/Formnav';

let formdata = Cookies.get('formData');
const data = formdata ? JSON.parse(formdata) : { auto_manual: '' };

const validationSchema = Yup.object().shape({
  // auto_manual: Yup.string()
  //   .required("Auto Manual is required")
});


const addons = () => {
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          Cookies.set('formData', JSON.stringify(values));
          let formdata = Cookies.get('formData');
          router.push('/bookings/addons/');
        }}
      >
        {formikProps => (
          <Form>
        <Formnav />
<div className="mt-[0px] lg:w-[calc(100vw-360px)] flex justify-center items-top px-7 py-8">

 <div className='w-full lg:max-w-[750px] pb-24'>  
<div className="mt-[10px] items-top py-8">
<div className="w-full lg:max-w-[750px]">      
<div class="w-full mb-5 pr-4">
<h1 class="text-[24px] font-semibold">Payment Details</h1>
<p class="mb-4 font-regular text-stone-500	 text-[16px] mt-2">
 Secure your course today! We accept all major
 credit and debit cards, including American Express.</p>
 <div class="flex items-center mb-4 justify-between space-x-2">
 <div class="flex space-x-2 items-center">
 <div class="w-12 transition-all duration-300 opacity-100">
 <img alt="AMEX Brand Logo" loading="lazy" width="58" height="37" decoding="async" data-nimg="1"
  src="assets/amex.f54f9bb1" /></div>
  <div class="w-12 transition-all duration-300 opacity-100">
  <img alt="Mastercard Brand Logo" loading="lazy" width="58" height="39" decoding="async" data-nimg="1" 
  src="/_next/static/media/mastercard.a1764ac8.svg" /></div>
  <div class="w-12 transition-all duration-300 opacity-100">
  <img alt="Visa Brand Logo" loading="lazy" width="58" height="37" decoding="async" data-nimg="1" 
  src="/_next/static/media/visa.7c2bf868.svg" /></div></div>
  <div class="flex space-x-2 items-center"><div class="w-12">
  <img alt="Apple Pay Brand Logo" loading="lazy" width="58" height="37" decoding="async" data-nimg="1" 
  src="/_next/static/media/apple_pay.8af94a42.svg" /></div>
  <div class="w-14"><img alt="Google Pay Brand Logo" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" 
  src="/_next/static/media/google_pay.4a1733d7.svg" /></div>
  </div>
  </div>

  <div>
  <p class="mb-2 pt-4 text-secondary leading-snug text-opacity-70 font-medium text-[15px] mt-2">Card Holder Name</p>
  <div class="mb-6">
  <div class=" w-full">
  <div>
  <div class="relative w-full">
  <input type="text" placeholder="Enter card holder name" 
  class=" w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border 
   border-[#BEBEBE] text-dust bg-white outline-none  transition-all " 
   id="" /></div>
   </div>
   </div>
   </div>
   <p class="mb-2 font-medium text-[15px] mt-2">Card Number</p>
   <form>
   <div>
   <div class="w-full rounded-md px-5 py-4 border border-[#BEBEBE] text-dust bg-white outline-none font-semibold
    text-base">
    <div class="">
     <input type="text" class="w-full outline-none" placeholder="card number" aria-hidden="true" aria-label="" maxlength="1" />
     </div>
     </div>
     </div>
     <div class="flex my-5 mb-10">
     <div class="w-1/2">
     <p class="mb-2   font-medium text-[15px] mt-2">Expiry Date</p><div>
     <div class="w-full rounded-md px-5 py-4 border border-[#BEBEBE] text-dust bg-white outline-none font-semibold text-base">
     <div class="">
    <input class="w-full outline-none" placeholder="expiry date" aria-hidden="true" aria-label=" " maxlength="1"
    />
    </div>
    </div>
    </div>
    </div>
    <div class="w-1/2 ml-6">
    <p class="mb-2 text-secondary leading-snug text-opacity-70 font-medium text-[15px] mt-2">CVC</p><div>
    <div class="w-full rounded-md px-5 py-4 border border-[#BEBEBE] text-dust bg-white outline-none font-semibold text-base
     StripeElement StripeElement--empty">
     <div class=""> 
      <input class="w-full outline-none" placeholder='CVC' aria-hidden="true" aria-label=" " maxlength="1"  />
      </div>
      </div>
      </div>
      </div>
      </div>
      <button class="w-full text-secondary bg-[#17B745]
       hover:bg-[#17B745] focus:bg-[#17B745] flex border relative items-center justify-center px-4 false opacity-100 py-2 rounded-md font-semibold text-[15px] outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 transition-all">
      <span class="flex items-center">Pay £1,655</span>
      </button>
      </form>
      </div>

</div>

</div>
</div>


<div className="block items-center justify-content-center">
<button type="submit" className="bg-theme-red-color hover:bg-red-900 w-full hover:text-white rounded-md mb-5 px-12 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600">
<span className="flex items-center justify-center">Continue<span className="ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg></span></span>
</button>

</div>
</div> 
  <Sidebar/>
</div>            
  </Form>
        )}
  </Formik>
  <Footnote />
    </div>
  );
}
export default addons;


