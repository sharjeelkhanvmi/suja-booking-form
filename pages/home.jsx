import React from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Dashboard from "./admin/dashboard";

export default function Home() {
  const logout = () => {
    Cookies.remove("token");
    Router.push("/admin");
  };

  return (
    <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
      <p className="text-4xl font-semibold my-10 text-gray-800">
        Welcome to Dashboard 
      </p>
      <Dashboard></Dashboard>
      <button
        onClick={logout}
        className="mt-10 mb-10 bg-white border-2 border-white hover:bg-transparent transition-all text-red-700 hover:text-gray-800  font-semibold text-lg px-4 py-2 rounded duration-700"
      >
        Logout
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
