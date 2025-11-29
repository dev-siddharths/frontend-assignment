import React from "react";

const Reviews = (props) => {
  return (
    <div className="flex items-center justify-center m-2 lg:m-0">
      <div
        style={{ backgroundColor: "#0F0E0E", color: "white" }}
        className="px-15 py-2 rounded-2xl"
      >
        <span className="text-center">
          <span className="font-semibold text-2xl" style={{ color: "#FFDA30" }}>
            {props.text1}
          </span>
          <br />
          {props.text2}
        </span>
      </div>
    </div>
  );
};

export default Reviews;
