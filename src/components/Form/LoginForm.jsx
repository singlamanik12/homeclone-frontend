import React, { Component } from "react";
import Joi, { abort } from "joi-browser";
import Form from "./Form";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import * as logService from "../../services/loginService";
class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };
  schema = {
    password: Joi.string().min(5).required().label("Password"),
    email: Joi.string().email().required().label("Email"),
  };
  doSubmit = async () => {
    try {
      const { data: jwt } = await logService.login(this.state.data);
      console.log(jwt);
      localStorage.setItem("token", jwt);
      window.location = "/";
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
