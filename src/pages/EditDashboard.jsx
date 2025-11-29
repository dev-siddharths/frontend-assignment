import React, { useState, useEffect } from "react";
import uplers from "../assets/uplers1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await axios.get(API_URL);
        setLeads(response.data);
      } catch (error) {
        console.log("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  const handleChange = (id, field, value) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, [field]: value } : lead
      )
    );
  };

  const handleSave = async (id) => {
    const lead = leads.find((l) => l.id === id);
    try {
      await axios.put(`${API_URL}/${id}`, lead);
      alert("Updated successfully!");
      setEditingId(null);
    } catch (error) {
      console.log(error);
      alert("Update failed!");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7e8] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-56 bg-[#faf7e8] border-b md:border-r border-gray-300 p-6 flex md:block items-center justify-between">
        <img src={uplers} alt="logo" className="w-20 md:w-24 mb-5" />

        <div className="flex md:flex-col gap-3">
          <button
            className="w-32 md:w-full cursor-pointer bg-yellow-200 py-2 rounded-lg font-medium"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

          <button
            className="w-32 md:w-full cursor-pointer bg-black text-white py-2 rounded-lg font-medium"
            onClick={() => navigate("/editdashboard")}
          >
            Edit
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-5 md:p-10">
        <h1 className="text-xl md:text-2xl font-semibold mb-6">
          Edit Submission
        </h1>

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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {/* FIELD TEMPLATE */}
                    {[
                      ["Full Name", "full_name"],
                      ["Phone", "phone"],
                      ["Email", "email"],
                      ["Additional Info", "additional_info"],
                      ["Roles", "roles"],
                      ["Budget", "budget"],
                      ["Talents", "talents"],
                      ["Persona", "persona"],
                    ].map(([label, field]) => (
                      <React.Fragment key={field}>
                        <span className="font-semibold bg-white px-2 py-1 rounded">
                          {label}
                        </span>
                        <input
                          type="text"
                          className="px-2 py-1 rounded w-full border border-gray-300 disabled:bg-gray-200"
                          value={lead[field]}
                          disabled={!isEditing}
                          onChange={(e) =>
                            handleChange(lead.id, field, e.target.value)
                          }
                        />
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Buttons */}
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
                        await axios.delete(`${API_URL}/${lead.id}`);
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
