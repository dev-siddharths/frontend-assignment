import React from "react";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const EasySteps = () => {
  const steps = [
    {
      id: 1,
      num: "01",
      icon: step1,
      title: "Tell us what you need",
      desc: "We’ll get in touch with you to understand your requirements and preferences.",
      btn: "Define",
    },
    {
      id: 2,
      num: "02",
      icon: step2,
      title: "Meet the top talent",
      desc: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
      btn: "Discover",
    },
    {
      id: 3,
      num: "03",
      icon: step3,
      title: "Evaluate candidates",
      desc: "Shortlist and evaluate candidates to find the best match.",
      btn: "Evaluate",
    },
    {
      id: 4,
      num: "04",
      icon: step4,
      title: "Onboard",
      desc: "Complete the hiring and onboarding process.",
      btn: "Onboard",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#FFFAEB]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center md:text-left">
          Hire in <span className="font-bold">4 Easy Steps</span>
        </h2>

        <div className="space-y-10">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="
                flex flex-col
                md:grid md:grid-cols-[60px_60px_1fr_120px]
                gap-6
              "
            >
              {/* Step Number + Line */}
              <div className="flex flex-col items-center">
                <span className="text-xl font-light">{step.num}</span>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block w-px h-20 bg-gray-400 mt-2"></div>
                )}
              </div>

              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#FFD22F] flex items-center justify-center shadow">
                  <img src={step.icon} alt="" className="w-6 h-6" />
                </div>
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center md:justify-start items-center">
                <button className="px-4 py-2 min-w-[86px] border border-gray-700 rounded-2xl text-sm">
                  {step.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasySteps;
