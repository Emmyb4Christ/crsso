import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import ContactComponent from "../Components/PageComp/ContactComponent";
import PageComponentHeader from "../Components/PageComp/PageComponentHeader";
import "../CSS/contact.css";

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
      <div className="contact-component-container">
        <ContactComponent
          img={require("../Images/location.png")}
          contactHeading="Address"
          contactParagraph="Lorem ipsum dolor sit amet"
        />
        <ContactComponent
          img={require("../Images/contact.png")}
          contactHeading="Phone"
          contactParagraph="+234 90 1732 5355"
        />
        <ContactComponent
          img={require("../Images/email.png")}
          contactHeading="Email"
          contactParagraph="info@excelschools.com"
        />
      </div>
    </div>
  );
};

export default Contact;
