import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-col-1">
          <h3>Excel Schools</h3>
          <p>
            Education is the key to the future, for tomorrow belongs to those
            who prepare for it today - Malcolm X
          </p>
          <div className="footer-icon-container">
            <img
              src={require("../Images/facebook-icon.png")}
              alt="facebookIcon"
            />
            <img
              src={require("../Images/linkedin-icon.png")}
              alt="linkedinIcon"
            />
            <img
              src={require("../Images/twitter-icon.png")}
              alt="twitterIcon"
            />
            <img
              src={require("../Images/instagram-icon.png")}
              alt="instagramIcon"
            />
          </div>
        </div>
        <div className="footer-col-1-2-div">
          <div className="footer-col-2">
            <h3>Useful Links</h3>
            <ul className="footer-col-2-items">
              <NavLink to="/terms-and-conditions">F.A.Q</NavLink>
              <NavLink to="terms-and-conditions">Cookies</NavLink>
              <NavLink to="terms-and-conditions">Terms of Services</NavLink>
              <NavLink to="terms-and-conditions">Support</NavLink>
            </ul>
          </div>
          <div className="footer-col-3">
            <h3>Quick Links</h3>
            <ul className="footer-col-3-items">
              <NavLink to="/admission">Admission</NavLink>
              <NavLink to="/admission">Application Form</NavLink>
              <NavLink to="/curriculum">Curriculum</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
