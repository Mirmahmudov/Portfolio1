import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";

import About from "./pages/home/Home";

import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Service from "./pages/service/Service";

import Navbar from "./components/navbar/Navbar";
import Footer from "./pages/home/Home";             

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;