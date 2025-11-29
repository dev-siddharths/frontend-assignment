import React, { useEffect, useState } from "react";
import uplers from "../assets/uplers1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch data from MockAPI
  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await axios.get(
          "https://692ae9357615a15ff24e1108.mockapi.io/leads"
        );
        setLeads(response.data); // save data to state
      } catch (error) {
        console.log("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7e8] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#faf7e8] border-r border-gray-200 p-6">
        <img src={uplers} alt="logo" className="mb-8 w-24" />
        <button
          className="w-full cursor-pointer bg-yellow-200 py-2 rounded-lg font-medium m-2"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          className="w-full cursor-pointer text-white bg-black py-2 rounded-lg font-medium m-2"
          onClick={() => {
            navigate("/editdashboard");
          }}
        >
          Edit
        </button>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-8">Submission</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-yellow-100 p-4 rounded-xl shadow"
              >
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Full Name
                  </span>
                  <span className="px-5">{lead.full_name}</span>

                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Phone
                  </span>
                  <span className="px-5">{lead.phone}</span>

                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Email
                  </span>
                  <span className="px-5">{lead.email}</span>

                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Additional Info
                  </span>
                  <span className="px-5">{lead.additional_info}</span>

                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Roles
                  </span>
                  <span className="px-5">{lead.roles}</span>

                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Budget
                  </span>
                  <span className="px-5">{lead.budget}</span>

                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Talents
                  </span>
                  <span className="px-5">{lead.talents}</span>

                  <span className="font-semibold bg-white px-2 py-1 rounded">
                    Persona
                  </span>
                  <span className="px-5">{lead.persona}</span>
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
