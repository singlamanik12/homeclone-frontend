import React, { Component } from "react";
import Joi, { abort } from "joi-browser";
import Form from "./Form";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import * as registerService from "../../services/registrationService";
class RegisterForm extends Form {
  state = { data: { username: "", email: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().min(5).required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    confirmpassword: Joi.string().min(5).required().label("Confirm Password"),
    email: Joi.string().email().required().label("Email"),
  };
  doSubmit = async () => {
    try {
      const response = await registerService.register(this.state.data);
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ width: "400px" }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            {/* <p className="text-center">Get started with your free account</p> */}
            <GoogleButton
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
            <p className="divider-text" style={{ textAlign: "center" }}>
              <span className="bg-light">OR</span>
            </p>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email")}
              {this.renderInput("username", "Username")}

              {this.renderInput("password", "Password", "password")}
              {this.renderInput(
                "confirmpassword",
                "Confirm Password",
                "password"
              )}
              {this.renderButton("Create Account")}
              <p className="text-center">
                Have an account? <Link to="/login">Log In</Link>{" "}
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

export default RegisterForm;
