import { useEffect, useState } from 'react';
//import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
// import Cookies from "js-cookie";
// let formdata = Cookies.get('formData');
// const localdata = formdata ? JSON.parse(formdata) : { };


export default function Formnav({data}) {

const router = useRouter();
// const [isClient, setIsClient] = useState(data)

  // useEffect(() => {
  //   setIsClient(isClient)
  // }, []);

  // console.log(data)

  // const handleGoBack = () => {
  //   if (router.pathname === "/bookings") {
  //     // If the current route is "/bookings," navigate to your website URL
  //     window.location.href = 'https://sujadrivingschool.co.uk/';
  //   } else {
  //     // Use the router's back() method to navigate back to the previous page
  //     router.back();
  //   }
  // };
  //const renderDrType = data?.step2?.dr_type || 'Loading...';

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  let drType;
  // const drType = data.step2.dr_type;
  // const courseType = data.step2.dr_course_type;
  let coursePriceObj;
  let hours_value;
  let variant;
  let full;
  let deposit;
  let total;
  let subTotal;
  let fast_track_theory;
  let fast_track_practical;

  // console.log(data)
  if(data && data.step2 && data.step2.dr_course_price != undefined){
    drType = capitalize(data.step2.dr_type);
    coursePriceObj = data.step2.dr_course_price[Object.keys(data.step2.dr_course_price)[0]];
    hours_value = coursePriceObj.value;
    variant = coursePriceObj.variant;
    full = parseInt(coursePriceObj.full);
    deposit = parseInt(coursePriceObj.deposit);
  }

  fast_track_theory = (data.step3.fast_track_theory != '') ? parseInt(data.step3.fast_track_theory) : 0
  fast_track_practical = (data.step3.fast_track_practical != '') ? parseInt(data.step3.fast_track_practical) : 0
  

 // subTotal = ((deposit) ? deposit : full)

  total = full + fast_track_theory + fast_track_practical;

  

  // console.log(variant)
  // console.log(data)


  return (

    <motion.div
      initial={{ opacity: 0.8, marginRight: -360 }}
      animate={{ opacity: 1, marginRight: 0 }}
      exit={{ opacity: 1, marginRight: -360 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="fixed pt-28 top-20 right-0 z-10 w-[350px] bg-[#0c1936] text-white overflow-y-auto h-[calc(100vh-0px)] p-6"
    >

    {data && data.step2 && data.step2.dr_course_price ? (
        
        <div className="flex flex-col w-full h-full">
        <div className="space-x-4 text-center">
          <Image alt="Suja Logo" width={70} height={70} src={Logo} className="mb-4 w-auto h-auto" />
          <h1 className="text-xl leading-snug font-semibold">Cart Summary</h1>
        </div>
        <div className="mt-5">
          <h4 className="text-white text-opacity-50 font-bold uppercase text-[13px] tracking-wide">
            Course
          </h4>
          <div className="mt-2 w-full font-semibold flex">
            <span className="w-full">{ hours_value +' '+ variant +' - '+ drType}</span>
            <div className="text-right">
              <span className="text-white text-opacity-60 ml-4">£{ full }</span>
            </div>
          </div>
        </div>

        { (data && data.step3 && data.step3.fast_track_theory || data && data.step3 && data.step3.fast_track_practical)  ? (

          <div>

          <div className="mt-5">
          <h4 className="text-white text-opacity-50 font-bold uppercase text-[13px] tracking-wide">
            Tests
          </h4>


          {data && data.step3 && data.step3.fast_track_theory ? (

            <div className="mt-2 w-full font-semibold flex">
            <span className="w-full">Theory Test</span>
            <div className="text-right">
              <span className="text-white text-opacity-60 ml-4">£{data.step3.fast_track_theory}</span>
            </div>
            </div>

          ) : ''}
          {data && data.step3 && data.step3.fast_track_practical ? (

            <div className="mt-2 w-full font-semibold flex">
            <span className="w-full">Practical Test</span>
            <div className="text-right">
              <span className="text-white text-opacity-60 ml-4">£{data.step3.fast_track_practical}</span>
            </div>
            </div>

          ) : ''}

          </div>

          </div>

        ) : ''}

        
          <div className="mt-14 flex justify-between items-center">
          <h4 className="text-white text-opacity-50 font-bold uppercase text-[13px] tracking-wide">
            Total
          </h4>
          <div>
            <span className="text-white font-semibold">£{total}</span>
          </div>
          </div>


      </div>

      
      ) : (
        
        // empty card html
        <div className="h-full w-full p-4 flex items-center justify-center flex-col text-center">
        <div className="flex items-center justify-center flex-col text-center">
          <div className="rounded-full bg-white bg-opacity-10 p-8 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width={40}
              height={40}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <p className="font-semibold mt-4">Your cart is empty</p>
          <p className="text-sm text-white text-opacity-70 mt-4">
            Start by selecting your course to see it in your cart.
          </p>
        </div>
      </div>
      


      )
      
    }







    </motion.div>
  );
}
