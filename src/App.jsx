import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Browse from "./pages/Browse";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage></Homepage>
      <Browse></Browse>
    </>
  );
}

export default App;
