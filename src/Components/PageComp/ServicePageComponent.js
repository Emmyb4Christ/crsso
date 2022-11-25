import React from "react";
import "./servicepagecomponent.css";

const ServicePageComponent = ({ serviveHeader, img, serviceParagraph }) => {
  return (
    <div className="service-component-container">
      <img src={img} alt="serviceComponentIcon" />
      <h3>{serviveHeader}</h3>
      <p>{serviceParagraph}</p>
    </div>
  );
};

export default ServicePageComponent;
