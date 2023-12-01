import React from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Layout from "@/app/components/Layout";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <Layout>
      <div className="p-5 grid grid-cols-2 text-white bg-black flex-col tracking-widest capitalize">
        {/* <p className="text-4xl font-semibold my-10 text-gray-800 dark:text-white">
          Welcome to Admin
        </p> */}
        <Dashboard></Dashboard>
      </div>
    </Layout>
  );
}

