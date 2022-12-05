import React, { useContext } from "react";
import "../CSS/login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../Components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogInSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Passwor must be 6 characters or more")
    .matches(/[a-z]+/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]+/, "Password must contain at least one uppercase character")
    .matches(
      /[@$!%*#?&]+/,
      "Password must contain at least one special character"
    )
    .matches(/\d+/, "Password must contain at least one number"),
});

export const LogIn = () => {
  const { setUser } = useContext(AuthContext);

  let navigate = useNavigate();

  return (
    <div className="login-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={LogInSchema}
        onSubmit={(values) => {
          // same shape as initial values
          // console.log(values);
          setUser(values);
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form className="login-form-container">
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>Fill your details to Log In</p>
            </div>
            <div className="form-div">
              <label htmlFor="name">Full Name</label>
              <Field
                className="input"
                name="name"
                placeholder="Enter Full Name"
              />
              <ErrorMessage name="name" /> <br></br>
              <label htmlFor="name">Email Address</label>
              <Field
                className="input"
                name="email"
                type="email"
                placeholder="Enter Email Address"
              />
              <ErrorMessage name="email" /> <br></br>
              <label htmlFor="password">Password</label>
              <Field
                className="input"
                name="password"
                type="password"
                placeholder="Enter Password"
              />
              <ErrorMessage name="password" />
              <br></br>
              <div className="login-btn">
                <button type="submit">Log In</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LogIn;
