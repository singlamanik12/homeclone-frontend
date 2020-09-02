import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import * as changeService from "../../services/changeService";
import { Grid, Typography } from "@material-ui/core";
class ChangePassword extends Form {
  state = { data: { password: "" }, errors: {} };
  schema = {
    password: Joi.string().min(5).required().label("Password"),
    confirmpassword: Joi.string().min(5).required().label("Confirm Password"),
  };
  doSubmit = async () => {
    if (this.state.data.password === this.state.data.confirmpassword) {
      try {
        await changeService.changePassword(
          this.state.data,
          this.props.match.params.id
        );
      } catch (error) {
        if (error.response && error.response.status === 401) {
          const errors = { ...this.state.errors };
          errors.password = error.response.data;
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
        <Grid container style={{ marginTop: "100px" }}>
          <Grid item md={4}></Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h3"
              style={{ fontFamily: "Noto Sans JP", marginBottom: "50px" }}
            >
              Change Password
            </Typography>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("password", "Password", "password")}
              {this.renderInput(
                "confirmpassword",
                "Confirm Password",
                "password"
              )}
              {this.renderButton("Change Password")}
            </form>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ChangePassword;
