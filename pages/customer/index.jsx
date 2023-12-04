import React from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Dashboard from "../admin/dashboard";
import Layout from "@/app/components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="w-full p-2 flex justify-center text-white bg-black flex-col tracking-widest uppercase">
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
