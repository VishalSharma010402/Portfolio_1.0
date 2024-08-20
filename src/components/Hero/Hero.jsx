import React from "react";
import "./Herostyle.css";
// import { DarkMode } from "../../Mode/DarkMode";
// import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';


function Hero() {
  return (
    <section id="hero" className="heromain">
      <div className="container">
        <h1>VISHAL SHARMA </h1>
        <h3>FRONTEND DEVELOPER</h3>
        <div className="icons">
          <a href="https://github.com/VishalSharma010402">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https:/ /www.linkedin.com/in/vishal-sharma-1a4">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/vishal-sharma-1a4">
            <ion-icon name="logo-linkedin"></ion-icon>{" "}
          </a>
        </div>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href="cv.pdf" className="resume" download>
          <button id="btn">Download Resume</button>
        </a>
      </div>
      <div className="heroimg spline">
      {/* <DarkMode></DarkMode> */}
      <Spline scene="https://prod.spline.design/xjMcOPQtCU2aCNPg/scene.splinecode" />
      </div>
    </section>
  );
}

export default Hero;
