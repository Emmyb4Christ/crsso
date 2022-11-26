import React from "react";
import "./testimonialcomponent.css";

const TestimonialComponent = ({
  img,
  testimonialName,
  testimonialParagraph,
}) => {
  return (
    <div className="testimonial-component-div">
      <img src={img} alt="testimonialUserImages" />
      <p>{testimonialParagraph}</p>
      <h3>{testimonialName}</h3>
    </div>
  );
};

export default TestimonialComponent;
