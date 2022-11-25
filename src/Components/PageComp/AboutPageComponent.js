import React from "react";
import "./aboutpagecomponent.css";

const AboutPageComponent = ({
  img,
  alt,
  aboutComponentHeading,
  aboutComponentParagraph,
}) => {
  return (
    <div className="about-page-component">
      <img src={img} alt={alt} />
      <h3>{aboutComponentHeading}</h3>
      <p>{aboutComponentParagraph}</p>
    </div>
  );
};

export default AboutPageComponent;
