import React from "react";
import "./button.css";

const Button = ({ buttonName, onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
