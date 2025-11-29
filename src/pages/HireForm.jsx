import React, { useState } from "react";
import axios from "axios";

const HireForm = () => {
  const [loading, setLoading] = useState(false);
  const [fullname, setfullname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [roles, setroles] = useState("");
  const [budget, setbudget] = useState("");
  const [email, setemail] = useState("");
  const [talents, settalents] = useState("");
  const [additionalinfo, setadditionalinfo] = useState("");
  const [persona, setpersona] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://692ae9357615a15ff24e1108.mockapi.io/leads",
        {
          full_name: fullname,
          phone: phonenumber,
          roles: roles,
          budget: budget,
          email: email,
          talents: talents,
          additional_info: additionalinfo,
          persona: persona,
        }
      );
      alert("Form Submission Successfull");
      setfullname("");
      setphonenumber("");
      setroles("");
      setbudget("");
      setemail("");
      settalents("");
      setadditionalinfo("");
      setpersona("");
    } catch (error) {
      console.log(error);
      alert("Sever Down, kindly revisit later!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-[#FFD42F] py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-semibold">
          Hire Talents from India Without Compromise
        </h2>
        <p className="text-sm text-black/80 mt-2">
          India isn’t just about cost savings anymore. It’s where top talents
          power the world’s top tech companies.
        </p>

        {/* Form */}
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Full name*"
            className="w-full p-3 rounded-md outline-none bg-white"
            onChange={(e) => {
              setfullname(e.target.value);
            }}
            value={fullname}
            required
          />

          <input
            type="text"
            placeholder="What are these role(s)?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
            onChange={(e) => {
              setroles(e.target.value);
            }}
            value={roles}
            required
          />

          <input
            type="text"
            placeholder="Phone number*"
            className="w-full p-3 rounded-md outline-none  bg-white"
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
            value={phonenumber}
            required
          />

          <input
            type="text"
            placeholder="What's your budget?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
            onChange={(e) => {
              setbudget(e.target.value);
            }}
            value={budget}
            required
          />

          <input
            type="email"
            placeholder="Work email*"
            className="w-full p-3 rounded-md outline-none  bg-white"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
            required
          />

          <input
            type="text"
            placeholder="How many talents are you looking to hire?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
            onChange={(e) => {
              settalents(e.target.value);
            }}
            value={talents}
            required
          />

          <input
            type="text"
            placeholder="Any additional information?"
            className="w-full p-3 rounded-md outline-none  bg-white"
            onChange={(e) => {
              setadditionalinfo(e.target.value);
            }}
            value={additionalinfo}
          />

          <input
            type="text"
            placeholder="What persona best fits your requirements?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
            onChange={(e) => {
              setpersona(e.target.value);
            }}
            value={persona}
            required
          />
          <div className="sm:col-span-2 flex justify-center mt-10">
            <input
              type="submit"
              value="Submit"
              className="px-14 py-3 rounded-full bg-white text-black font-medium hover:bg-black hover:text-white transition cursor-pointer"
            />
          </div>
        </form>

        {loading && (
          <div className="flex justify-center items-center mt-4">
            <div className="w-10 h-10 border-4 border-white border-b-black rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HireForm;
