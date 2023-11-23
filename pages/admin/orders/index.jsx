import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-modal";
import { IoEye } from "react-icons/io5";

const Index = () => {
  const [Toggle, setToggle] = useState(false);
  const [viewLead, setViewLead] = useState(null);
  const [SecondToggle, setSecondToggle] = useState(false);
  const [leadsData, setLeadsData] = useState([]);
  const [selectedLead, setSelectedLead] = useState();
  const [formData, setFormData] = useState({
    step1: {
      postalcode: ""
    },
    step2: {
      gear: "",
      driving: "",
      hours: ""
    },
    step3: {
      addons: ""
    },
    step4: {
      title: "",
      first_name: "",
      last_name: "",
      email: "",
      confirm_email: "",
      mobile_number: "",
      agree: ""
    },
    step5: {
      fastcourse: ""
    },
    step6: {
      couponcode: ""
    }
  });

  const handleLeadsData = async () => {
    try {
      const response = await fetch("/api/leads");
      const responseData = await response.json();
      if (responseData && Object.keys(responseData).length > 0) {
        setLeadsData(responseData);
        console.log("Leads Data in Orders", responseData);
      } else {
        console.log("Empty or invalid JSON response");
      }
    } catch (error) {
      console.error(error, "Error While Fetching Leads Data In order");
    }
  };

  useEffect(() => {
    handleLeadsData();
  }, []);

  const handleDelete = async leadId => {
    console.log("Deleting lead with ID:", leadId);
    try {
      const response = await fetch(`/api/leads/del?leadId=${leadId}`, {
        method: "DELETE"
      });
      if (response.ok) {
        handleLeadsData();
      }
    } catch (error) {
      console.error("Error deleting lead", error);
    }
  };

  const handleEdit = lead => {
    setSelectedLead(lead);
    setFormData({
      step1: {
        postalcode: lead.step1.postalcode
      },
      step2: {
        gear: lead.step2.gear,
        driving: lead.step2.driving,
        hours: lead.step2.hours
      },
      step3: {
        addons: lead.step3.addons
      },
      step4: {
        title: lead.step4.title,
        first_name: lead.step4.first_name,
        last_name: lead.step4.last_name,
        email: lead.step4.email,
        confirm_email: lead.step4.confirm_email,
        mobile_number: lead.step4.mobile_number,
        agree: lead.step4.agree
      },
      step5: {
        fastcourse: lead.step5.fastcourse
      },
      step6: {
        couponcode: lead.step6.couponcode
      }
    });
    setToggle(true);
  };

  const handleEditSubmit = async e => {
    e.preventDefault();

    try {
      if (!selectedLead) {
        console.error("No lead selected for editing");
        return;
      }

      const response = await fetch(`/api/leads/edit?id=${selectedLead._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        handleLeadsData();
        closeModal();
        setSelectedLead(null);
        console.log("Lead Updated");
      } else {
        console.error("Error updating lead");
      }
    } catch (error) {
      console.error("Error updating lead", error);
    }
  };

  const closeModal = () => {
    setToggle(false);
    setSecondToggle(false);
  };

  const handleView = lead => {
    setViewLead(lead);
    setSecondToggle(true);
  };

  return (
    <Layout>
      <div className="w-full p-2 my-3 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
        <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full sm:overflow-auto px-6">
          <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
            <table
              role="table"
              className="w-full"
              variant="simple"
              color="gray-500"
              mb="24px"
            >
              <thead>
                <tr role="row">
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="text-sm font-bold tracking-wide text-gray-800">
                      NAME
                    </div>
                  </th>
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
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
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="text-sm font-bold tracking-wide text-gray-800">
                      Coupon code
                    </div>
                  </th>
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
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
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
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
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
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
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="text-sm font-bold tracking-wide text-gray-800">
                      Role
                    </div>
                  </th>
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="text-sm font-bold tracking-wide text-gray-800">
                      Actions
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                {leadsData &&
                  leadsData.map(data =>
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
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            {data.step4.first_name}
                          </p>
                        </div>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <div className="flex items-center">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {data.step4.email}
                          </p>
                        </div>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {data.step6.couponcode}
                        </p>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {data.step4.mobile_number}
                        </p>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {data.step1.postalcode}
                        </p>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {data.step2.hours}
                        </p>
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {data.user.role}
                        </p>
                      </td>
                      <td
                        role="cell"
                        className=" flex flex-1 pt-[14px] pb-[16px] sm:text-[14px] w-full gap-2 mx-auto"
                      >
                        <span className="text-sm font-bold text-red-700 dark:text-white">
                          <AiFillDelete
                            className="text-2xl cursor-pointer"
                            onClick={() => {
                              handleDelete(data._id);
                            }}
                          />
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-white">
                          <AiFillEdit
                            className="text-2xl cursor-pointer"
                            onClick={() => handleEdit(data)}
                          />
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-white">
                          <IoEye
                            className="text-2xl cursor-pointer"
                            onClick={() => {
                              setSecondToggle(true);
                              handleView(data);
                            }}
                          />
                        </span>
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          isOpen={Toggle}
          onRequestClose={closeModal}
          className="mx-auto py-3 bg-gray-50 w-[50%] rounded-3xl"
        >
          <form
            onSubmit={handleEditSubmit}
            className="text-gray-800 w-full mt-2"
          >
            <h2 className="text-center text-4xl text-gray-900 mb-7 font-bold">
              Edit Leads
            </h2>
            <div className="flex justify-center w-full gap-4 px-10">
              <div className="flex flex-col w-1/2 mr-3">
                <label className="mb-1 font-semibold text-gray-900">
                  Postal Code
                </label>
                <input
                  className="block mb-4 w-full p-2 text-xs border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step1.postalcode}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step1: { ...formData.step1, postalcode: e.target.value }
                    })}
                />

                <label className="mb-1 font-semibold text-gray-900">Gear</label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step2.gear}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step2: { ...formData.step2, gear: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Driving
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step2.driving}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step2: { ...formData.step2, driving: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Hours
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step2.hours}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step2: { ...formData.step2, hours: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Addons
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step3.addons}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step3: { ...formData.step3, addons: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Agree
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step4.agree}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { ...formData.step4, agree: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Confirm Email
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step4.email}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { ...formData.step4, email: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Email
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step4.confirm_email}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: {
                        ...formData.step4,
                        confirm_email: e.target.value
                      }
                    })}
                />
              </div>
              <div className="flex flex-col w-1/2 mr-3">
                <label className="mb-1 font-semibold text-gray-900">
                  First name
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step4.first_name}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { ...formData.step4, first_name: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Last Name
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step4.last_name}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { ...formData.step4, last_name: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Mobile
                </label>
                <input
                  className="block mb-4 w-full text-xs p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step4.mobile_number}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: {
                        ...formData.step4,
                        mobile_number: e.target.value
                      }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Title
                </label>
                <input
                  className="block mb-4 text-xs w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step4.title}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { ...formData.step4, title: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Fast Course
                </label>
                <input
                  className="block mb-4 text-xs w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step5.fastcourse}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step5: { ...formData.step5, fastcourse: e.target.value }
                    })}
                />
                <label className="mb-1 font-semibold text-gray-900">
                  Couponcode
                </label>
                <input
                  className="block mb-4 text-xs w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={formData.step6.couponcode}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step6: { ...formData.step6, couponcode: e.target.value }
                    })}
                />
              </div>
            </div>
            <div className="text-center flex justify-center w-full mt-4">
              <button className="bg-theme-red-color hover:bg-red-900  mt-2 hover:text-white rounded-md mb-5 
              px-12 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <Modal
          isOpen={SecondToggle}
          onRequestClose={closeModal}
          className="mx-auto p-10 bg-gray-50 w-[50%] rounded-3xl flex flex-col"
        >
          <h1 className="text-center text-4xl  text-gray-900 font-bold pb-3">
            View Data
          </h1>
          {viewLead &&
            <div className="justify-center gap-10 pb-5 pt-5">
              <div className="lg:w-48 w-full block">
                <p className="font-semibold border-b-2 border-gray-300 text-start text-lg divide-y pb-3 ms-5 text-navy-700 dark:text-white">
                  PostalCode: {viewLead.step1.postalcode} :
                </p>
              </div>
              <div className="grid grid-cols-4 pt-[14px] pb-[16px] px-5">
                <p className="font-regular border-b-2 border-gray-300 text-start text-sm py-5 text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    Driving:
                  </span>{" "}
                  {viewLead.step2.driving}
                </p>
                <p className="font-regular border-b-2 border-gray-300 text-start text-sm py-5 text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    Hours:
                  </span>{" "}
                  {viewLead.step2.hours}
                </p>
                <p className="font-regular border-b-2 border-gray-300 text-start text-sm py-5 text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    {" "}Gear:
                  </span>{" "}
                  {viewLead.step2.gear}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    {" "}Addons:{" "}
                  </span>{" "}
                  {viewLead.step3.addons}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    {" "}Agree:{" "}
                  </span>{" "}
                  {viewLead.step4.agree}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    {" "}Email:{" "}
                  </span>{" "}
                  {viewLead.step4.email}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    {" "}Confirm Email:
                  </span>{" "}
                  {viewLead.step4.confirm_email}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    First Name:{" "}
                  </span>{" "}
                  {viewLead.step4.first_name}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block text-lg pb-1  font-semibold">
                    Last Name:{" "}
                  </span>{" "}
                  {viewLead.step4.last_name}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block pb-1 text-lg font-semibold">
                    Mobile Number:
                  </span>{" "}
                  {viewLead.step4.mobile_number}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block pb-1  text-lg font-semibold">
                    {" "}Fast Course:
                  </span>{" "}
                  {viewLead.step5.fastcourse}
                </p>
                <p className="text-sm py-5 border-b-2 border-gray-300 text-start font-regular text-navy-700 dark:text-white">
                  <span className="block text-lg pb-1 font-semibold">
                    Coupon Code:{" "}
                  </span>{" "}
                  {viewLead.step6.couponcode}
                </p>
              </div>
            </div>}
        </Modal>
      </div>
    </Layout>
  );
};

export default Index;
