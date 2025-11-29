import React from "react";
import sde from "../assets/sde.png";

const Card = (props) => {
  return (
    <>
      <div
        className="flex flex-col rounded-2xl justify-center items-center px-5 py-3 mx-6 max-w-2xl"
        style={{ border: "1px solid red", backgroundColor: `${props.color}` }}
      >
        <img src={props.image} alt="" className="w-15" />
        <small className="font-semibold">{props.title}</small>
      </div>
    </>
  );
};

export default Card;
