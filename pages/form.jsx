//1st STEP
import Link from "next/link";
import React, { useState } from "react";
import { useContexData } from "@/app/context/MyContext"; // Adjust the path accordingly
import { useRouter } from "next/router";
import Head from 'next/head';
import ThreeBoxes from '@/app/components/3boxes';

const Form = () => {
  const [newPostalCode, setNewPostalCode] = useState("");
  const { updatePostalCode } = useContexData(); // Use the context hook

  const router = useRouter();

  const handlePostalCodeChange = (e) => {
    const postalCode = e.target.value;
    setNewPostalCode(postalCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update postal code in the context
    console.log("Set Postal Code:", newPostalCode);
    updatePostalCode(newPostalCode);
    router.push("/course");

  };

  return (
    <>
    <Head>
      <title>Form - Suja Driving School Booking</title>
      <meta name='description' content='I hope this tutorial is helpful for you' />
    </Head>
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mx-auto max-w-5xl p-10 pb-0">
        <hr />
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold lg:text-3xl leading-7 text-gray-900 text-center">
            Lets pass you fast. Where would you like your lessons to start?
          </h2>
          <div className="mt-10 grid">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  required="required"
                  type="text"
                  name="postal_code"
                  placeholder="Postal"
                  id="postal_code"
                  className="block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newPostalCode} // Bind the value to the state variable
                  onChange={handlePostalCodeChange} // Update the state on change
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6  max-w-5xl pb-10">
          <button
            type="button"
            className="text-sm font-semibold px-4 py-4 leading-6 text-gray-900"
          >
            Back to webite
          </button>
          <div
            onClick={handleSubmit}
            className="bg-red-700 hover:bg-red-600 hover:text-white rounded-md  px-12 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Continue to Course{" "}
            <span className="" aria-hidden="true">
              {" "}
              &rarr;{" "}
            </span>
          </div>
        </div>
        <ThreeBoxes/>      
      </div>
    </form>
    </>
  );
};

export default Form;
