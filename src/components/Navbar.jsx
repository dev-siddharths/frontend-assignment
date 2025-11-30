import React, { useState } from "react";
import uplers from "../assets/uplers1.png";
import bgimg from "../assets/Vector 1.png";
import rec from "../assets/REC.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Page",
    "For Companies",
    "For Talent",
    "Ai Recruitment",
    "Blogs",
    "Pricing",
  ];

  return (
    <nav
      className="w-full bg-cover bg-center px-6 py-4"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={uplers} alt="Logo" className="w-28" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-red-500 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-yellow-300 cursor-pointer px-4 py-2 rounded-3xl hover:bg-yellow-400">
            Hire Talent
          </button>
          <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-3xl hover:bg-gray-900">
            Find a Job
          </button>
        </div>

        {/* Mobile Hamburger (visible BELOW lg) */}
        <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-4 space-y-4">
          <ul className="space-y-3 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-red-500 transition"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3 mt-3">
            <button className="bg-yellow-300 px-4 py-2 rounded-3xl hover:bg-yellow-400">
              Hire Talent
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-900">
              Find a Job
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
