import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-modal";
import { IoEye } from "react-icons/io5";


const Index = () => {
  const [Toggle, setToggle] = useState(false);
  const [viewLead , setViewLead ] = useState(null);
  const [SecondToggle, setSecondToggle] = useState(false);
  const [leadsData, setLeadsData] = useState([]);
  const [selectedLead, setSelectedLead] = useState();
  const [formData, setFormData] = useState({
    step1: {
      postalcode: ""
    },
    step2: {
      gear: "",
      driving: ""
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
        driving: lead.step2.driving
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

  const handleView = (lead) => {
    setViewLead(lead);
    setSecondToggle(true);
  };

  return (
    <Layout>
      <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
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
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                          <input
                            type="checkbox"
                            className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                          checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                            name="weekly"
                          />
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
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
                          {data.user.role}
                        </p>
                      </td>
                      <td
                        role="cell"
                        className=" flex flex-1 pt-[14px] pb-[16px] sm:text-[14px] w-full gap-2 mx-auto"
                      >
                        <span className="text-sm font-bold text-navy-700 dark:text-white">
                          <AiFillDelete
                            className="text-2xl cursor-pointer"
                            onClick={() => {
                              handleDelete(data._id);
                            }}
                          />
                        </span>
                        <span className="text-sm font-bold text-navy-700 dark:text-white">
                          <AiFillEdit
                            className="text-2xl cursor-pointer"
                            onClick={() => handleEdit(data)}
                          />
                        </span>
                        <span className="text-sm font-bold text-navy-700 dark:text-white">
                        <IoEye className="text-2xl cursor-pointer" onClick={()=>{
                          setSecondToggle(true)
                          handleView(data)
                        }}/>
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
          <h2 className="text-center text-5xl my-4 font-bold">Edit Leads</h2>
            <div className="flex justify-center w-full gap-4">
              <div className="flex flex-col w-1/4 mr-3 ">
                <label className="my-2 font-bold">Postal Code</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step1.postalcode}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step1: { postalcode: e.target.value }
                    })}
                />

                <label className="my-2 font-bold">Gear</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step2.gear}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step2: { gear: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Driving</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step2.driving}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step2: { driving: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Addons</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step3.addons}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step3: { addons: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Agree</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step4.agree}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { agree: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Confirm Email</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step4.email}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { email: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Email</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step4.confirm_email}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { confirm_email: e.target.value }
                    })}
                />
              </div>
              <div className="flex flex-col w-1/4">
                <label className="my-2 font-bold">First name</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step4.first_name}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { first_name: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Last Name</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step4.last_name}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { last_name: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Mobile</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step4.mobile_number}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { mobile_number: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Title</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step4.title}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step4: { title: e.target.value }
                    })}
                />
                <label className="my-2 font-bold" >Fast Course</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step5.fastcourse}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step5: { fastcourse: e.target.value }
                    })}
                />
                <label className="my-2 font-bold">Couponcode</label>
                <input
                  className="rounded-md p-1"
                  value={formData.step6.couponcode}
                  type="text"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      step6: { couponcode: e.target.value }
                    })}
                />
              </div>
            </div>
            <div className="text-center flex justify-center w-full mt-4">
              <button className="py-1 px-1 bg-blueSecondary h-10 w-1/4 text-white text font-bold rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <Modal isOpen={SecondToggle} onRequestClose={closeModal} className='mx-auto p-10 bg-gray-50 w-[50%] rounded-3xl flex flex-col'>
        <h1 className="text-center text-4xl font-bold pb-3">View Data</h1>
        {viewLead && (
          <div className="flex justify-center gap-10">
            <div className="pt-[14px] pb-[16px] sm:text-[14px]">
              <p className="font-bold text-center text-xl py-2 text-navy-700 dark:text-white">
                PostalCode: {viewLead.step1.postalcode}
              </p>
              <p className="font-bold text-center text-xl py-2 text-navy-700 dark:text-white">
              Driving: {viewLead.step2.driving}
              </p>
              <p className="font-bold text-center text-xl py-2 text-navy-700 dark:text-white">
                Gear: {viewLead.step2.gear}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
                Addons: {viewLead.step3.addons}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
                Agree: {viewLead.step4.agree}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
              Email: {viewLead.step4.email}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
              Confirm Email: {viewLead.step4.confirm_email}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
              First Name: {viewLead.step4.first_name}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
              Last Name: {viewLead.step4.last_name}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
              Mobile Number: {viewLead.step4.mobile_number}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
              Fast Course: {viewLead.step5.fastcourse}
              </p>
              <p className="text-xl py-2 text-center font-bold text-navy-700 dark:text-white">
              Coupon Code: {viewLead.step6.couponcode}
              </p>
            </div>
          </div>
        )}
      </Modal>
      </div>
    </Layout>
  );
};

export default Index;
