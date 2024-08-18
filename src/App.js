import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import Work from "./components/Skills";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contactus from "./components/Contactus";



function App(props) {


  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Contact" element={<Contactus />} />
      </Routes>
    </Router>
    </>



  );
}

export default App;
