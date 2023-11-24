import { columnsDataCheck } from "@/app/components/default/variables/columnsData";
import CheckTable from "@/app/components/default/CheckTable";
import tableDataCheck from "@/app/components/default/variables/tableDataCheck.json";
import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import decodeToken from "jwt-decode";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from 'bcryptjs'

const Index = () => {
  const [profile, setprofile] = useState({
    fname: "",
    lname: "",
    phone: ""
  });
  const [password, setpassword] = useState({
    password: "",
    confirm_password: ""
  });
  const cookie = Cookies.get("token");
  let user = false;
  if (cookie) {
    user = decodeToken(cookie);
  }
  // console.log(cookie);

  const handleUser = async () => {
    const response = await axios.get(`/api/user`);
    let data = await response.data[0].user;
    setprofile(data);
    console.log("State Data", data);
  };
  useEffect(() => {
    handleUser();
    // handlePassword();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/user/edit", profile);
      if (response.data.success) {
        toast.success("Data Updated");
      } else {
        toast.error("Failed to update data");
      }
    } catch (error) {
      console.error('Error updating Data:', error);
      toast.error('Error updating Data');
    }
  };
  
  const handlePassword = async (e) => {
    e.preventDefault()
    console.log(user,'CHECK');
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password.password,salt);
      const response = await axios.post("/api/user/changepassword", { password: hashedPassword,id:user.id});
      if (response.data.success) {
        console.log("PASSWORD UPDATED SUCCESSFULLY");
        toast.success("Password updated successfully");
      } else {
        console.log("Failed to update password");
        toast.error("Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Error updating password");
    }
  };
  
  return (
    <Layout>
    <div className="p-2 grid lg:grid-cols-2 grid-cols-1 gap-10  my-3 justify-center align-middle text-white bg-black flex-col tracking-widest uppercase">
    <form className="pb-5 w-1/1  rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500">
    <div className="flex flex-wrap mx-3">
    <div className="w-full px-3 pt-5 md:mb-0">
      <label
        className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
        htmlFor="grid-first-name">
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
      />      
    </div>
    <div className="w-full pt-5  px-3">
      <label
        className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
        htmlFor="grid-last-name"
      >
        Last Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder="Doe"
      />
    </div>
  </div>

          <div className="mx-3">
            <div className="w-full px-3 pt-7">
              <label
                className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
                htmlFor="grid-phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-phone"
                type="text"
                placeholder="Phone number"
                value={profile.phone}
                onChange={e => {
                  setprofile(prevData => ({
                    ...prevData,
                    phone: e.target.value
                  }));
                }}
              />
            </div>

            <button
              type="submit"
              class="rounded-full mt-5 py-3  px-8  text-lg uppercase  font-semibold text-white shadow-sm
     bg-red-700 hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Profile
            </button>
          </div>
        </form>

    
     
    </div>{" "}
    {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
    
    </Layout>
  );
};

export default Index;
