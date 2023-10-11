import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Dashboard from "./admin/dashboard";
import jwt_decode from "jwt-decode";

export default function Home({ name }) {
  const logout = () => {
    Cookies.remove("token");
    Router.push("/admin");
  };

  return (
    <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
      <p className="text-4xl font-semibold my-10 text-gray-800">
      {name} , Welcome to Dashboard
      </p>
      <Dashboard />
      <button
        onClick={logout}
        className="mt-10 rounded-lg mb-10 bg-red-700  border-2 border-white hover:bg-transparent transition-all text-white hover:text-gray-500 font-semibold text-lg px-4 py-2 duration-700"
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

  const decodedToken = jwt_decode(token);
  const name = decodedToken.name;

  return {
    props: {
      name: name,
    },
  };
}