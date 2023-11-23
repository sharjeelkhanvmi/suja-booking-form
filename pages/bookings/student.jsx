import { React, useState, useEffect } from 'react';
import * as Yup from "yup";
import { object, string, ref } from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
const Sidebar = dynamic(() => import('@/app/components/sidebar/sidebar'), { ssr: false })
import Footnote from '@/app/components/Footnote';
import Formnav from '@/app/components/Formnav';
//let formdata = Cookies.get('formData');
//const data = formdata ? JSON.parse(formdata) : { phone_number: "" };



const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

  const validationSchema = Yup.object().shape({
    phone_number: Yup.string()
      .required('Phone number is required')
      .matches(
        /^(?:(?:\+44)|(?:0))(?:(?:1\d{9})|(?:[1-9]\d{9}))$/,
        'Invalid UK phone number'
      ),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms')
      .required('You must accept the terms'),
    title: Yup.string().required('Title is required'),
    firstName: Yup.string().required('First name is required'),
    surname: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
      confirm_password: Yup.string()
      .required("Please re-type your password")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });
  

// console.log(data)

const student = () => {

    const [info, setInfo] = useState();
    let formdata;
    if (typeof localStorage !== 'undefined') {
      formdata = JSON.parse(localStorage.getItem("formData"));
    }
    else {
      formdata = '';
    }
    useEffect(() => {
      setInfo(formdata)
    }, [])

const router = useRouter();
const [changedData, setChangedData] = useState(formdata);
const step4 = formdata.step4
return (
<div>
    <Formik
    initialValues={step4? step4 :{
      title: "",
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirm_password:"",
      phone_number: "",
      terms: false
  }}
    validationSchema={validationSchema}
    onSubmit={async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    const formDatas = {
      ...formdata,
      ...{'step4': values}
    };
    localStorage.setItem("formData", JSON.stringify(formDatas));
    //Cookies.set('formData', JSON.stringify(stepFourData), { expires: 30 });
    //let formdata123 = Cookies.get('formData');
    router.push('/bookings/availability');
    }}
    >
    {({values, setFieldValue}) => (
    <Form>
        <Formnav />
        <div className="mt-[0px] lg:w-[calc(100vw-360px)] flex justify-center items-top px-7 py-8">
            <div className='w-full lg:max-w-[750px] pb-24'>
                <div className="mt-[10px] items-top py-8">
                    <div className="w-full lg:max-w-[750px]">
                        <div className="w-full mb-5 pr-4">
                            <h1 className="text-[26px] text-neutral-950	 font-bold">
                                Let's get to know each other 
                            </h1>
                            <p className="text-current font-regular text-[17px] mt-2">
                                We've helped over 50,000 people get on the road - fast. We could get you passed in as little as 4 months!
                            </p>
                        </div>
                        <div className=" w-full">
                            <label className="uppercase text-xs tracking-wide font-bold text-opacity-70 text-dust &quot;text-opacity-70&quot; ">Title
                            </label>
                            <div className="mt-2">
                                <div className="grid grid-cols-4 gap-3">
                                    <div>
                                        <Field type="radio" name="title" className="sr-only title" id="title_1" value="Mr"/>
                                        <label htmlFor="title_1" className="w-full cursor-pointer flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px] outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 hover:bg-pmfGraySecondary transition-all">
                                        <span className="flex items-center">Mr</span>
                                        </label>
                                    </div>
                                    <div>
                                        <Field type="radio" name="title" className="sr-only title" id="title_2" value="Mrs"/>
                                        <label htmlFor="title_2" className="w-full cursor-pointer flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px] outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 hover:bg-pmfGraySecondary transition-all">
                                        <span className="flex items-center">Mrs</span>
                                        </label>
                                    </div>
                                    <div>
                                        <Field type="radio" name="title" className="sr-only title" id="title_3" value="Miss"/>
                                        <label htmlFor="title_3" className="w-full cursor-pointer flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px] outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 hover:bg-pmfGraySecondary transition-all">
                                        <span className="flex items-center">Miss</span>
                                        </label>
                                    </div>
                                    <div>
                                        <Field type="radio" name="title" className="sr-only title" id="title_4" value="Mx"/>
                                        <label htmlFor="title_4" className="w-full cursor-pointer flex border items-center justify-center px-4 py-2 rounded-md font-semibold text-[15px] outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 hover:bg-pmfGraySecondary transition-all">
                                        <span className="flex items-center">Mx</span>
                                        </label>
                                    </div>
                                </div>
                                <ErrorMessage
                                    name="title"
                                    component="p"
                                    className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                                />
                            </div>
                        </div>
                        <div className="mt-5 w-full">
                            <label className="uppercase text-sm  tracking-wide font-medium text-gray-800" htmlFor="firstName">
                            First Name</label>
                            <div className="mt-1">
                                <div className="relative w-full">
                                    <Field type="text" name="firstName" className="w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 focus:ring-inset  transition-all " id="firstName" autoComplete="given-name" />
                                    <ErrorMessage
                                        name="firstName"
                                        component="p"
                                        className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                                    />
                                </div>
                            </div>                            
                        </div>
                        <div className="mt-5 w-full">
                            <label className="uppercase text-sm tracking-wide font-medium text-gray-800" htmlFor="surname">Last Name</label>
                            <div className="mt-1">
                                <div className="relative w-full">
                                    <Field type="text" name="surname" className="w-full rounded-md font-semibold text-base placeholder:text-dust 
                                        placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 
                                        focus:ring-secondary focus:ring-offset-1 transition-all " id="surname" />
                                    <ErrorMessage
                                        name="surname"
                                        component="p"
                                        className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 w-full">
                            <label className="uppercase text-xs tracking-wide font-medium text-gray-800" htmlFor="email">Email</label>
                            <div className="mt-1">
                                <div className="relative w-full">
                                    <Field type="email" name="email" className="w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 
                                        px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1
                                        transition-all " id="email" />
                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 w-full">
                            <label className="uppercase text-xs tracking-wide font-medium text-gray-800" htmlFor="password">Password</label>
            <div className="mt-1">
                <div className="relative w-full">
                    <Field type="password" name="password" className="w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 
                        px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1
                        transition-all " id="p" />
                    <ErrorMessage
                        name="password"
                        component="p"
                        className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                    />
                </div>
            </div>
            </div>
            <div className="mt-5 w-full">
                <label className="uppercase text-xs tracking-wide font-medium text-gray-800" htmlFor="confirm_password">Confirm Password</label>
          <div className="mt-1">
    <div className="relative w-full">
        <Field type="password" name="confirm_password" className="w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 
            px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1
            transition-all " id="p" />
        <ErrorMessage
            name="confirm_password"
            component="p"
            className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
        />
        </div>
            </div>
                        </div>
        <div className="mt-5 w-full">
            <label className="uppercase text-xs tracking-wide font-medium text-gray-800" htmlFor="phone_number">Mobile number</label>
            <div className="mt-1">
                <div className="relative w-full">
                    <Field type="text" name="phone_number" className="w-full rounded-md font-semibold text-base 
                    placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none 
                    focus:ring-2 focus:ring-secondary focus:ring-offset-1 transition-all " id="phone_number"  />
                    <ErrorMessage
                        name="phone_number"
                        component="p"
                        className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                    />
                </div>
            </div>
        </div>
                        <div className="mt-5 w-full">
                            <div>

                                <Field type="checkbox" className="sr-only" name="terms" id="terms" onChange={() => setFieldValue('terms', !values.terms)}/>

                                <label htmlFor="terms" className=" flex items-center cursor-pointer group">
                                    <div className="rounded-full transition-all flex w-10 h-10 items-center justify-center mr-4 border-2 border-primaryOutline bg-primary">
                                    
                                        <span className={`${values.terms ? '' : 'hidden'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        
                                        
                                    </div>
                                    <div className="font-semibold w-[calc(100%-40px)] text-[15px]">
                                        Are you happy for us to contact you with more info about learning to drive?
                                    </div>
                                </label>
                                <ErrorMessage
                                      name="terms"
                                      component="p"
                                      className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500"
                                    />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="block items-center justify-content-center">
                    <button type="submit" className="bg-theme-red-color hover:bg-red-900 w-full hover:text-white rounded-md mb-5 px-12 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600">
                        <span className="flex items-center justify-center">
                            Continue
                            <span className="ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </span>
                    </button>
                    <p className='block w-full italic'>Personal data is processed in compliance with UK GDPR and only for the purposes outlined in our Privacy Notice. No personal data is ever sold to third parties.
                    </p>
                </div>
            </div>
            <Sidebar data={changedData} />
        </div>
    </Form>
    )}
    </Formik>
    <Footnote />
</div>
);
}
export default student;