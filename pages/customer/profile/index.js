import { columnsDataCheck } from "@/app/components/default/variables/columnsData";
import CheckTable from "@/app/components/default/CheckTable";
import tableDataCheck from "@/app/components/default/variables/tableDataCheck.json";
import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import decodeToken from "jwt-decode";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from 'yup';
import "react-toastify/dist/ReactToastify.css";
// import bcrypt from "bcryptjs";

const getCharacterValidationError = (type) => `Password must contain at least one ${type}`;

const Index = () => {
  const [profile, setprofile] = useState({
    fname: "",
    lname: "",
    phone: ""
  });

  // new code
  const [password, setPassword] = useState({
    password: "",
    confirm_password: ""
  });
  const [errors, setErrors] = useState({
    password: "",
    confirm_password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleBlur = async () => {
    try {
      await validationSchema.validate(password, { abortEarly: false });
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
        confirm_password: ""
      }));
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...newErrors
      }));
    }
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Please enter a password')
      .min(8, 'Password must have at least 8 characters')
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
    confirm_password: Yup.string()
      .required('Please re-type your password')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
  });

  // new code
  // const [password, setpassword] = useState({
  //   password: "",
  //   confirm_password: ""
  // });
  const cookie = Cookies.get("token");
  let user = false;
  if (cookie) {
    user = decodeToken(cookie);
  }
  // console.log(cookie,"COOKIE");

  const handleUser = async () => {
    try {
      const response = await axios.get(`/api/user`);
      let data = await response.data[0].user;
      setprofile(data);
      //console.log("State Data Handle User Function", data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    handleUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/edit", profile);
      if (response.data.success) {
        toast.success("Profile Updated");
        console.log("User Ediiteed");
      } else {
        toast.error("Failed to update data");
      }
    } catch (error) {
      
    }
  };

  const handlePassword = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user/changepassword", {
        password: password,
        id: user.id
      });
      if (response.data.success) {
        console.log("Password updated successfully");
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
      <div className="p-2 grid lg:grid-cols-2 grid-cols-1 gap-10  my-3 justify-center align-middle text-white bg-black flex-col">
        <form
          className="pb-5 w-1/1  rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap mx-3">
            <div className="w-full px-3 pt-5 md:mb-0">
              <label
                className="block uppercase text-sm tracking-wide text-gray-900 text-black-400 font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={profile.fname}
                onChange={e => {
                  setprofile(prevData => ({
                    ...prevData,
                    fname: e.target.value
                  }));
                }}
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
                value={profile.lname}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                onChange={e => {
                  setprofile(prevData => ({
                    ...prevData,
                    lname: e.target.value
                  }));
                }}
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
              className="rounded-full mt-5 py-3  px-8  text-lg uppercase  font-semibold text-white shadow-sm
     bg-red-700 hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Profile
            </button>
          </div>
        </form>

        {/* PASSWORD */}
        <form
          className="pb-5 w-1/1  rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500"
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
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                id="grid-changepassword"
                type="password"
                placeholder="******************"
                name="password"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
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
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  errors.confirm_password ? 'border-red-500' : ''
                }`}
                id="grid-confirmchangepassword"
                type="password"
                placeholder="******************"
                name="confirm_password"
              />
              {errors.confirm_password && (
                <p className="text-red-500 text-xs">{errors.confirm_password}</p>
              )}
            </div>
            <button
              type="submit"
              className="rounded-full mt-5 py-3  px-8 text-lg uppercase  font-semibold text-white shadow-sm
     bg-red-700 hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Udpate Password
            </button>
          </div>
        </form>
        <ToastContainer className='capitalize'></ToastContainer>
      </div>{" "}
      {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
    </Layout>
  );
};

export default Index;
