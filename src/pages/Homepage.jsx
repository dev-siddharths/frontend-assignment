import React from "react";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import TechLeaders from "../components/TechLeaders";
import Browse from "../components/Browse";
import LeadershipSection from "../components/LeadershipSection";
import EasySteps from "../components/EasySteps";
import Footer from "../components/Footer";
import HireForm from "../components/HireForm";

const Homepage = () => {
  return (
    <>
      <Tagline></Tagline>
      <TechLeaders />
      <Browse></Browse>
      <LeadershipSection></LeadershipSection>
      <EasySteps />
      <HireForm />
      <Footer />
    </>
  );
};

export default Homepage;
