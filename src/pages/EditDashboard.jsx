import React from "react";
import uplers from "../assets/uplers1.png";
const EditDashboard = () => {
  return (
    <div className="min-h-screen bg-[#faf7e8] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#faf7e8] border-r border-gray-200 p-6">
        <img src={uplers} alt="logo" className="mb-8 w-24" />

        <button className="w-full bg-yellow-200 py-2 rounded-lg font-medium mb-3">
          Dashboard
        </button>

        <button className="w-full bg-black text-white py-2 rounded-lg font-medium">
          Edit
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-8">Edit Submission</h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-yellow-100 p-4 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Full Name
                </span>
                <span className="px-5">John Doe</span>

                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Phone
                </span>
                <span className="px-5">85236412</span>

                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Email
                </span>
                <span className="px-5">test@gmail.com</span>

                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Additional Info
                </span>
                <span className="px-5">Lorem ipsum</span>

                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Roles
                </span>
                <span className="px-5">Developer</span>

                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Budget
                </span>
                <span className="px-5">100cr</span>

                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Talents
                </span>
                <span className="px-5">MultiTask</span>

                <span className="font-semibold bg-white px-2 py-1 rounded">
                  Persona
                </span>
                <span className="px-5">Tech Professional</span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-4">
                <button className="bg-black text-white px-4 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-600 text-white px-4 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EditDashboard;
