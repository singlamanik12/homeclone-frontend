import React, { Component } from "react";
import Joi, { abort } from "joi-browser";
import Form from "./Form";
class Forgot extends Form {
  state = { data: { email: "" }, errors: {} };
  schema = {
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
