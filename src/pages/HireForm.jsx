import React from "react";

const HireForm = () => {
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
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          <input
            type="text"
            placeholder="Full name*"
            className="w-full p-3 rounded-md outline-none bg-white"
          />

          <input
            type="text"
            placeholder="What are these role(s)?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
          />

          <input
            type="text"
            placeholder="Phone number*"
            className="w-full p-3 rounded-md outline-none  bg-white"
          />

          <input
            type="text"
            placeholder="What's your budget?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
          />

          <input
            type="email"
            placeholder="Work email*"
            className="w-full p-3 rounded-md outline-none  bg-white"
          />

          <input
            type="text"
            placeholder="How many talents are you looking to hire?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
          />

          <input
            type="text"
            placeholder="Any additional information?"
            className="w-full p-3 rounded-md outline-none  bg-white"
          />

          <input
            type="text"
            placeholder="What persona best fits your requirements?*"
            className="w-full p-3 rounded-md outline-none  bg-white"
          />
        </form>

        {/* Submit Button */}
        <button className="mt-10 px-14 py-3 rounded-full bg-white text-black font-medium hover:bg-black hover:text-white transition">
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default HireForm;
