import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/landing/Landing.jsx";
import Home from "./views/home/Home.jsx";
import CreateRecipe from "./views/createRecipe/CreateRecipe.jsx";
import Detail from "./views/detail/Detail.jsx";
import About from "./views/about/About.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";
//
// este es el que voy a deployar

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<CreateRecipe />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
