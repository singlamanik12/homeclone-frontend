import React, { Component } from "react";
import Joi, { abort } from "joi-browser";
import Form from "./Form";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import * as registerService from "../../services/registrationService";
import GoLogin from "../LoginAPIs/loginGoogle";
import FaLogin from "../LoginAPIs/loginFacebook";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
class RegisterForm extends Form {
  state = { data: { username: "", email: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().min(5).required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    confirmpassword: Joi.string().min(5).required().label("Confirm Password"),
    email: Joi.string().email().required().label("Email"),
  };
  doSubmit = async () => {
    if (this.state.data.password === this.state.data.confirmpassword) {
      try {
        const { data: jwt } = await registerService.register(this.state.data);
        localStorage.setItem("token", jwt);
        window.location = "/";
      } catch (error) {
        if (error.response && error.response.status === 401) {
          const errors = { ...this.state.errors };
          errors.email = error.response.data;
          this.setState({ errors });
        }
      }
    } else {
      const errors = { ...this.state.errors };
      errors.password = "Passwords didn't matched";
      this.setState({ errors });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Typography
          variant="h2"
          align="center"
          style={{ fontFamily: "Pacifico" }}
        >
          Become a RoofTailer
        </Typography>
        <div style={{ marginBlockStart: "60px" }}>
          <Grid container>
            <Grid item md={4}></Grid>
            <Grid item xs={12} md={4}>
              <article className="card-body mx-auto">
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
            </Grid>
            <Grid item md={4} />
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
