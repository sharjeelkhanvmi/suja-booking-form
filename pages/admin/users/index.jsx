import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
const Index = () => {
  const [usersData,setUsersData]=useState(null);
  const handleUsersData = async () =>{
  try {
    const response = await fetch('http://localhost:3000/api/admin');
    const responseData = await response.json();
    setUsersData(responseData);
    console.log('Users Data in Orders',responseData);
  } catch (error) {
    console.log(error,'Error While Fetching Leads Data In order');
  }
  }
  useEffect(()=>{
    handleUsersData() 
  },[])

  return <Layout>
      <div className="w-full p-2 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase my-3">
        
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full sm:overflow-auto">
          <header className="relative flex items-center justify-between pt-4">
           
          </header>
          <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden px-6">
            <table role="table" className="w-full" variant="simple" color="gray-500" mb="24px">
              <thead>
                <tr role="row bg-gray-300">
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-sm font-bold  tracking-wide text-gray-800">
                      NAME
                    </div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-sm font-bold  tracking-wide text-gray-800">
                      Email
                    </div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-sm font-bold  tracking-wide text-gray-800">
                      Role
                    </div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-sm font-bold  tracking-wide text-gray-800">
                      Mobile
                    </div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-sm font-bold  tracking-wide text-gray-800">
                     Action
                    </div>
                  </th>
                </tr> 
              </thead>
              <tbody role="rowgroup">
              {usersData && usersData.map((data)=>(
                <>
                <tr role="row">
                  <td role="cell" className="pt-[14px] pb-[16px] sm:text-[14px]">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined" name="weekly" />
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {data.user.fname}
                      </p>
                    </div>
                  </td>
                  <td role="cell" className="pt-[14px] pb-[16px] sm:text-[14px]">
                    <div className="flex items-center">
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {data.user.email}
                      </p>
                    </div>
                  </td>
                  <td role="cell" className="pt-[14px] pb-[16px] sm:text-[14px]">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      {data.user.role}
                    </p>
                  </td>
                  <td role="cell" className="pt-[14px] pb-[16px] sm:text-[14px]">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {data.user.phone}
                    </p>
                  </td>

                  <td role="cell" class=" flex flex-1 pt-[14px] pb-[16px] sm:text-[14px] w-full gap-2 mx-auto">
                  <span class="text-sm font-bold text-red-700 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                   viewBox="0 0 1024 1024" class="text-2xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg></span>
                   <span class="text-sm font-bold text-gray-800 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                   viewBox="0 0 1024 1024" class="text-2xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path></svg></span><span class="text-sm font-bold text-gray-800 dark:text-white">
                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-2xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="64"></circle><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path></svg></span></td>
                
                
                </tr>
                </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>;
};

export default Index;
