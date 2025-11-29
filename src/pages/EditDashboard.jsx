import React, { useState, useEffect } from "react";
import uplers from "../assets/uplers1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); // track which card is being edited
  const navigate = useNavigate();
  // Fetch data from MockAPI
  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await axios.get(
          "https://692ae9357615a15ff24e1108.mockapi.io/leads"
        );
        setLeads(response.data);
      } catch (error) {
        console.log("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  // Handle input changes
  const handleChange = (id, field, value) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, [field]: value } : lead
      )
    );
  };

  // Save updated lead
  const handleSave = async (id) => {
    const lead = leads.find((l) => l.id === id);
    try {
      await axios.put(
        `https://692ae9357615a15ff24e1108.mockapi.io/leads/${id}`,
        lead
      );
      alert("Updated successfully!");
      setEditingId(null); // exit edit mode
    } catch (error) {
      console.log(error);
      alert("Update failed!");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7e8] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#faf7e8] border-r border-gray-200 p-6">
        <img src={uplers} alt="logo" className="mb-8 w-24" />
        <button
          className="w-full cursor-pointer bg-yellow-200 py-2 rounded-lg font-medium mb-3"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          className="w-full cursor-pointer bg-black text-white py-2 rounded-lg font-medium"
          onClick={() => {
            navigate("/editdashboard");
          }}
        >
          Edit
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-8">Edit Submission</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map((lead) => {
              const isEditing = editingId === lead.id;
              return (
                <div
                  key={lead.id}
                  className="bg-yellow-100 p-4 rounded-xl shadow-md flex flex-col justify-between"
                >
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    {/* Full Name */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Full Name
                    </span>
                    <input
                      type="text"
                      className="px-2 py-1 rounded w-full"
                      value={lead.full_name}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "full_name", e.target.value)
                      }
                    />

                    {/* Phone */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Phone
                    </span>
                    <input
                      type="text"
                      className="px-2 py-1 rounded w-full"
                      value={lead.phone}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "phone", e.target.value)
                      }
                    />

                    {/* Email */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Email
                    </span>
                    <input
                      type="email"
                      className="px-2 py-1 rounded w-full"
                      value={lead.email}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "email", e.target.value)
                      }
                    />

                    {/* Additional Info */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Additional Info
                    </span>
                    <input
                      type="text"
                      className="px-2 py-1 rounded w-full"
                      value={lead.additional_info}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "additional_info", e.target.value)
                      }
                    />

                    {/* Roles */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Roles
                    </span>
                    <input
                      type="text"
                      className="px-2 py-1 rounded w-full"
                      value={lead.roles}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "roles", e.target.value)
                      }
                    />

                    {/* Budget */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Budget
                    </span>
                    <input
                      type="text"
                      className="px-2 py-1 rounded w-full"
                      value={lead.budget}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "budget", e.target.value)
                      }
                    />

                    {/* Talents */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Talents
                    </span>
                    <input
                      type="text"
                      className="px-2 py-1 rounded w-full"
                      value={lead.talents}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "talents", e.target.value)
                      }
                    />

                    {/* Persona */}
                    <span className="font-semibold bg-white px-2 py-1 rounded">
                      Persona
                    </span>
                    <input
                      type="text"
                      className="px-2 py-1 rounded w-full"
                      value={lead.persona}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleChange(lead.id, "persona", e.target.value)
                      }
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between mt-4">
                    {isEditing ? (
                      <button
                        className="bg-green-600 text-white px-4 py-1 rounded"
                        onClick={() => handleSave(lead.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="bg-black text-white px-4 py-1 rounded"
                        onClick={() => setEditingId(lead.id)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="bg-red-600 text-white px-4 py-1 rounded"
                      onClick={async () => {
                        await axios.delete(
                          `https://692ae9357615a15ff24e1108.mockapi.io/leads/${lead.id}`
                        );
                        setLeads((prev) =>
                          prev.filter((l) => l.id !== lead.id)
                        );
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default EditDashboard;
