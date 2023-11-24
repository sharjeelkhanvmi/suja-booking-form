import { React, useState, useEffect } from 'react';
import { useRouter } from "next/router";
// import Sidebar from "@/app/components/sidebar/sidebar";
// import { Formik, Field, Form, ErrorMessage } from "formik";
import Footnote from "@/app/components/Footnote";
import Formnav from "@/app/components/Formnav";
import Amex from "@/public/assets/amex.f54f9bb1.svg";
import Mastercard from "@/public/assets/mastercard.a1764ac8.svg";
import Visa from "@/public/assets/visa.7c2bf868.svg";
import Apple from "@/public/assets/apple_pay.svg";
import Googlepay from "@/public/assets/google_pay.svg";
import Image from "next/image";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import dynamic from 'next/dynamic'
import axios from "axios";
const PaymentForm = dynamic(() => import('@/app/components/PaymentForm'), { ssr: false })
// import PaymentForm from "@/app/components/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51OCgAiLtI6eAAvg7XJGkaG35swVZUZF8RfzmeizRJ2WaE9SvASJaUUMD0POWNC34gIcWLwmGLuH7yltlphocFIIE00DATZf8Tf"
);

const Payment = ({info}) => {
  const [changedData, setChangedData] = useState();
  useEffect(() => {
    setChangedData(info)
  }, [info])
  const router = useRouter();


  let drType;
  let course_name;
  let coursePriceObj;
  let hours_value;
  let variant;
  let full;
  let deposit;
  let total;
  let fast_track_theory;
  let fast_track_practical;
  let pass_protect;
  
  if(changedData && changedData.step2 && changedData.step2.dr_course_price != undefined){
    drType = capitalize(changedData.step2.dr_type);
    course_name = changedData.step2.dr_course_type;
    coursePriceObj = changedData.step2.dr_course_price[Object.keys(changedData.step2.dr_course_price)[0]];
    hours_value = coursePriceObj.value;
    variant = coursePriceObj.variant;
    full = parseInt(coursePriceObj.full);
    deposit = parseInt(coursePriceObj.deposit);
  }
  
  
  fast_track_theory = (changedData && changedData.step3 && changedData.step3.fast_track_theory != '') ? parseInt(changedData.step3.fast_track_theory) : 0
  fast_track_practical = (changedData && changedData.step3 && changedData.step3.fast_track_practical != '') ? parseInt(changedData.step3.fast_track_practical) : 0
  pass_protect = (changedData && changedData.step6 && changedData.step6.pass_protect != '') ? parseInt(changedData.step6.pass_protect) : 0
  // subTotal = ((deposit) ? deposit : full)
  
  total = full + fast_track_theory + fast_track_practical + pass_protect;

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const handlePaymentSuccess = async () => {
    try {
      // Send email with all data from local storage
      await axios.post("/api/api_mailer", { formdata: info });
      console.log("Email sent successfully");

      try {
        const response = await axios.post("/api/formdata/postdata", info);
        // Handle success
        console.log("Data successfully saved");
      } catch (error) {
        console.error(error);
        // Handle error
        console.log("Error saving data to the database");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    // Handle successful payment, e.g., redirect to a thank-you page
    router.push("/bookings/thankyou");
  };

  const setStepSeven = (e) => {
    let amount;
     if(e.target.value == 'Full'){
      amount = total;
     }
     else{
      amount = deposit;
     }
    const step7 = { step7 : { payment: e.target.value, amount: amount } }
    const formDatas = {
      ...changedData,
      ...step7
    };
    
    localStorage.setItem("formData", JSON.stringify(formDatas));
    setChangedData(formDatas)
    // console.log(changedData)

  };
  

  return (
    <div>
      <Formnav />
      <div className="mt-[0px] flex justify-center items-top px-7 py-8">
        <div className="w-full lg:max-w-[750px] pb-24 flex flex-wrap justify-center">
        <div className="w-1/2 pe-3">
                <input
                type="radio"
                name="payment"
                className="sr-only payment"
                id="deposit"
                value="Deposit"
                onChange={(e) => {
                  setStepSeven(e);
                }}
                />
                <label htmlFor="deposit" className="w-full flex items-center text-left py-4 px-5 rounded-lg border font-semibold text-secondary cursor-pointer
                    outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-indigo-400  
                    transition-all mb-5">                    
                    <div className="">
                        <span className="w-full font-bold">Pay Deposit - £{deposit}</span>
                        <div className="text-secondary text-opacity-[0.65] text-sm false">
                            <p className="text-secondary leading-snug text-opacity-70 font-medium 
                                text-[15px] mt-2">Pay a deposit securely by credit or debit card. This includes the price of PassProtect and the remaining £{total} isn't due until we've arranged your course.</p>
                        </div>
                    </div>
                </label>
        </div>

        <div className="w-1/2 ps-3">
                <input
                type="radio"
                name="payment"
                className="sr-only payment"
                id="full"
                value="Full"
                onChange={(e) => {
                  setStepSeven(e);
                }}
                />
                <label htmlFor="full" className="w-full flex items-center text-left py-4 px-5 rounded-lg border font-semibold text-secondary cursor-pointer
                    outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-indigo-400  
                    transition-all mb-5">
                    <div className="">
                        <span className="w-full font-bold">Pay Full - £{full}</span>
                        <div className="text-secondary text-opacity-[0.65] text-sm false">
                            <p className="text-secondary leading-snug text-opacity-70 font-medium 
                                text-[15px] mt-2">Concentrate on the driving and forget about the finance side of things by paying the full course balance securely by credit or debit card today.</p>
                        </div>
                    </div>
                </label>
        </div>



          <div className="mt-[10px] items-top py-8 w-full">
            <div className="w-full lg:max-w-[750px]">
              <div className="w-full mb-5 pr-4">
                <h1 className="text-[24px] font-semibold">Payment Details</h1>
                <p className="mb-4 font-regular text-stone-500   text-[16px] mt-2">
                  Secure your course today! We accept all major credit and debit
                  cards, including American Express.
                </p>
                <div className="flex items-center mb-4 justify-between space-x-2">
                  <div className="flex space-x-2 items-center">
                    <div className="w-12 transition-all duration-300 opacity-100">
                      <Image
                        alt="AMEX Brand Logo"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={Amex}
                      />
                    </div>
                    <div className="w-12 transition-all duration-300 opacity-100">
                      <Image
                        alt="Master Card Logo"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={Mastercard}
                      />
                    </div>
                    <div className="w-12 transition-all duration-300 opacity-100">
                      <Image
                        alt="Visa Brand Logo"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={Visa}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <div className="w-12">
                      <Image
                        alt="Apple Pay"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={Apple}
                      />
                    </div>
                    <div className="w-12">
                      <Image
                        alt="Apple Pay"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={Googlepay}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  {/* <button className="w-full text-secondary bg-[#17B745]
hover:bg-[#17B745] focus:bg-[#17B745] flex border relative items-center justify-center px-4 false opacity-100 py-2 rounded-md font-semibold text-[15px] outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 transition-all">
<span className="flex items-center">Pay £840</span>
</button> */}
                </div>
                <Elements stripe={stripePromise}>
                  <PaymentForm onSuccess={handlePaymentSuccess} data={changedData}/>
                </Elements>
              </div>
            </div>
          </div>

          {/* <div className="block items-center justify-content-center">
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
</div> */}
        </div>
      </div>
      <Footnote />
    </div>
  );
};

let formdata;
if (typeof localStorage !== 'undefined') {
  formdata = JSON.parse(localStorage.getItem("formData"));
}
else {
  formdata = '';
}

const PaymentPage = () => {
  return <Payment  info={formdata} />;
};

export default PaymentPage;
