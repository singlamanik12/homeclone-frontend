import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import jwtDecode from "jwt-decode";
import { Selection, NavBar } from "./components";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import RegisterForm from "./components/Form/RegisterForm";
import LoginForm from "./components/Form/LoginForm";
import Forgot from "./components/Form/Forgot";
import Logout from "./components/common/Logout";
import ChangePassword from "./components/Form/ChangePassword";
import Confirmation from "./components/common/Confirmation";
import SideBar from "./components/SideBar/SideBar";
import "./components/SideBar/SideBar.Module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Typography } from "@material-ui/core";
import SignupUI from "./components/Form/SignupUI";
class App extends Component {
  state = {};
  componentWillMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }
  render() {
    return (
      <React.Fragment>
        <div id="App">
          <Grid container direction="column">
            <div style={{ marginBlockStart: "20px" }}>
              <Grid item xs={12} container>
                <Grid item xs={2}>
                  <SideBar
                    pageWrapId={"page-wrap"}
                    outerContainerId={"App"}
                  ></SideBar>
                </Grid>
                <Grid item xs={6} lg={8}>
                  <Typography align="center" variant="h4">
                    <NavLink
                      style={{ color: "Black" }}
                      className="nav-item nav-link"
                      to="/"
                    >
                      <Typography
                        variant="h4"
                        style={{ fontFamily: "Pacifico", color: "#6666ff" }}
                      >
                        RoofTail
                      </Typography>
                    </NavLink>
                  </Typography>
                </Grid>
                <Grid
                  style={{ marginTop: "9px" }}
                  justify="flex-end"
                  item
                  xs={4}
                  lg={2}
                >
                  <Button variant="contained" color="primary">
                    Create
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12} container>
                <Grid item xs={12}>
                  <Switch>
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/postings" component={Selection} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/forgot" component={Forgot} />
                    <Route
                      path="/change_password/:id"
                      component={ChangePassword}
                    />
                    <Route path="/confirmation/:id" component={Confirmation} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/signup" component={SignupUI} />
                    <Redirect from="/" exact to="/postings" />
                    <Redirect to="/not-found"></Redirect>
                  </Switch>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
