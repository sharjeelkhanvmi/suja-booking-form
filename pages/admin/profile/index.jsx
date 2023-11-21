<<<<<<< Updated upstream
import { columnsDataCheck } from "@/app/components/default/variables/columnsData";

import CheckTable from "@/app/components/default/CheckTable";

import tableDataCheck from "@/app/components/default/variables/tableDataCheck.json";
import Layout from "@/app/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
        <p className="text-4xl font-semibold my-10 text-gray-800 dark:text-white">
          Profile
        </p>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>{" "}
    </Layout>
=======
import {
    columnsDataCheck,
  } from "@/app/components/default/variables/columnsData";
  import CheckTable from "@/app/components/default/CheckTable";
  import tableDataCheck from "@/app/components/default/variables/tableDataCheck.json";
  import Layout from '@/app/components/Layout'
  
  const Index = () => {
    return (
      <Layout>
    <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
    <p className="text-4xl font-semibold my-10 text-gray-800 dark:text-white"> Profile </p>
  <div className="w-full lg:max-w-[750px]">
  <div className="w-full mb-5 pr-4">
  </div>
  <div className="mt-5 w-full">
    <label
      className="uppercase text-sm  tracking-wide font-medium text-gray-800"
      htmlFor="firstName"
    >
      First Name
    </label>
    <div className="mt-1">
      <div className="relative w-full">
        <input
          name="firstName"
          type="text"
          id="firstName"
          autoComplete="given-name"
          className="w-full rounded-md font-semibold
 text-base placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white
  outline-none focus:ring-2 focus:ring-inset  transition-all "
          defaultValue=""
        />
        <p className="block mt-1 text-opacity-70 text-dust font-semibold text-sm text-red-500">
          First name is required
        </p>
      </div>
    </div>
  </div>
  <div className="mt-5 w-full">
    <label
      className="uppercase text-sm tracking-wide font-medium text-gray-800"
      htmlFor="surname"
    >
      Last Name
    </label>
    <div className="mt-1">
      <div className="relative w-full">
        <input
          name="surname"
          type="text"
          id="surname"
          className="w-full rounded-md font-semibold text-base placeholder:text-dust 
     placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2  
       focus:ring-secondary focus:ring-offset-1 transition-all "
          defaultValue=""
        />
      </div>
    </div>
  </div>
  <div className="mt-5 w-full">
    <label
      className="uppercase text-xs tracking-wide font-medium text-gray-800"
      htmlFor="email"
    >
      Email
    </label>
    <div className="mt-1">
      <div className="relative w-full">
        <input
          name="email"
          type="email"
          id="email"
          className="w-full rounded-md font-semibold text-base placeholder:text-dust
        placeholder:text-opacity-50  px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 
        focus:ring-secondary focus:ring-offset-1  transition-all "
          defaultValue="doejhon@yopmail.com"
        />
      </div>
    </div>
  </div>
  <div className="mt-5 w-full">
    <label
      className="uppercase text-xs tracking-wide font-medium text-gray-800"
      htmlFor="password"
    >
      Password
    </label>
    <div className="mt-1">
      <div className="relative w-full">
        <input
          name="password"
          type="password"
          id="p"
          className="w-full rounded-md font-semibold text-base placeholder:text-dust placeholder:text-opacity-50 
      px-5 py-4 border  border-[#BEBEBE] text-dust bg-white outline-none focus:ring-2 focus:ring-secondary
      focus:ring-offset-1   transition-all "
          defaultValue=""
        />
      </div>
    </div>
  </div>
  <div className="mt-5 w-full">
    <label
      className="uppercase text-xs tracking-wide font-medium text-gray-800"
      htmlFor="confirm_password"
    >
      Confirm Password
    </label>
    <div className="mt-1">
      <div className="relative w-full">
        <input
          name="confirm_password"
          type="password"
          id="p"
          className="w-full rounded-md font-semibold
        text-base placeholder:text-dust placeholder:text-opacity-50    px-5 py-4 border  border-[#BEBEBE]
          text-dust bg-white outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1  
          transition-all "
          defaultValue=""
        />
        <p
          className="block mt-1 text-opacity-70 text-dust font-semibold text-sm
            text-red-500"
        >
          Email is required
        </p>
      </div>
    </div>
  </div>
  <div className="mt-5 w-full">
    <label
      className="uppercase text-xs tracking-wide font-medium text-gray-800"
      htmlFor="phone_number"
    >
      Mobile number
    </label>
    <div className="mt-1">
      <div className="relative w-full">
        <input
          name="phone_number"
          type="text"
          id="phone_number"
          className="w-full rounded-md font-semibold text-base 
                placeholder:text-dust placeholder:text-opacity-50 px-5 py-4 border  border-[#BEBEBE] text-dust
                 bg-white outline-none    focus:ring-2 focus:ring-secondary focus:ring-offset-1 transition-all "
          defaultValue=""
        />
      </div>
    </div>
  </div>
</div>

  </div> 
  
  </Layout> 
>>>>>>> Stashed changes
  );
};

export default Index;
