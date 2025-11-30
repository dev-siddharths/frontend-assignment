import React from "react";

const Reviews = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#0F0E0E",
        color: "white",
      }}
      className="px-15 py-2 m-2  rounded-2xl w-72 h-20 flex flex-col justify-center items-center"
    >
      <span className="font-semibold text-2xl" style={{ color: "#FFDA30" }}>
        {props.text1}
      </span>
      <span className="flex justify-center items-center">
        {props.text2}
        <img src={props.image} className="mx-1" />
      </span>
    </div>
  );
};

export default Reviews;
