import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import ProjectSection from "./components/ProjectSection/Project";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero/>
      <About />
      <Skill />
      <ProjectSection />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
