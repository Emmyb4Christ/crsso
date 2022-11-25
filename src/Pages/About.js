import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageComponentHeader from "../Components/PageComp/PageComponentHeader";
import "../CSS/about.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <PageComponentHeader
          headerContent="About Us"
          componentParagraph="We are a board of expert employees with great experience."
        />
      </div>
    </div>
  );
};

export default About;
