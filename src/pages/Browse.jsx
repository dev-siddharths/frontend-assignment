import React from "react";
import sde from "../assets/sde.png";
import Card from "../components/Card";
const Browse = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="font-bold text-2xl">
        Browse By Category
      </h1>
      <br />
      <div className="flex justify-center items-center gap-7">
        <Card image={sde} title="Software Engineers"></Card>
        <Card image={sde} title="Meow"></Card>

        <Card image={sde} title="Bhau"></Card>
        <Card image={sde} title="Cucucu"></Card>
      </div>
    </>
  );
};

export default Browse;
