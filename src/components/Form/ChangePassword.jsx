import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import * as changeService from "../../services/changeService";
class ChangePassword extends Form {
  state = { data: { password: "" }, errors: {} };
  schema = {
    password: Joi.string().min(5).required().label("Password"),
    confirmpassword: Joi.string().min(5).required().label("Confirm Password"),
  };
  doSubmit = async () => {
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
  };
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ width: "400px" }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("password", "Password", "password")}
              {this.renderInput(
                "confirmpassword",
                "Confirm Password",
                "password"
              )}
              {this.renderButton("Change Password")}
            </form>
          </article>
        </div>
      </React.Fragment>
    );
  }
}

export default ChangePassword;
