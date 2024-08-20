import React from 'react';
import Container from "../Container";
import "./Project.css";
import Pimg from "/Image/Pimg1.png"



const Project = () => {
  return (
    <section id='project' className="main">
      <h3>Projects</h3>
      <p>Get ready to dive into my world.</p>
      <div className="cont">
      <Container Img={Pimg} subTitle={"AI services"} title={"AI Service Website"}/>
      <Container Img={Pimg} subTitle={"CybNet"} title={"Cyber Security Website"}/>
      <Container Img={Pimg} subTitle={"Educart"} title={"Courses Website"}/>
      </div> 
    </section>
  )
}

export default Project