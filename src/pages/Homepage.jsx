import React from "react";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import TechLeaders from "../pages/TechLeaders";
import Browse from "../pages/Browse";
import LeadershipSection from "../pages/LeadershipSection";
import EasySteps from "../pages/EasySteps";
import Footer from "../pages/Footer";
import HireForm from "../pages/HireForm";

const Homepage = () => {
  return (
    <>
      <Navbar></Navbar>
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
