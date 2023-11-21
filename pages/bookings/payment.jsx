import React from "react";
import { useRouter } from "next/router";
import Sidebar from "@/app/components/sidebar/sidebar";
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
import PaymentForm from "@/app/components/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51OCgAiLtI6eAAvg7XJGkaG35swVZUZF8RfzmeizRJ2WaE9SvASJaUUMD0POWNC34gIcWLwmGLuH7yltlphocFIIE00DATZf8Tf"
);

const payment = () => {
  const router = useRouter();

  const handlePaymentSuccess = () => {
    // Handle successful payment, e.g., redirect to a thank-you page
    router.push("/bookings/thankyou");
  };

  return (
    <div>
      <Formnav />
      <div className="mt-[0px] flex justify-center items-top px-7 py-8">
        <div className="w-full lg:max-w-[750px] pb-24">
          <div className="mt-[10px] items-top py-8">
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
                  <PaymentForm onSuccess={handlePaymentSuccess} />
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
export default payment;
