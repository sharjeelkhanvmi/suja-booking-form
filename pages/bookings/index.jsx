import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { BiLoaderAlt } from "react-icons/bi"; // Import the loading icon
import ThreeBoxes from "@/app/components/3boxes";
import Footnote from "@/app/components/Footnote";
import Formnav from "@/app/components/Formnav";
import OldUserLoader from "@/pages/bookings/OldUserLoader";
import {auto, manual} from '@/database/models/drivingCoursesData';




const index = () => {

const [info,setInfo] = useState();
const [isLoader, setLoader] = useState(false);
const [valid, setValid] = useState();
let formdata;
let urlData;
let coursePkg;

if (typeof window !== 'undefined') {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let dr_type = urlParams.get('dr_type');
  const dr_course_type = urlParams.get('dr_course_name');
  const dr_course_price = urlParams.get('dr_pkg_hours');
  if(dr_type && dr_course_type && dr_course_price){
  if(dr_type == 'auto'){
    coursePkg = auto[dr_course_type]['course'][dr_course_price]
    dr_type = 'automatic';
  }
  else{
    coursePkg = manual[dr_course_type]['course'][dr_course_price]
    dr_type = 'manual';
  }
  urlData = {
    'step2' : {
      "dr_type": dr_type,
      "dr_course_type": dr_course_type,
      "dr_course_price": {}
    }
  }
  urlData['step2']['dr_course_price'][dr_course_price] = coursePkg;
  localStorage.setItem("formData", JSON.stringify(urlData));
}
  // console.log(dr_type, dr_course_type, dr_course_price);
  // console.log(urlData);
if (typeof localStorage !== 'undefined') {
  formdata = JSON.parse(localStorage.getItem("formData"));
}
else{
  formdata = '';
}
}

useEffect(() => {
  setInfo(formdata)
},[])

const validationSchema = Yup.object().shape({
  postal_code: Yup.string()
    .required("Postal code is required")
    .matches(/^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/, "Invalid UK postal code"),
});

function enableLoader(){
    setLoader(valid);
}

  const router = useRouter();
  const step1 = formdata ? formdata.step1 : ''
  // console.log(step1)
  return (
    <div>
      <Formik
        initialValues={step1 ? step1 : { postal_code: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // setSubmitting(true);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          
          const step01 = { step1: values }
          const formDatas = {
            ...formdata,
            ...step01
          };
          localStorage.setItem("formData", JSON.stringify(formDatas));
          router.push("/bookings/course/");
          // setSubmitting(false);
        }}
      >
        {(formikProps) => (
          <Form>
            {setValid(formikProps.dirty)}
            <Formnav />
            
            <div className="md:space-y-12 space-y-12 mx-auto w-full lg:max-w-[48%] px-4 lg:px-0 md:pt-36 pt-10 pb-10 md:py-24 py-10">
              <div>
                <h2 className="font-semibold text-2xl text-gray-900 text-start">
                  Let's pass you fast. Where would you like your lessons to
                  start?
                </h2>
                <div className="mt-7 grid">
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="postal_code"
                        placeholder="Postal code"
                        id="postal_code"
                        className={`text-lg block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm placeholder:text-gray-400 ${
                          formikProps.errors.postal_code
                            ? "ring-1 ring-inset ring-red-600"
                            : "ring-1 ring-inset ring-gray-300"
                        }`}
                      />
                      <ErrorMessage
                        name="postal_code"
                        component="p"
                        className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-content-center">
                <button
                onClick={enableLoader}
                  type="submit"
                  className={`bg-theme-red-color hover:bg-red-900 w-full hover:text-white rounded-md mb-5 px-12 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600 ${
                    formikProps.isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  disabled={formikProps.isSubmitting}
                >
                  <span className="flex items-center justify-center">
                    {formikProps.isSubmitting ? (
                      <>
                        
                        Loading
                        <BiLoaderAlt className="ml-2 animate-spin mr-2 text-2xl" />
                      </>
                    ) : (
                      <>
                        Continue
                        <span className="ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h13M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ThreeBoxes />
      <Footnote />
      {isLoader && <OldUserLoader />}
    </div>
  );
};

export default index;