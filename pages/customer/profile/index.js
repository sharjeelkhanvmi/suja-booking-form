import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Index = () => {
  const [userProfile, setuserProfile] = useState([]);

  const handleData = async () => {
    try {
      const response = await fetch("/api/user");
      const userResponse = await response.json();
      setuserProfile(userResponse);
      console.log(userResponse, "User response in profile");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Layout>
      <div className="mt-10">
        <table
          role="table"
          className="w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            <tr role="row">
              <th
                colSpan={1}
                role="columnheader"
                className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                style={{ cursor: "pointer" }}
              >
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  NAME
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                style={{ cursor: "pointer" }}
              >
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Email
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                style={{ cursor: "pointer" }}
              >
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Fast Course
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                style={{ cursor: "pointer" }}
              >
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Mobile
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {userProfile &&
              userProfile.map(user => {
                if (user.user.role === "customer") {
                  return (
                    <tr key={user.user._id}>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s] checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                            name="weekly"
                          />
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {user.user.fname}
                          </p>
                        </div>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <div className="flex items-center">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {user.user.email}
                          </p>
                        </div>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {user.user.email}
                        </p>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {user.user.phone}
                        </p>
                      </td>
                    </tr>
                  );
                }
                return null; // Add this to handle other cases
              })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Index;
