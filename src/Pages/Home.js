import React from "react";
import Button from "../Components/Button/Button";
import NavBar from "../Components/NavBar/NavBar";
import HomeComponent from "../Components/PageComp/HomeComponent";
import PageComponentHeader from "../Components/PageComp/PageComponentHeader";
import Footer from "./Footer";
import "../CSS/home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="home-container">
        <div className="home-col-1">
          <h3>Give your Children the Best Education.</h3>
          <p>
            Education is the key to the future, for tomorrow belongs to those
            who prepare for it today - Malcolm X
          </p>
          <div className="home-botton-div">
            <Button buttonName="Learn More" />
          </div>
        </div>
        <div className="home-col-2">
          <img src={require("../Images/home-image.png")} alt="homeImage" />
        </div>
      </div>
      <img
        className="approved-image"
        src={require("../Images/approved.png")}
        alt="approvedImage"
      />
      <div className="home-col-3-container">
        <PageComponentHeader
          headerContent="Why Us"
          componentParagraph="Here are few and rigid reasons why you should choose us!"
        />
      </div>
      <div className="home-col-3">
        <div className="home-col-3-1">
          <HomeComponent
            img={require("../Images/first-col-3-home.png")}
            alt="firstColImage"
            FirstParaName="A space that’s conducive to learning"
          />
          <HomeComponent
            img={require("../Images/second-col-3-home.png")}
            alt="secondColImage"
            FirstParaName="Management that’s guided by a leader"
          />
          <HomeComponent
            img={require("../Images/third-col-3-home.png")}
            alt="thirdColImage"
            FirstParaName="Cirriculum that’s future-ready"
          />
        </div>
        <div className="home-col-3-2">
          <HomeComponent
            img={require("../Images/fourth-col-3-home.png")}
            alt="fourthColImage"
            FirstParaName="A team of teachers that has the capacity  and training"
          />
          <HomeComponent
            img={require("../Images/fifth-col-3-home.png")}
            alt="fifthColImage"
            FirstParaName="Technology that can enhance learning  experience"
          />
          <HomeComponent
            img={require("../Images/sixth-col-3-home.png")}
            alt="sixthColImage"
            FirstParaName="A system that is crafted for continous improvement"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
