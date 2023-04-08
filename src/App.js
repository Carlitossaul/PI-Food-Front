import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing.jsx";
import Cards from "./components/cards/Cards.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Cards />} />
      </Routes>
    </>
  );
};

export default App;
