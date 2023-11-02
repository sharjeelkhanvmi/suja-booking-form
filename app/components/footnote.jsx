import React from "react";
import { useRouter } from "next/router";

const Footnote = () => {
  const router = useRouter();

  return (
    <div className={`my-4 w-full text-sm font-semibold opacity-60 text-center ${router.pathname !== "/bookings" ? "lg:w-[calc(100vw-360px)]" : ""}`}>
      Copyright © {/* */}2023{/* */} by Suja Driving School
    </div>
  );
};

export default Footnote;