// Import necessary libraries and components
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import decodeToken from "jwt-decode";
import Layout from "@/app/components/Layout";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    password: "",
    confirm_password: ""
  });
  const [token, setToken] = useState(null); // State to store the token
  useEffect(() => {
    // Extract the token from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const urlToken = queryParams.get("token");

    // Set the token in the state
    setToken(urlToken);
  }, []);

  const cookie = Cookies.get("token");
  let user = false;

  if (cookie) {
    user = decodeToken(cookie);
  }

  const handlePassword = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("/api/user/resetPass", {
        password: password.password,
        token: token,
        // Add other necessary fields if required
      });
  
      if (response.data.success) {
        console.log("PASSWORD UPDATED SUCCESSFULLY");
         setPassword({ password: "", confirm_password: "" });
      } 

    } catch (error) {
      console.error("Error updating password:", error);
      // toast.error("Error updating password");
    }
  };
  

  return (
    <Layout>
      <form
        className="pb-5 w-1/3 mx-auto p-10 rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500"
        onSubmit={handlePassword}
      >
        <div className="mx-3">
          <div className="w-full pt-7 px-3">
            <label
              className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
              htmlFor="grid-changepassword"
            >
              Change Password
            </label>
            <input
              value={password.password}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-changepassword"
              type="password"
              placeholder="******************"
              onChange={e => {
                setPassword(prevData => ({
                  ...prevData,
                  password: e.target.value
                }));
              }}
            />
          </div>
          <div className="w-full pt-7 px-3">
            <label
              className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
              htmlFor="grid-confirmchangepassword"
            >
              Confirm Change Password
            </label>
            <input
              value={password.confirm_password}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-confirmchangepassword"
              type="password"
              placeholder="******************"
              onChange={e => {
                setPassword(prevData => ({
                  ...prevData,
                  confirm_password: e.target.value
                }));
              }}
            />
          </div>
          <button
            type="submit"
            className="rounded-full mt-5 py-3 px-8 text-lg uppercase font-semibold text-white shadow-sm
              bg-red-700 hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Password
          </button>
          <ToastContainer></ToastContainer>
        </div>
       
      </form>
    </Layout>
  );
};

export default ChangePassword;
