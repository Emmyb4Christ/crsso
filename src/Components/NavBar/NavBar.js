import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { AuthContext } from "../Context/AuthContext";
import "./navbar.css";

const NavBar = () => {
  const { user } = React.useContext(AuthContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="nav-div">
      <div className="menu-btn-div">
        <h1 className="header"> Excel Schools </h1>
        <button onClick={toggleNav} className="btn">
          Menu
        </button>
      </div>
      <div className="nav-item-div">
        <ul className="nav-item">
          {!user && (
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/about-us">About</NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
          )}

          {!user && (
            <li>
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink className="nav-btn" to="/log-in">
                <Button buttonName="log in" />
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-menu-div">
        <div className="small-screen-nav">
          {(toggleMenu || screenWidth > 500) && (
            <ul className="nav-item-small">
              <div className="close-toggle" onClick={toggleNav}>
                Close
              </div>
              {!user && (
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
              )}
              {!user && (
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
              )}
              {!user && (
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
              )}
              {!user && (
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
              )}
              {!user && (
                <li>
                  <NavLink className="nav-btn" to="/log-in">
                    <Button buttonName="log in" />
                  </NavLink>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
