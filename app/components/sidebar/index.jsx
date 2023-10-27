/* eslint-disable */

import { HiX } from "react-icons/hi";
// import Link from "@/app/components/sidebar/components/Link";
import Link from "next/link";
import Logo from "@/public/assets/favicon-suja.png";
import SidebarCard from "@/app/components/sidebar/componentsrtl/SidebarCard";
// import routes from "@/app/components/sidebar/routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
    className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
      open ? "translate-x-0" : "-translate-x-96"
    }`}
  >
    <span
      className="absolute top-4 right-4 block cursor-pointer xl:hidden"
      onClick={onClose}
    >
      <HiX />
    </span>

    <div className={`mx-[56px] mt-[50px] flex items-center`}>
      <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-red-700 dark:text-white">
        {/* <Logo/> */}
        Suja  <span className="text-navy-700 font-medium">Driving</span>
      </div>
    </div>
    <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
    {/* Nav item */}

    <ul className="mb-auto pt-1">
      {/* <Link routes={routes} /> */}
      <Link href="/admin">
        <div className="relative mb-3 flex hover:cursor-pointer">
          <li className="my-[3px] flex cursor-pointer items-center px-8">
            <span className="font-bold text-brand-500 dark:text-white">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
            </span>
            <p className="leading-1 flex ms-4 font-bold text-navy-700 dark:text-white">Dashboard</p>
          </li>
        <div className="absolute top-px h-9 w-1 rounded-lg bg-brand-500 end-0 dark:bg-brand-400"></div></div>
      </Link>
      <Link href="/admin/orders">
        <div className="relative mb-3 flex hover:cursor-pointer">
          <li className="my-[3px] flex cursor-pointer items-center px-8">
            <span className="font-bold text-brand-500 dark:text-white">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
            </span>
            <p className="leading-1 flex ms-4 font-bold text-navy-700 dark:text-white">Orders</p>
          </li>
        <div className="absolute top-px h-9 w-1 rounded-lg bg-brand-500 end-0 dark:bg-brand-400"></div></div>
      </Link>
        <Link href="/horizon-tailwind-react/admin/nft-marketplace">
          <div className="relative mb-3 flex hover:cursor-pointer">
            <li className="my-[3px] flex cursor-pointer items-center px-8">
              <span className="font-medium text-gray-600">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg> </span><p className="leading-1 flex ms-4 font-medium text-gray-600">NFT Marketplace</p></li></div>
        </Link>
    </ul>

    {/* Free Horizon Card */}
    <div className="flex justify-center">
      <SidebarCard />
    </div>

    {/* Nav item end */}
  </div>
  );
};

export default Sidebar;