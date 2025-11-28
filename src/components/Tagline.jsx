import React from "react";
import bgimg from "../assets/Vector 1.png";

const Tagline = () => {
  return (
    <div
      className="flex flex-col justify-center mb-8"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="flex justify-center items-center">
        <div
          className=" w-max  rounded-2xl px-4 py-2"
          style={{ backgroundColor: "whitesmoke", marginBottom: "5rem" }}
        >
          <span>Find, hire & manage your offshore team seamlessly</span>
        </div>
      </div>

      <h2 className="mx-6 font-bold text-4xl mb-5">
        Hire Top Talents Quickly <br />
        with AI & Human Intelligence
      </h2>
      <span className="mx-6  text-base mb-12">
        Uplers is an end to end AI-hiring platform for tech companies to hire{" "}
        <br />
        top engineering & marketing talents from India.
      </span>
      <div className="flex items-center gap-3 bg-white mx-6 px-4 py-2 rounded-full shadow-sm max-w-180 min-w-150">
        {/* <!-- location --> */}
        <button className="flex items-center text-sm text-gray-500">
          <span className="mr-1">📍</span>
          <span>Location</span>
          <svg className="w-3 h-3 ml-1" viewBox="0 0 20 20">
            <path d="M5 7l5 5 5-5" />
          </svg>
        </button>

        {/* <!-- divider --> */}
        <span className="h-5 w-px bg-gray-300"></span>

        {/* <!-- search input --> */}
        <div className="flex items-center flex-1 text-sm text-gray-500">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20">
            <path d="M8 3a5 5 0 013.9 8.1L15 14.2" />
          </svg>
          <input
            type="text"
            className="inline-block bg-transparent outline-none flex-1 placeholder:text-gray-400"
            placeholder="Keywords / Job title or Company"
          />
        </div>

        {/* <!-- buttons --> */}
        <button className="px-4 py-2 rounded-full bg-yellow-400 text-sm font-semibold">
          Find a Job
        </button>
        <button className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold">
          Drop Resume
        </button>
      </div>
    </div>
  );
};

export default Tagline;
