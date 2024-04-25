import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-modal";
import { IoEye } from "react-icons/io5";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.min.css";
import moment from "moment";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import axios from "axios";
import { TbRestore } from "react-icons/tb";
import Head from "next/head";

const Index = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const [loading, setLoading] = useState(true);
  const [Toggle, setToggle] = useState(false);
  const [viewLead, setViewLead] = useState(null);
  const [SecondToggle, setSecondToggle] = useState(false);
  const [leadsData, setLeadsData] = useState([]);
  const [selectedLead, setSelectedLead] = useState();
  const [formData, setFormData] = useState({
    step1: {
      postal_code: selectedLead?.step1?.postal_code
    },
    step4: {
      title: selectedLead?.step4?.title,
      firstName: selectedLead?.step4?.firstName,
      surname: selectedLead?.step4?.surname,
      phone_number: selectedLead?.step4?.phone_number
    },
    step6: {
      payment: selectedLead?.step6?.payment,
      amount: selectedLead?.step6?.amount
    }
  });

  const handleLeadsData = async () => {
    try {
      const response = await fetch("/api/leads/deletedOrders");
      const responseData = await response.json();
      setLoading(true);
      setLeadsData(responseData);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error, "Error While Fetching Leads Data In order");
      setLoading(false);
    }
  };

  const handleDelete = async (leadId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this lead!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
        const response = await fetch(`/api/leads/del?leadId=${leadId}`, {
          method: "DELETE"
        });

        if (response.ok) {
          toast.success("Lead deleted successfully!");
          handleLeadsData();
        } else {
          toast.error("Error deleting lead. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error deleting lead", error);
      toast.error("Error deleting lead. Please try again.");
    }
  };

  const handleDeleteAll = async () => {
    try {
      setLoading(true);
      const result = await axios.delete("/api/leads/deleteAll");
      if (result.status === 200) {
        console.log("All Data Deleted");
        await handleLeadsData();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLeadsData();
  }, []);

  const handleRestore = async (leadId) => {
    try {
      setLoading(true);
      const result = await axios.post(`/api/leads/softDelete?leadId=${leadId}`);
      if (result.status === 200) {
        console.log("leads Restore");
        await handleLeadsData();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Trash</title>
        </Head>
      </div>
      <div className="relative top-5 right-0 text-end me-4">
        <button
          onClick={handleDeleteAll}
          className="text-red-600 mb-10 border-gray-300 border-[2px] py-2 px-3 rounded-lg font-semibold"
        >
          Empty Trash
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen relative bottom-24">
          <PropagateLoader
            css={override}
            size={15}
            color={"#B91C1C"}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <div className="w-full p-2 my-3  flex items-center justify-center text-white bg-black flex-col">
            <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full h-full sm:overflow-auto">
              <div className="overflow-x-scroll xl:overflow-x-hidden p-10">
                <table
                  role="table"
                  className="w-full table-auto"
                  variant="simple"
                  color="gray-500"
                  mb="24px"
                >
                  <thead>
                    <tr role="row bg-gray-500">
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200  pb-5 text-start "
                        style={{ cursor: "pointer" }}
                      >
                        <div className="text-sm font-bold tracking-wide text-gray-800">
                          Name
                        </div>
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200  pb-5 text-start "
                        style={{ cursor: "pointer" }}
                      >
                        <div className="text-sm font-bold tracking-wide text-gray-800">
                          Email
                        </div>
                      </th>

                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200  pb-5 text-start "
                        style={{ cursor: "pointer" }}
                      >
                        <div className="text-sm font-bold tracking-wide text-gray-800">
                          Mobile
                        </div>
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200  pb-5 text-start"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="text-sm font-bold tracking-wide text-gray-800">
                          Postal Code
                        </div>
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200  pb-5 text-start "
                        style={{ cursor: "pointer" }}
                      >
                        <div className="text-sm font-bold tracking-wide text-gray-800">
                          Hours
                        </div>
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200  pb-5 text-start "
                        style={{ cursor: "pointer" }}
                      >
                        <div className="text-sm font-bold tracking-wide text-gray-800">
                          Date / Time
                        </div>
                      </th>

                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200  pb-5 text-start"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="text-end text-sm font-bold  text-gray-800">
                          Actions
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody role="rowgroup">
                    {leadsData.length > 0 ? (
                      leadsData.map((data) => (
                        <tr key={data._id}>
                          <td
                            role="cell"
                            className="pt-[14px] pb-[16px] sm:text-[14px]"
                          >
                            <div className="flex items-center gap-2">
                              {/* <input
                            type="checkbox"
                            className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                          checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                            name="weekly"
                          /> */}
                              <p className="text-sm font-bold text-gray-900 ">
                                {data.step4.firstName}
                              </p>
                            </div>
                          </td>
                          <td
                            role="cell"
                            className="pt-[14px] pb-[16px] sm:text-[14px] w-[18%]"
                          >
                            <div className="flex items-center">
                              <p className="text-sm font-bold text-navy-700 ">
                                {data.step4.email}
                              </p>
                            </div>
                          </td>
                          {/* <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {data.step6.couponcode}
                        </p>
                      </td> */}
                          <td
                            role="cell"
                            className="pt-[14px] pb-[16px] sm:text-[14px]"
                          >
                            <p className="text-sm font-bold text-navy-700 ">
                              {data.step4.phone_number}
                            </p>
                          </td>
                          <td
                            role="cell"
                            className="pt-[14px] pb-[16px] sm:text-[14px] "
                          >
                            <p className="text-sm font-bold text-navy-700 ">
                              {data.step1.postal_code}
                            </p>
                          </td>
                          <td
                            role="cell"
                            className="pt-[14px] pb-[16px] sm:text-[14px] w-[18%]"
                          >
                            <p className="text-sm font-bold text-navy-700 e">
                              <div className="flex gap-2">
                                {Object.keys(data.step2.dr_course_price).map(
                                  (courseKey, index) => (
                                    <div key={index}>
                                      {
                                        data.step2.dr_course_price[courseKey]
                                          .value
                                      }
                                    </div>
                                  )
                                )}
                                <div>/ {data.step5.intensiveCourse}</div>
                              </div>
                            </p>
                          </td>
                          <td
                            role="cell"
                            className="pt-[14px] pb-[16px] sm:text-[14px] w-[14%]"
                          >
                            <p className="text-sm font-bold text-navy-700 ">
                              {moment(data.createdAt).format(
                                "YYYY-MM-DD HH:mm:ss A"
                              )}
                              {console.log("DATE>>>>>>>", data.createdAt)}
                            </p>
                          </td>
                          <td
                            role="cell"
                            className="flex flex-1 justify-end pt-[14px] pb-[16px] sm:text-[14px] w-full gap-2 mx-auto"
                          >
                            <span className="text-sm font-bold text-red-700 ">
                              <AiFillDelete
                                className="text-2xl cursor-pointer"
                                onClick={() => {
                                  handleDelete(data._id, 0);
                                }}
                              />
                            </span>
                            <span className="text-sm font-bold text-red-700 ">
                              <TbRestore
                                className="text-2xl cursor-pointer"
                                onClick={() => {
                                  handleRestore(data._id);
                                }}
                              />
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <h1 className="text-xl text-gray-800 mt-3">No Data</h1>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ToastContainer position="bottom-right" autoClose={2000} />
        </>
      )}
    </Layout>
  );
};

export default Index;
