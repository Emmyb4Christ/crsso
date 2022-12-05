import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button/Button";
import "../CSS/profile.css";
import data from "./Data/profile.data.json";

const Profile = () => {
  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    surnName: "",
    firstName: "",
    middleName: "",
    emailAddress: "",
    phoneNumber: "",
    class: "",
    stateOfOrigin: "",
    localGovermentArea: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const filedName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[filedName] = [fieldValue];

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const updateContact = {
      surnName: addFormData.surnName,
      firstName: addFormData.firstName,
      middleName: addFormData.middleName,
      emailAddress: addFormData.emailAddress,
      phoneNumber: addFormData.phoneNumber,
      classa: addFormData.class,
      stateOfOrigin: addFormData.stateOfOrigin,
      localGovermentArea: addFormData.localGovermentArea,
    };

    const updateContacts = [...contacts, updateContact];
    setContacts(updateContacts);
  };

  return (
    <div className="profile-container">
      <div className="go-to-dashboard">
        <NavLink to="/">Go back to Dashboard</NavLink>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Surname:</th>
              <th>First Name:</th>
              <th>Middle Name:</th>
              <th>Email Address:</th>
              <th>Phone Number:</th>
              <th>Class:</th>
              <th>State of Origin:</th>
              <th>LGA:</th>
              <th>Blood Group:</th>
              <th>Genotype:</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.surnName}</td>
                <td>{contact.firstName} </td>
                <td>{contact.middleName} </td>
                <td>{contact.emailAddress}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.class}</td>
                <td>{contact.stateOfOrigin}</td>
                <td>{contact.localGovermentArea}</td>
                <td>{contact.bloodGroup}</td>
                <td>{contact.genotype}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Update Profile</h1>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="surnName"
            required="required"
            placeholder="Enter Surname"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="firstName"
            required="required"
            placeholder="Enter First Name"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="middleName"
            required="required"
            placeholder="Enter Middle Name"
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter Email"
            onChange={handleAddFormChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            required="required"
            placeholder="Enter Phone Number"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="class"
            required="required"
            placeholder="Enter Class"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="stateOfOrigin"
            required="required"
            placeholder="Enter State of Origin"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="localGovernmentArea"
            required="required"
            placeholder="Enter LGA"
            onChange={handleAddFormChange}
          />
          <Button type="submit" buttonName="Update Profile" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
