import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/landing/Landing.jsx";
import Home from "./views/home/Home.jsx";
import CreateRecipe from "./views/createRecipe/CreateRecipe.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<CreateRecipe />} />
      </Routes>
    </>
  );
};

export default App;
