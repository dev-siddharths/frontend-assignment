import React from "react";
import rec from "../assets/REC.png";

const Tagline = () => {
  return (
    <div
      className="flex flex-col justify-center   mb-8"
      style={{
        backgroundImage: `url(${rec})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="flex justify-center items-center">
        <div
          className=" w-max  rounded-2xl px-4 py-2"
          style={{ backgroundColor: "whitesmoke", marginBottom: "5rem" }}
        >
          <span>Find, hire & manage your offshore team seamlessly</span>
        </div>
      </div>

      <div className="flex flex-col lg:items-start items-center justify-center">
        <h2 className="mx-6 font-bold text-4xl mb-5">
          Hire Top Talents Quickly <br />
          with AI & Human Intelligence
        </h2>
        <span className="mx-6  text-base mb-12">
          Uplers is an end to end AI-hiring platform for tech companies to hire{" "}
          <br />
          top engineering & marketing talents from India.
        </span>
        <div
          className="
    flex flex-col sm:flex-row 
    items-center gap-3 
    bg-white mx-6 px-4 py-3 rounded-2xl shadow-sm 
    w-full sm:max-w-lg lg:max-w-2xl
  "
        >
          {/* Location */}
          <button className="flex items-center text-sm text-gray-500 w-full sm:w-auto justify-start sm:justify-center">
            <span className="mr-1">📍</span>
            <span>Location</span>
            <svg className="w-3 h-3 ml-1" viewBox="0 0 20 20">
              <path d="M5 7l5 5 5-5" />
            </svg>
          </button>

          {/* Divider - Show only on sm+ */}
          <span className="hidden sm:block h-5 w-px bg-gray-300"></span>

          {/* Search input */}
          <div className="flex items-center flex-1 text-sm text-gray-500 w-full">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20">
              <path d="M8 3a5 5 0 013.9 8.1L15 14.2" />
            </svg>
            <input
              type="text"
              className="inline-block bg-transparent outline-none flex-1 placeholder:text-gray-400 w-full"
              placeholder="Keywords / Job title or Company"
            />
          </div>

          {/* Buttons */}
          <button className="w-full cursor-pointer sm:w-auto px-4 py-2 rounded-full bg-yellow-400 text-sm font-semibold">
            Find a Job
          </button>
          <button className="w-full cursor-pointer sm:w-auto px-4 py-2 rounded-full bg-black text-white text-sm font-semibold">
            Drop Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tagline;
