import React from "react";
import "./button.css";

const Button = ({ buttonName, onClick, type }) => {
  return (
    <div>
      <button type={type} className="button" onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
