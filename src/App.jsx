import React, { useState } from "react";
import Header from "./Compontes/Header";
import Hero from "./Compontes/Hero";
import "./App.css";
import About from "./Compontes/About";
import Projects from "./Compontes/Projects";
import Skills from "./Compontes/Skills";
import Contact from "./Compontes/Contact";
const App = () => {
  return (
    <>
      <div className="bg-[#212529] text-[#e4e1c2]">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default App;
