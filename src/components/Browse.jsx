import React from "react";
import sde from "../assets/sde.png";
import mlE from "../assets/mlE.png";
import devops from "../assets/devops.png";
import dataE from "../assets/dataE.png";
import Card from "./Card";
import sa from "../assets/sarchitect.png";

const Browse = () => {
  return (
    <>
      <br />
      <div style={{ backgroundColor: "#FFFCF0" }} className="p-10">
        <h1 style={{ textAlign: "center" }} className="font-bold text-2xl mb-5">
          Browse By Category
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-7 mb-10">
          <Card image={sde} title="Software Engineers" color="#FFE67B"></Card>
          <Card image={dataE} title="Data Engineers" color="white"></Card>

          <Card image={mlE} title="ML Engineers" color="white"></Card>
          <Card image={devops} title="Dev Ops" color="white"></Card>
          <Card image={sa} title="Solutions Architect" color="white"></Card>
        </div>
        <div className="flex justify-center items-center">
          <button className="px-6 py-2 rounded-full bg-yellow-400 text-lg font-semibold">
            Browse More
          </button>
        </div>
      </div>
    </>
  );
};

export default Browse;
