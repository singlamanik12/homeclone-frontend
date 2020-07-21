import React, { Component } from "react";
import Joi, { abort } from "joi-browser";
import { Toast } from "react-bootstrap";
import * as forgotService from "../../services/forgotService";
import Form from "./Form";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
class Forgot extends Form {
  state = {
    data: { email: "" },
    errors: {},
    sent: false,
    message: "Forgot Password Link is sent to your mail. Check your mail!",
  };
  schema = {
    email: Joi.string().email().required().label("Email"),
  };

  doSubmit = async () => {
    try {
      await forgotService.forgot(this.state.data);
      this.setState({ sent: true });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
    // window.location = "/";
  };
  render() {
    return (
      <React.Fragment>
        <Typography
          variant="h3"
          align="center"
          style={{ fontFamily: "Pacifico" }}
        >
          Reset Password
        </Typography>
        <div style={{ marginBlockStart: "60px" }}></div>
        <Grid container>
          <Grid md={4}></Grid>
          <Grid item xs={12} md={4}>
            <article className="card-body mx-auto">
              {this.state.sent && (
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  style={{
                    position: "relative",
                    minHeight: "100px",
                    width: "600px",
                  }}
                >
                  <Toast
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "500px",
                    }}
                  >
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                      />
                      <strong className="mr-auto">RoofTail</strong>
                      <small>Happy Living</small>
                    </Toast.Header>
                    <Toast.Body>{this.state.message}</Toast.Body>
                  </Toast>
                </div>
              )}

              <form onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email")}
                {this.renderButton("Submit")}
              </form>
            </article>
          </Grid>
          <Grid md={4}></Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Forgot;
