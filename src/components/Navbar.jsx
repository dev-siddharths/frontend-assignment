import React from "react";
import uplers from "../assets/uplers.png";
import bgimg from "../assets/Vector 1.png";
import rec from "../assets/REC.png";
const Navbar = () => {
  return (
    <div
      className="flex items-center px-4 py-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Logo */}
      <img src={uplers} alt="Logo" style={{ maxWidth: "7rem" }} />

      {/* Menu */}
      <ul className="flex flex-1 justify-center items-center space-x-6">
        <li className="p-2 cursor-pointer hover:text-yellow-100 font-medium">
          Page
        </li>
        <li className="p-2 cursor-pointer hover:text-yellow-100 font-medium">
          For Companies
        </li>
        <li className="p-2 cursor-pointer hover:text-yellow-100 font-medium">
          For Talent
        </li>
        <li className="p-2 cursor-pointer hover:text-yellow-100 font-medium">
          Ai Recruitment
        </li>
        <li className="p-2 cursor-pointer hover:text-yellow-100 font-medium">
          Blogs
        </li>
        <li className="p-2 cursor-pointer hover:text-yellow-100 font-medium">
          Pricing
        </li>
      </ul>

      {/* Buttons */}
      <div
        className="flex space-x-4"
        style={{ backgroundImage: `url(${rec})` }}
      >
        <button className="bg-yellow-300 px-4 py-2 rounded-3xl hover:bg-yellow-400">
          Hire Talent
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-900">
          Find a Job
        </button>
      </div>
    </div>
  );
};

export default Navbar;
