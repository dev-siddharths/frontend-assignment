import React, { useEffect, useState } from "react";
import uplers from "../assets/uplers1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <div className="min-h-screen bg-[#faf7e8] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-56 bg-[#faf7e8] border-b md:border-r md:border-b-0 border-gray-200 p-6 flex md:block items-center justify-between">
        <img src={uplers} alt="logo" className="w-20 md:w-24 mb-5" />

        <div className="flex md:flex-col gap-3">
          <button
            className="w-32 md:w-full cursor-pointer bg-yellow-200 py-2 rounded-lg font-medium"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

          <button
            className="w-32 md:w-full cursor-pointer text-white bg-black py-2 rounded-lg font-medium"
            onClick={() => navigate("/editdashboard")}
          >
            Edit
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-5 md:p-10">
        <h1 className="text-xl md:text-2xl font-semibold mb-6">Submission</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-yellow-100 p-4 rounded-xl shadow"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Full Name
                  </p>
                  <p className="px-2 break-words min-w-0">{lead.full_name}</p>

                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Phone
                  </p>
                  <p className="px-2 break-words min-w-0">{lead.phone}</p>

                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Email
                  </p>
                  <p className="px-2 break-words min-w-0">{lead.email}</p>

                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Additional Info
                  </p>
                  <p className="px-2 break-words min-w-0">
                    {lead.additional_info}
                  </p>

                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Roles
                  </p>
                  <p className="px-2 break-words min-w-0">{lead.roles}</p>

                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Budget
                  </p>
                  <p className="px-2 break-words min-w-0">{lead.budget}</p>

                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Talents
                  </p>
                  <p className="px-2 break-words min-w-0">{lead.talents}</p>

                  <p className="font-semibold bg-white px-2 py-1 rounded">
                    Persona
                  </p>
                  <p className="px-2 break-words min-w-0">{lead.persona}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
