
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Navbar />
      <ScrollToTop />

      <div className="page-transition ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
