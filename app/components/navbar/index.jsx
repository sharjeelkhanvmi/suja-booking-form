import React, { useState, useEffect } from "react";
import Dropdown from "@/app/components/dropdown";
import Cookies from "js-cookie";
import Router from "next/router";
import { FiAlignJustify } from "react-icons/fi";
// import { Link } from "react-router-dom";
import navbarimage from "@/public/assets/favicon-suja.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "@/public/assets/favicon-suja.png";
import Link from "next/link";
import jwt_decode from "jwt-decode";

const Navbar = (props) => {
  const { name, user } = props;
  const logout = () => {
    Cookies.remove("token");
    Router.push("/admin");
  };

  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);
  const pathSegments = Router.pathname.split("/");
  const lastPath = pathSegments[pathSegments.length - 1];

  let cookie = Cookies.get("token");
  let userData;
  let userRole = null;
  if (cookie) {
    userData = jwt_decode(cookie);
    userRole = userData.role;
  }

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          {user.role == "admin" || "customer" ? (
            <a
              className="pointer-events-none text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
              href="/"
            >
              Dashboard{" /"}
              <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white capitalize">
                {lastPath}
              </span>
            </a>
          ) : (
            ""
          )}
          <Link
            className="pointer-events-none text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href="/"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            href="/"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white pointer-events-none"
          >
            {userRole === "admin"
              ? lastPath === "admin"
                ? "Dashboard"
                : lastPath
              : userRole === "customer"
              ? lastPath === "customer"
                ? "Dashboard"
                : lastPath
              : null}
          </Link>
        </p>
      </div>
    </nav>
  );
};

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
}

export default Navbar;
