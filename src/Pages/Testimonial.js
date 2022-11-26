import React from "react";
import "../CSS/testimonial.css";
import TestimonialComponent from "../Components/PageComp/TestimonialComponent";
import PageComponentHeader from "../Components/PageComp/PageComponentHeader";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial-header-container">
        <PageComponentHeader
          headerContent="Testimonials"
          componentParagraph="What our Parents and Guardians says"
        />
      </div>
      <div className="testimonial-component-container">
        <TestimonialComponent
          img={require("../Images/testimonial1.png")}
          testimonialParagraph="The teachers are attentive to 
        the students and have their best interest 
        at heart!"
          testimonialName="Honips Hub"
        />
        <TestimonialComponent
          img={require("../Images/testimonial2.png")}
          testimonialParagraph="Child centredness cannot be over 
        emphasised. I love that the 
        school focuses on this. Please keep it up!"
          testimonialName="Moroundiya"
        />
        <TestimonialComponent
          img={require("../Images/testimonial3.png")}
          testimonialParagraph="The best in town that every parent 
        should enroll their kids for great impact. 
        Please keep it up!"
          testimonialName="Abiodun"
        />
      </div>
    </div>
  );
};

export default Testimonial;
