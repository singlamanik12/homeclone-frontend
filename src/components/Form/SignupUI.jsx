import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import GoLogin from "./../LoginAPIs/loginGoogle";
import FaLogin from "../LoginAPIs/loginFacebook";
import Button from "@material-ui/core/Button";
import { NavLink, Redirect } from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";
import auth from "./../../services/JwtServices";

class SignupUI extends Component {
  state = {};
  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    const { state } = this.props.location;
    return (
      <React.Fragment>
        <Typography
          variant="h2"
          align="center"
          style={{ fontFamily: "Pacifico" }}
        >
          Welcome to RoofTail
        </Typography>
        <div style={{ marginBlockStart: "60px" }} />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} style={{ margin: "20px" }}>
            <GoLogin track={state} />
          </Grid>
          <Grid item xs={12} style={{ margin: "20px" }}>
            <FaLogin track={state} />
          </Grid>
          <Grid item xs={12} style={{ margin: "20px" }}>
            <Button
              style={{ fontSize: "21px", padding: "0px" }}
              variant="outlined"
              color="primary"
            >
              <NavLink
                style={{ color: "blue" }}
                className="nav-item nav-link"
                to="/register"
              >
                <MailIcon
                  style={{ marginBottom: "4px", marginInlineEnd: "10px" }}
                />
                Sign Up / Login
              </NavLink>
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SignupUI;
