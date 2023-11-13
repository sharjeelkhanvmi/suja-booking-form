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
  auto_manual: Yup.string()
    .required("Auto Manual is required")
});


const student = () => {
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
          router.push('/bookings/availablity');
        }}
      >
        {formikProps => (
          <Form>
        <Formnav />
<div className="mt-[0px] lg:w-[calc(100vw-360px)] flex justify-center items-top px-7 py-8">

  <div className='w-full lg:max-w-[750px] pb-24'>  
<div className="mt-[10px] items-top py-8">
<div className="w-full lg:max-w-[750px]">      
<div class="w-full mb-5 pr-4"><h1 class="text-[26px] text-neutral-950	 font-bold">
Let's get to know each other </h1>
<p class="text-current font-regular text-[17px] mt-2">
We've helped over 50,000 people get on the road - fast. We could get you passed in as little as 4 months!</p>
</div>

<div class=" w-full">
<label class="uppercase text-xs tracking-wide font-bold text-opacity-70 text-dust &quot;text-opacity-70&quot; ">Title
</label><div class="mt-2"><div class="grid grid-cols-4 gap-3">
<button class="w-full   bg- flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px]
 outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 hover:bg-pmfGraySecondary transition-all">
 <span class="flex items-center">Mr</span></button>
 <button class=" w-full bg-pmfGray  bg- flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px] 
 outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 hover:bg-pmfGraySecondary transition-all">
 <span class="flex items-center">Mrs</span></button>
 <button class=" w-full bg-pmfGray  bg- flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px]
  outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 hover:bg-pmfGraySecondary transition-all">
  <span class="flex items-center">Miss</span></button>
  <button class="w-full  flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px]  transition-all">
<span class="flex items-center">Mx</span></button></div>
</div>
</div>
<form>
<div class="mt-5 w-full">
<label class="uppercase text-sm  tracking-wide font-medium text-gray-800" for="firstName">
First Name</label>
<div class="mt-1">
<div class="relative w-full">
<input type="text" placeholder="" class="  w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 focus:ring-inset  transition-all " id="firstName" autocomplete="given-name" value="alex" />
</div>
</div>
</div>
<div class="mt-5 w-full">
<label class="uppercase text-sm tracking-wide font-medium text-gray-800" for="surname">Last Name</label>
<div class="mt-1">
<div class="relative w-full">
<input type="text" placeholder="" class="w-full rounded-md font-semibold text-base placeholder:text-dust 
placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 
focus:ring-secondary focus:ring-offset-1 transition-all " id="surname"  value="hells" /></div>
</div>
</div>
<div class="mt-5 w-full">
<label class="uppercase text-xs tracking-wide font-medium text-gray-800" for="email">Email</label>
<div class="mt-1"><div class="relative w-full">
<input type="email" placeholder="" class="  w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 
px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1
 transition-all " id="email" value="iemayat.test@test.com" />
 </div>
 </div>
 </div>
 <div class="mt-5 w-full">
 <label class="uppercase text-xs tracking-wide font-medium text-gray-800" for="phoneNumber">Mobile number</label>
 <div class="mt-1"><div class="relative w-full"><input type="tel" placeholder="" class="w-full rounded-md font-semibold text-base 
 placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none 
 focus:ring-2 focus:ring-secondary focus:ring-offset-1 transition-all " id="phoneNumber"  value="+447369745631" />
 </div>
 </div>
 </div>

 <div class="mt-5 w-full">
 <div>
 <div class=" flex items-center cursor-pointer group">
 <div class="rounded-full transition-all flex w-10 h-10 items-center justify-center mr-4 border-2 border-primaryOutline bg-primary">
 <span><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span></div><div class="font-semibold w-[calc(100%-40px)] text-[15px]">
 Are you happy for us to contact you with more info about learning to drive?</div></div>
 </div></div>

</form>

</div>
</div>


<div className="block items-center justify-content-center">
<button type="submit" className="bg-theme-red-color hover:bg-red-900 w-full hover:text-white rounded-md mb-5 px-12 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600">
<span className="flex items-center justify-center">Continue<span className="ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg></span></span>
</button>
<p className='block w-full italic'>Personal data is processed in compliance with UK GDPR and only for the purposes outlined in our Privacy Notice. No personal data is ever sold to third parties.

</p>
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
export default student;


