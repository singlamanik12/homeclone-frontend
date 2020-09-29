import React from "react";
import Joi from "joi-browser";
import * as forgotService from "../../services/forgotService";
import Form from "./Form";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      await forgotService.forgot(this.state.data).then((response) =>
        toast.info(
          "Forgot Password Link is sent to your mail. Check your mail!",
          {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        )
      );
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
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email")}
              {this.renderButton("Submit")}
            </form>
          </Grid>
          <Grid md={4}></Grid>
        </Grid>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default Forgot;
