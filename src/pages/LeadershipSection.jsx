import React from "react";
import reshma from "../assets/reshma 1.png";
import bhuvan from "../assets/bhuvan 1.png";
import mehul from "../assets/mehul 1.png";

const LeadershipSection = () => {
  const cards = [
    {
      name: "Reshma Babanani",
      role: "AD Account Management",
      desc: "Navigating the Complex Landscape of Building Tech Teams in India",
      img: reshma,
    },
    {
      name: "Bhuvan Desai",
      role: "VP of Tech Operations",
      desc: "AI in Hiring: How LLMs Enhance Candidate Screening and Quality",
      img: bhuvan,
    },
    {
      name: "Mehul Patel",
      role: "Head of Engineering",
      desc: "Transforming Talent Acquisition: A Deep Dive Into AI-Powered Job–Talent Matchmaking",
      img: mehul,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold mb-10">
        Building Uplers Hiring Platform:{" "}
        <span className="font-normal">The AI Evolution</span>
      </h2>

      <div className="max-w-7xl mx-auto flex items-center gap-6">
        {/* Left Arrow */}
        <button className="p-3 rounded-full bg-gray-100 shadow hidden md:flex">
          <span className="text-xl">‹</span>
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {cards.map((person, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-[#FFFBEA] border border-yellow-300 shadow-sm"
            >
              {/* Top image */}
              <div className="bg-[#FFD22F] p-6 flex justify-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-40 h-40 object-cover rounded-full"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{person.name}</h3>
                    <p className="text-sm text-gray-600">{person.role}</p>
                  </div>

                  <button className="bg-[#FFDA30] text-black px-3 py-1 text-sm rounded-md shadow">
                    Read more
                  </button>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {person.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="p-3 rounded-full bg-gray-100 shadow hidden md:flex">
          <span className="text-xl">›</span>
        </button>
      </div>
    </section>
  );
};

export default LeadershipSection;
