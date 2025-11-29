import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Dashboard from "./pages/Dashboard";
import EditDashboard from "./pages/EditDashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/editdashboard" element={<EditDashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
