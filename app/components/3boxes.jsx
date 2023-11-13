import { useState } from "react";
import { motion } from "framer-motion";

export default function ThreeBoxes() {
  const [openState, setOpenState] = useState({});

  const toggleFAQ = (buttonId) => {
    setOpenState((prevState) => ({
      ...prevState,
      [buttonId]: !prevState[buttonId],
    }));
    console.log(buttonId);
  };
  
  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
    
  }
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mx-auto max-w-[40%] pb-20">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <button
          onClick={(e) => setIsOpen(isOpen => !isOpen)}
          className="w-full flex items-center text-left bg-pmfGray py-4 px-5 rounded-lg font-semibold text-secondary cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 bg-gray-200 hover:bg-gray-300 hover:bg-opacity-50 transition-all font-semibold w-full bg-opacity-30 border-transparent px-0 cursor-pointer hover:bg-opacity-50 hover:bg-slate-200 group"
          id="toggleButton1"
        >
          <div className="p-3 mx-3 bg-gray-200 opacity-1 transition-all rounded-xl">
            <svg
              width="19"
              height="19"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.08499 12.9941H15.456M16.275 9.39006C16.275 8.06406 15.22 6.98706 13.92 6.98706C12.619 6.98706 11.565 8.06406 11.565 9.39006V14.7961C11.565 16.7861 11.161 19.0001 9.20999 19.0001H16.275"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M13 1C19.627 1 25 6.373 25 13C25 19.627 19.627 25 13 25M1 4.401V8.401H5"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M23.979 8.167C22.119 3.949 17.907 1 12.999 1C8.094 1 3.882 3.949 2.021 8.167M2.021 17.834C3.881 22.052 8.093 25 13.001 25C17.906 25 22.118 22.05 23.979 17.833"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M13 1C19.627 1 25 6.373 25 13C25 19.627 19.627 25 13 25C6.373 25 1 19.627 1 13"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
          <div className="mx-4">
            <p>100% Money Back Guarantee</p>
            
              <motion.p
                className="overflow-y-hidden text-secondary leading-snug text-opacity-70 font-normal text-[15px] mt-2"
                id="detail-paragraph"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition= {{ delay: 0, duration: 0.3, ease: "easeInOut" }}
              >
                We're certain that we can help you pass fast. You'll get all
                your money back if we can't fast-track your test within 30 days
                of booking or connect you with an instructor in time for your
                course.
              </motion.p>
            
          </div>
        </button>
        <button
         onClick={() => setIsOpen(isOpen => !isOpen)}
          className="w-full flex items-center text-left bg-pmfGray py-4 px-5 rounded-lg  font-semibold text-secondary
     cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1
      hover:bg-pmfLightGreen bg-gray-200 hover:bg-opacity-50 transition-all font-semibold w-full bg-opacity-30 border-transparent
      px-0 cursor-pointer bg-gray-200 hover:bg-gray-300 hover:bg-opacity-50 group "
        >
          <div className="p-3 mx-3 bg-gray-200  opacity-1 transition-all rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width="19"
              height="19"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>{" "}
          </div>
          <div className="mx-4">
            <p>Learn from the best</p>
              <motion.p
              className="overflow-y-hidden text-secondary leading-snug text-opacity-70 font-normal text-[15px] mt-2"
              id="detail-paragraph"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition= {{ delay: 0, duration: 0.3, ease: "easeInOut" }}
            >
                We're certain that we can help you pass fast. You'll get all
                your money back if we can't fast-track your test within 30 days
                of booking or connect you with an instructor in time for your
                course.
              </motion.p>
          </div>
        </button>
        <button
          onClick={() => toggleFAQ("button3")}
          className="w-full flex items-center text-left bg-pmfGray py-4 px-5 rounded-lg  font-semibold text-secondary
     cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1
      hover:bg-pmfLightGreen bg-gray-200 hover:bg-opacity-50 transition-all font-semibold w-full bg-opacity-30 border-transparent
      px-0 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 group "
        >
          <div className="p-3 mx-3 bg-gray-200  opacity-1 transition-all rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width="19"
              height="19"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>{" "}
          </div>
          <div className="mx-4">
            <p>Only £250 Deposit</p>
            {openState["button3"] && (
              <p
                className="text-secondary leading-snug text-opacity-70 font-normal text-[15px] mt-2"
                id="detail-paragraph"
              >
                We're certain that we can help you pass fast. You'll get all
                your money back if we can't fast-track your test within 30 days
                of booking or connect you with an instructor in time for your
                course.
              </p>
            )}
          </div>
        </button>
        <button
          onClick={() => toggleFAQ("button4")}
          className="w-full flex items-center text-left bg-pmfGray py-4 px-5 rounded-lg  font-semibold text-secondary
     cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1
      hover:bg-pmfLightGreen bg-gray-200 hover:bg-opacity-50 transition-all font-semibold w-full bg-opacity-30 border-transparent
      px-0 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 group "
        >
          <div className="p-3 mx-3 bg-gray-200  opacity-1 transition-all rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width="19"
              height="19"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>{" "}
          </div>
          <div className="mx-4">
            <p>Not your average driving course</p>
            {openState["button4"] && (
              <p
                className="text-secondary leading-snug text-opacity-70 font-normal text-[15px] mt-2"
                id="detail-paragraph"
              >
                We're certain that we can help you pass fast. You'll get all
                your money back if we can't fast-track your test within 30 days
                of booking or connect you with an instructor in time for your
                course.
              </p>
            )}
          </div>
        </button>
        <button
          onClick={() => toggleFAQ("button5")}
          className="w-full flex items-center text-left bg-pmfGray py-4 px-5 rounded-lg font-semibold text-secondary
     cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1
      hover:bg-pmfLightGreen bg-gray-200 hover:bg-opacity-50 transition-all font-semibold w-full bg-opacity-30 border-transparent
      px-0 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 group "
        >
          <div className="p-3 mx-3 bg-gray-200  opacity-1 transition-all rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width="19"
              height="19"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>{" "}
          </div>
          <div className="mx-4">
            <p>Flexible payment options</p>
            {openState["button5"] && (
              <p
                className="text-secondary leading-snug text-opacity-70 font-normal text-[15px] mt-2"
                id="detail-paragraph"
              >
                We're certain that we can help you pass fast. You'll get all
                your money back if we can't fast-track your test within 30 days
                of booking or connect you with an instructor in time for your
                course.
              </p>
            )}
          </div>
        </button>
        <button
          onClick={() => toggleFAQ("button6")}
          className="w-full flex items-center text-left bg-pmfGray py-4 px-5 rounded-lg  font-semibold text-secondary
     cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1
      hover:bg-pmfLightGreen bg-gray-200 hover:bg-opacity-50 transition-all font-semibold w-full bg-opacity-30 border-transparent
      px-0 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 group "
        >
          <div className="p-3 mx-3 bg-gray-200  opacity-1 transition-all rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width="19"
              height="19"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>{" "}
          </div>
          <div className="mx-4">
            <p>Support at every step </p>
            {openState["button6"] && (
              <p
                className="text-secondary leading-snug text-opacity-70 font-normal text-[15px] mt-2"
                id="detail-paragraph"
              >
                We're certain that we can help you pass fast. You'll get all
                your money back if we can't fast-track your test within 30 days
                of booking or connect you with an instructor in time for your
                course.
              </p>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
