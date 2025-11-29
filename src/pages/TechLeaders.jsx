import React from "react";
import hr from "../assets/hr.png";
import gitlab from "../assets/gitlab.png";
import leadsquare from "../assets/leadsquare.png";
import airbnb from "../assets/airbnb.png";
import ab from "../assets/ab.png";
import Reviews from "../components/Reviews";

const TechLeaders = () => {
  return (
    <>
      <div className="p-6 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center mb-15">
          <span
            className="text-2xl lg:text-3xl font-semibold leading-snug text-center lg:text-left"
            style={{ fontFamily: "Montserrat" }}
          >
            Tech leaders trust <br />
            <span style={{ color: "#FFDA30" }}>uplers</span> to quickly source{" "}
            <br /> qualified talent
          </span>
          {/* Tech Leader  */}
          <div className="flex flex-col flex-1 lg:flex-row  items-center justify-evenly">
            <img
              src={hr}
              alt=""
              style={{ width: "132px", height: "32" }}
              className="m-3"
            />
            <img src={gitlab} alt="" className="m-3 lg:m-0" />
            <img src={leadsquare} alt="" className="m-3 lg:m-0" />
            <img src={ab} alt="" className="m-3 lg:m-0" />
            <img src={airbnb} alt="" className="m-3 lg:m-0" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center justify-evenly">
          <Reviews text1="3 Million+" text2="Talent Network" />
          <Reviews text1="1 Million+" text2="Followers Linked in" />
          <Reviews text1="Clutch 126+" text2="reviews" />
        </div>
      </div>
    </>
  );
};

export default TechLeaders;
