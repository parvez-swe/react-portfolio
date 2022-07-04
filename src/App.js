import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="contact" element={<Contact />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
