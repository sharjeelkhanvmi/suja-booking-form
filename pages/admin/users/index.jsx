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
      <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase my-20">
        
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full sm:overflow-auto px-6 ">
          <header className="relative flex items-center justify-between pt-4">
           
          </header>
          <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
            <table role="table" className="w-full" variant="simple" color="gray-500" mb="24px">
              <thead>
                <tr role="row">
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      NAME
                    </div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      Email
                    </div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      Role
                    </div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700" style={{ cursor: "pointer" }}>
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      Mobile
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
