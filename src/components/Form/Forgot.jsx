import React, { Component } from "react";
import Joi, { abort } from "joi-browser";
import { Toast } from "react-bootstrap";
import * as forgotService from "../../services/forgotService";
import Form from "./Form";
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
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ width: "400px" }}>
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
            <h4 className="card-title mt-3 text-center">Forgot Password</h4>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email")}
              {this.renderButton("Submit")}
            </form>
          </article>
        </div>
      </React.Fragment>
    );
  }
}

export default Forgot;
