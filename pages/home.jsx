import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Dashboard from "./admin/dashboard";
import jwt_decode from "jwt-decode";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";


export default function Home({ name }) {
  const [open, setOpen] = React.useState(true);
  const logout = () => {
    Cookies.remove("token");
    Router.push("/admin");
  };

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    
    // <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">     
    //   <p className="text-4xl font-semibold my-10 text-gray-800">
    //   <span className="text-red-700">{name}</span> , Welcome to Dashboard
    //   </p>
    //   <Dashboard />
    //   <button
    //     onClick={logout}
    //     className="mt-10 rounded-lg mb-10 bg-red-700  border-2 border-white hover:bg-transparent transition-all text-white hover:text-gray-500 font-semibold text-lg px-4 py-2 duration-700"
    //   >
    //     Logout
    //   </button>
    //   <Sitebar/>
    // </div>

    <div className="flex h-full w-full">
    <Sidebar open={open} onClose={() => setOpen(false)} />
    {/* Navbar & Main Content */}
    <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
      {/* Main Content */}
      <main
        className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
      >
        {/* Routes */}
        <div className="h-full">
          <Navbar name={name}
            onOpenSidenav={() => setOpen(true)}
            // logoText={"Horizon UI Tailwind React"}
            // brandText={currentRoute}
            // secondary={getActiveNavbar(routes)}
            // {...rest}
          />
          <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
            {/* <Routes>
              {getRoutes(routes)}
              <Route
                path="/"
                element={<Navigate to="/admin/default" replace />}
              />
            </Routes> */}
            <Dashboard />
          </div>
          
          <div className="p-3">
            {/* <Footer /> */}
          </div>
        </div>
      </main>
    </div>
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