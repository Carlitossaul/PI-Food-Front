import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/landing/Landing.jsx";
import Home from "./views/home/Home.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
