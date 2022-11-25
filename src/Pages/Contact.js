import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageComponentHeader from "../Components/PageComp/PageComponentHeader";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="contact-container">
        <PageComponentHeader
          headerContent="Get In Touch"
          componentParagraph="Kindly Reach out to us easily with these contact Info"
        />
      </div>
    </div>
  );
};

export default Contact;
