import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";

const Index = () => {
  const [leadsData, setLeadsData] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  // console.log(selectedLead._id,'selected LEads');
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

  const handleDelete = async (leadId) => {
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

  const handleEdit = (lead) => {
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
  };

  const handleEditSubmit = async (e) => {
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
        setFormData({
          step1: { postalcode: "" },
          step2: { gear: "", driving: "" },
          step3: { addons: "" },
          step4: {
            title: "",
            first_name: "",
            last_name: "",
            email: "",
            confirm_email: "",
            mobile_number: "",
            agree: ""
          },
          step5: { fastcourse: "" },
          step6: { couponcode: "" }
        });
        setSelectedLead(null);
        console.log("Lead Updated");
      } else {
        console.error("Error updating lead");
      }
    } catch (error) {
      console.error("Error updating lead", error);
    }
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
                  leadsData.map((data) => (
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
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <form onSubmit={handleEditSubmit} className="text-gray-800">
          <label>Postal Code</label>
          <input
            value={formData.step1.postalcode || ""}
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                step1: { postalcode: e.target.value }
              })
            }
          />

          <label>LName</label>
          <input
            value={formData.step2.gear || ""}
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                step2: { gear: e.target.value }
              })
            }
          />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Index;
