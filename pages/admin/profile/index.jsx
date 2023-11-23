import { columnsDataCheck } from "@/app/components/default/variables/columnsData";

import CheckTable from "@/app/components/default/CheckTable";

import tableDataCheck from "@/app/components/default/variables/tableDataCheck.json";
import Layout from "@/app/components/Layout";

const Index = () => {
  return (
    <Layout>
    <div className="p-2 flex w-2/4 my-5 rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 justify-center text-white bg-black flex-col tracking-widest uppercase">
    <form className=" pb-5">
    <div className="flex flex-wrap mx-3">
    <div className="w-full px-3 pt-5 md:mb-0">
      <label
        className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
        htmlFor="grid-first-name">
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
      />      
    </div>
    <div className="w-full pt-5  px-3">
      <label
        className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
        htmlFor="grid-last-name"
      >
        Last Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder="Doe"
      />
    </div>
  </div>

  <div className="mx-3">
    <div className="w-full px-3 pt-7">
      <label
        className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
        htmlFor="grid-phone">
       Phone
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-phone"
        type="number"
        placeholder="Phone number"
      />
    </div>
    <div className="w-full pt-7 px-3">
      <label
        className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
        htmlFor="grid-password"
      >
        Change Password
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-password"
        type="password"
        placeholder="******************"
      />
    </div>

   
    <button type="submit" class="rounded-full mt-5 py-4  px-10  text-lg uppercase  font-semibold text-white shadow-sm
     bg-red-700 hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Save Profile</button>
  </div>


 


  
 
</form>
     
    {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
    </div>{" "}
    </Layout>
  );
};

export default Index;
