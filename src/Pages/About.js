import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import AboutPageComponent from "../Components/PageComp/AboutPageComponent";
import PageComponentHeader from "../Components/PageComp/PageComponentHeader";
import "../CSS/about.css";
import Footer from "./Footer";

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
      <div className="about-component-container">
        <AboutPageComponent
          img={require("../Images/values.png")}
          alt="valuesIcon"
          aboutComponentHeading="Our Values"
          aboutComponentParagraph="We endeavour to instill qualities of 
          judgement, self-reliance, integrity and self discipline in our students."
        />
        <div className="about-component-child2">
          <AboutPageComponent
            img={require("../Images/mission.png")}
            alt="missionIcon"
            aboutComponentHeading="Our Mission"
            aboutComponentParagraph="We endeavour to instill qualities of judgement,
          self-reliance, integrity and self discipline
          in our students."
          />
        </div>
        <AboutPageComponent
          img={require("../Images/vision.png")}
          alt="visionIcon"
          aboutComponentHeading="Our Vision"
          aboutComponentParagraph="To lead holistic, inclusive, innovative world 
          class education in Africa."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
