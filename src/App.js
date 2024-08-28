import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Code from "./Components/Code/Code";
import Verify from "./Components/Verify/Verify";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Code" element={<Code />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/DashboardRumanId" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
