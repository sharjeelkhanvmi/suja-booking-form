import React from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Layout from "@/app/components/Layout";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <Layout>
      <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
        {/* <p className="text-4xl font-semibold my-10 text-gray-800 dark:text-white">
          Welcome to Admin
        </p> */}
        <Dashboard></Dashboard>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const token = context.req.cookies.token;

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/admin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }
