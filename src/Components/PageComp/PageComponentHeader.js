import React from "react";
import "./pagecomponentheader.css";

const PageComponentHeader = ({ headerContent, componentParagraph }) => {
  return (
    <div className="page-component-header-container">
      <h3 className="component-header">{headerContent}</h3>
      <h3 className="component-paragraph">{componentParagraph}</h3>
    </div>
  );
};

export default PageComponentHeader;
