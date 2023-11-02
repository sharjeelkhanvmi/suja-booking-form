import React from 'react';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ThreeBoxes from '@/app/components/3boxes';
import Sidebar from '@/app/components/sidebar/sidebar';
import Footnote from '@/app/components/Footnote';
import Formnav from '@/app/components/Formnav';

let formdata = Cookies.get('formData');
const data = formdata ? JSON.parse(formdata) : { auto_manual: '' };

const validationSchema = Yup.object().shape({
  auto_manual: Yup.string()
    .required("Auto Manual is required")
});


const index = () => {
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
          router.push('/bookings/course/');
        }}
      >
        {formikProps => (
          <Form>
            <Formnav />
      <div className="mt-[80px] lg:w-[calc(100vw-360px)] flex justify-center items-top px-7 py-8">

       <div className='w-full lg:max-w-[750px] pb-24'>  
      <div className=" mt-[80px] items-top px-7 py-8">
      <div className="w-full lg:max-w-[750px] pb-24">
      

      <div className="grid grid-cols-2 gap-4">
  <button className="w-full flex items-center text-left  bg-pmfGray py-4 px-5 rounded-lg border font-semibold text-secondary cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 hover:bg-pmfLightGreen hover:bg-opacity-50 transition-all  ">
    <div className=" w-full flex justify-between items-center">
      <div className="flex items-center">
        <div className="pr-5 false">
          <svg
            width={19}
            height={19}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z"
              stroke="currentColor"
              strokeWidth={2}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z"
              stroke="currentColor"
              strokeWidth={2}
            />
            <path
              d="M16.5 16.5V8.5L12 13.18L7.5 8.5V16.5"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className="">
          <div className=" false">Manual</div>
        </div>
      </div>
    </div>
  </button>
  <button className="w-full flex items-center text-left bg-pmfLightGreen ring-2 ring-primary ring-offset-1 bg-pmfGray py-4 px-5 rounded-lg border font-semibold text-secondary cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 hover:bg-pmfLightGreen hover:bg-opacity-50 transition-all  ">
    <div className=" w-full flex justify-between items-center">
      <div className="flex items-center">
        <div className="pr-5 false">
          <svg
            width={19}
            height={19}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z"
              stroke="currentColor"
              strokeWidth={2}
            />
            <path
              d="M17.4593 16.7279L12.0003 7.2719L6.5403 16.7279"
              stroke="currentColor"
              strokeWidth={2}
            />
            <path
              d="M8.3145 13.4275H15.6855"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className="">
          <div className=" false">Automatic</div>
        </div>
      </div>
    </div>
  </button>
</div>







      </div>
      </div>

      







              <div className="flex items-center justify-content-center">
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
};

export default index;
