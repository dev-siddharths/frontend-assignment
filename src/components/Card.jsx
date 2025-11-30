import React from "react";
import sde from "../assets/sde.png";

const Card = (props) => {
  return (
    <>
      <div
        className="flex flex-col rounded-2xl justify-center items-center px-5 py-3 mx-6 w-40"
        style={{ backgroundColor: `${props.color}` }}
      >
        <img src={props.image} alt="" className="w-16" />
        <small className="font-semibold text-center">{props.title}</small>
      </div>
    </>
  );
};

export default Card;
