import React from "react";
import Button from "../Components/Button/Button";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-col-1">
        <h3>Give your Children the Best Education.</h3>
        <p>
          Education is the key to the future, for tomorrow belongs to those who
          prepare for it today - Malcolm X
        </p>
        <div className="home-botton-div">
          <Button buttonName="Learn More" />
        </div>
      </div>
      <div className="home-col-2">
        <img src={require("../Images/home-image.png")} alt="homeImage" />
      </div>
    </div>
  );
};

export default Home;
