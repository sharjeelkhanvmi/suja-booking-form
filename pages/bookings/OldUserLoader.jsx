import React, { useState, useEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import Cookies from "js-cookie";

const OldUserLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGuestMessageVisible, setIsGuestMessageVisible] = useState(false);

  useEffect(() => {
    // Check if the key exists in local storage
    const isLocalStorageEmpty = !localStorage.hasOwnProperty("formData");

    // Check if the key exists in session storage
    const isSessionStorageEmpty = !sessionStorage.hasOwnProperty("formData");

    // Check if the key exists in cookies
    const isCookieEmpty = Cookies.get("formData") === undefined;

    if (!isLocalStorageEmpty || !isSessionStorageEmpty || !isCookieEmpty) {
      // Simulate loading for an old user
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      // No data found, set loading to false and show guest message
      setIsGuestMessageVisible(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsGuestMessageVisible(false);
      }, 2000);
    }
  }, []);

  if (isLoading && !isGuestMessageVisible) {
    const loadingMessage = (
      <div className="flex items-center justify-center h-screen absolute w-full bg-gray-50 z-10 text-center">
        <div className="p-4 text-center justify-items-center">
          <BiLoaderAlt className="ml-2 animate-spin text-5xl mt-5 m-auto" />
          <p>
            Getting you behind the wheel. Just a few more seconds...
          </p>
        </div>
      </div>
    );
    return loadingMessage;
  }

  // Display a different message for guests
  const guestMessage = (
    <div className={`flex items-center justify-center h-screen ${isGuestMessageVisible ? 'block' : 'hidden'}`}>
      <p>
        Welcome! Redirecting to the main page...
      </p>
    </div>
  );

  return guestMessage;
};

export default OldUserLoader;