import React, { Component } from "react";
import "./App.css";
import jwtDecode from "jwt-decode";
import { NavLink } from "react-router-dom";
import "./components/SideBar/SideBar.Module.css";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import SideBar from "./components/SideBar/SideBar";
import Router from "./Router";

class App extends Component {
  state = {};
  componentDidMount() {
    // console.log(Date().toLocaleString());
    console.log(Date.now());
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <Grid container direction="column">
          <AppBar
            position="static"
            color="transparent"
            style={{ backgroundColor: "black", marginBottom: "20px" }}
          >
            <Grid item xs={12} container>
              <SideBar></SideBar>

              <Typography variant="h4">
                <NavLink
                  style={{ color: "Black" }}
                  className="nav-item nav-link"
                  to="/"
                >
                  <Typography
                    variant="h4"
                    style={{
                      color: "white",
                      fontSize: "23px",
                      margin: "5px",
                      fontWeight: "bold",
                      fontFamily: "Noto Sans JP",
                    }}
                  >
                    rooftail
                  </Typography>
                </NavLink>
              </Typography>
            </Grid>
          </AppBar>

          <Grid item xs={12} container>
            <Router />
            <Grid item xs={12} style={{ marginBottom: "80px" }}></Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
