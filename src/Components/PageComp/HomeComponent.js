import React from "react";
import "./homecomponent.css";

const HomeComponent = ({ img, alt, FirstParaName }) => {
  return (
    <div className="home-component-container">
      <img src={img} alt={alt} />
      <p>{FirstParaName}</p>
    </div>
  );
};

export default HomeComponent;
