import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthContext";
import "../CSS/dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="dashboard-container">
      <div className="dasboard-nav-header-container">
        <div className="dashboard-nav-container">
          <div className="nav-logo-head">
            <img src={require("../Images/logo.png")} alt="NavBarLogo" />
            <h3>Excel Schools</h3>
          </div>
          <div className="nav-item-div">
            <ul className="dashboard-nav-item">
              <li>
                <NavLink to="/">
                  <img src={require("../Images/home.png")} alt="HomePageIcon" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile">
                  <img
                    src={require("../Images/profile.png")}
                    alt="ProfilePageIcon"
                  />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="result">
                  <img
                    src={require("../Images/result.png")}
                    alt="ResultPageIcon"
                  />
                  Result
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {user.name}</h1>
            <p>
              You have 27 new student added to your domain. Please reach out to
              the Head Teacher if you want them excluded from your domain.
            </p>
          </div>
          <img
            src={require("../Images/teacher-student.png")}
            alt="TeacherStudentImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
