import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Doctors from "./Doctors.jsx";
import DoctorDetails from "./DoctorDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
