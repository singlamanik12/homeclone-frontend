import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import { Link, Redirect } from "react-router-dom";
import auth from "./../../services/JwtServices";
import * as logService from "../../services/loginService";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };
  schema = {
    password: Joi.string().min(5).required().label("Password"),
    email: Joi.string().email().required().label("Email"),
  };

  doSubmit = async () => {
    try {
      const { data: jwt } = await logService.login(this.state.data);
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
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <Typography
          variant="h3"
          align="center"
          style={{ fontFamily: "Pacifico" }}
        >
          Welcome Back
        </Typography>
        <div style={{ marginBlockStart: "60px" }}>
          <Grid container>
            <Grid item md={4}></Grid>
            <Grid item xs={12} md={4}>
              <article className="card-body mx-auto" xs={12}>
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
            </Grid>
            <Grid item md={4} />
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default LoginForm;
