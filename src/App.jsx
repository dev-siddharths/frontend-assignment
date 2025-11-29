import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Browse from "./pages/Browse";
import TechLeaders from "./pages/TechLeaders";
import LeadershipSection from "./pages/LeadershipSection";
import EasySteps from "./pages/EasySteps";
import HireForm from "./pages/HireForm";
import Footer from "./pages/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage></Homepage>
      <TechLeaders></TechLeaders>
      <Browse></Browse>
      <LeadershipSection />
      <EasySteps />
      <HireForm />
      <Footer />
    </>
  );
}

export default App;
