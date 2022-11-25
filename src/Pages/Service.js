import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import "../CSS/service.css";
import PageComponentHeader from "../Components/PageComp/PageComponentHeader";
import ServicePageComponent from "../Components/PageComp/ServicePageComponent";

const Service = () => {
  return (
    <div>
      <NavBar />
      <div>
        <PageComponentHeader
          headerContent="Our Services"
          componentParagraph="Here are the values we offer to enrich our students."
        />
      </div>
      <div className="service-component-container">
        <div className="service-component-container-col">
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/virtual.png")}
              serviveHeader="Virtual Learning"
              serviceParagraph="VL is a great tool which will change and 
          enhance the delivery and assessment of 
          education forever to achieve a secure level
           of functionality and effectiveness in the
          core skills."
            />
          </div>
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/thinking.png")}
              serviveHeader="Thinking School"
              serviceParagraph="Here at Excel Schools, students are 
          encouraged to think ‘outside the box.' 
          This will enable them to deconstruct"
            />
          </div>
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/rounded.png")}
              serviveHeader="Rounded Education"
              serviceParagraph="Here is the verdict! A child that has 
          a well-rounded education is equipped 
          with relevant skills to be able to manage 
          complex situations."
            />
          </div>
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/activity.png")}
              serviveHeader="Activity Learning"
              serviceParagraph="Educational research into brain development 
          and learning has made us understand that
          the more senses of the child involved in the
           learning process."
            />
          </div>
        </div>
        <div className="service-component-container-col">
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/elementary.png")}
              serviveHeader="Elementary"
              serviceParagraph="The primary formative years are set to 
              achieve a secure level of functionality and
              effectiveness in the core skills."
            />
          </div>
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/secondary.png")}
              serviveHeader="Secondary"
              serviceParagraph="In the first year of the secondary school 
              (our Y7) the scope of the curriculum widens
              to include a broader subject base."
            />
          </div>
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/diploma.png")}
              serviveHeader="IB Diploma"
              serviceParagraph="The Sixth Form at Greensprings School admits 
              motivated and committed students with
               minimum of 5 credits in their O’ Levels."
            />
          </div>
          <div className="service-col">
            <ServicePageComponent
              img={require("../Images/preschool.png")}
              serviveHeader="Preschool"
              serviceParagraph="The Pre-school section of Excel Schools is a 
          specially-prepared Montessori environment, 
          laying a solid foundation for children
          aged 18 months to 5+."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
