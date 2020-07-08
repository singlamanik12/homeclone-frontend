import React, { Component } from "react";
import Joi, { abort } from "joi-browser";
import Form from "./Form";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };
  schema = {
    //   username: Joi.string().min(5).required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    //   confirmpassword: Joi.string().min(5).required().label("Confirm Password"),
    email: Joi.string().email().required().label("Email"),
  };
  doSubmit = async () => {
    window.location = "/";
  };
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ width: "400px" }}>
            <h4 className="card-title mt-3 text-center">Log In</h4>
            {/* <p className="text-center">Get started with your free account</p> */}
            <div style={{ alignContent: "center" }}>
              <GoogleButton
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
            </div>
            <p className="divider-text" style={{ textAlign: "center" }}>
              <span className="bg-light">OR</span>
            </p>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Log In")}
              <p className="text-center">
                Don't have an account? <Link to="/register">Sign up</Link>{" "}
              </p>
              <p style={{ textAlign: "center" }}>
                <Link to="/forgot">Forgot Password</Link>
              </p>
            </form>
          </article>
        </div>
      </React.Fragment>
    );
  }
}
export default LoginForm;
