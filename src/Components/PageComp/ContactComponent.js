import React from "react";
import "./contactcomponent.css";

const ContactComponent = ({ img, contactHeading, contactParagraph }) => {
  return (
    <div className="contact-component-div">
      <img src={img} alt="contactComponentIcon" />
      <h3>{contactHeading}</h3>
      <p>{contactParagraph}</p>
    </div>
  );
};

export default ContactComponent;
