"use client";
import { React, useState } from "react";
import Link from "next/link";

const course = () => {
  const [Toggle, setToggle] = useState(false);

  const hideShow = () => {
    setToggle(!Toggle);
    console.log(Toggle, "Hide And Show");
  };

  
  const handlePostalCodeChange = (e) => {
    e.preventDefault();
    const newPostalCode = e.target.value;
    setPostalCode(newPostalCode);
  };
  return (
    <form onSubmit={handlePostalCodeChange}>
      <div className="space-y-12 mx-auto max-w-5xl p-10 pb-0">
        <hr />
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold lg:text-3xl leading-7 text-gray-900 text-center">
            Course Details
          </h2>
          <div className="mt-10 grid">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <div className=" flex justify-between items-center mb-5 gap-x-5">
                  <h1 className=" text-[21px] leading-snug font-semibold">
                    Pick a gearbox — Manual or Automatic
                  </h1>
                  <div className="cursor-pointer" onClick={hideShow}>
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                </div>
                {Toggle && (
                  <div
                    className=" overflow-y-hidden"
                    style={{ height: "auto", opacity: 1 }}
                  >
                    <div className="mb-8 p-5 bg-white w-full rounded-lg border-2 border-secondary">
                      <p className=" text-secondary leading-snug text-opacity-70 font-medium text-[15px] ">
                        Decide whether you want to be in charge of changing
                        gears or not. If you pass in an automatic, you're
                        legally allowed to drive automatic vehicles only, but if
                        you pass in a manual, you can drive either.
                      </p>
                    </div>
                  </div>
                )}

                <div className=" mb-10">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="w-full flex items-center text-left bg-pmfLightGreen ring-2 ring-primary ring-offset-1 bg-pmfGray py-4 px-5 rounded-lg border font-semibold text-secondary cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 hover:bg-pmfLightGreen hover:bg-opacity-50 transition-all  ">
                      <div className=" w-full flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="pr-5 false">
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
                              <path
                                d="M16.5 16.5V8.5L12 13.18L7.5 8.5V16.5"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
                            </svg>
                          </div>
                          <div className="">
                            <div className=" false">Manual</div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="w-full flex items-center text-left  bg-pmfGray py-4 px-5 rounded-lg border font-semibold text-secondary cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 hover:bg-pmfLightGreen hover:bg-opacity-50 transition-all  ">
                      <div className=" w-full flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="pr-5 false">
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
                              <path
                                d="M17.4593 16.7279L12.0003 7.2719L6.5403 16.7279"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
                              <path
                                d="M8.3145 13.4275H15.6855"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
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
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6  max-w-5xl pb-10">
          <Link
            href="/"
            className="text-sm font-semibold px-4 py-4 leading-6 text-gray-900"
          >
            Back to Postal Code
          </Link>
          <Link
            href="/course/tests"
            className="bg-red-700 hover:bg-red-600 hover:text-white rounded-md  px-12 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Continue{" "}
            <span className="" aria-hidden="true">
              {" "}
              &rarr;{" "}
            </span>
          </Link>
        </div>

        <div className="p-4 justify-center gap-5 grid lg:grid-cols-3">
          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                ></path>
              </svg>
            </div>
            <div className="flex-auto">
              <a href="#" className="block font-semibold text-gray-900">
                Learn from the best <span className="absolute inset-0"></span>
              </a>
            </div>
          </div>
          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                ></path>
              </svg>
            </div>
            <div className="flex-auto">
              <a href="#" className="block font-semibold text-gray-900">
                Support at every step <span className="absolute inset-0"></span>
              </a>
            </div>
          </div>
          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                ></path>
              </svg>
            </div>
            <div className="flex-auto">
              <a href="#" className="block font-semibold text-gray-900">
                100% Money Back Guarantee{" "}
                <span className="absolute inset-0"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default course;
