import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import Agents from "../pages/Agents";
import AgentProfile from "../pages/AgentProfile";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/agents/:id" element={<AgentProfile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;