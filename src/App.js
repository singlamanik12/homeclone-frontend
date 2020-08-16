import React, { Component } from "react";
import "./App.css";
import jwtDecode from "jwt-decode";
import { Route, Redirect, Switch, NavLink, Link } from "react-router-dom";
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
import Postings from "./components/postings/Postings";
import CreatePosting from "./components/NewPosting/CreatePosting";
import OpenPosting from "./components/postings/OpenPosting";
import AppBar from "@material-ui/core/AppBar";

import { HideOnScroll } from "./HideOnScroll";
import Privacy from "./components/common/privacypolicy";
import Terms from "./components/common/Terms";
class App extends Component {
  state = {};
  componentDidMount() {
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
            style={{ backgroundColor: "black" }}
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
                    }}
                  >
                    rooftail
                  </Typography>
                </NavLink>
              </Typography>
            </Grid>
          </AppBar>

          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Switch>
                <Route path="/register" component={RegisterForm} />
                <Route path="/home" component={Postings} />
                <Route path="/login" component={LoginForm} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/change_password/:id" component={ChangePassword} />
                <Route path="/confirmation/:id" component={Confirmation} />
                <Route path="/logout" component={Logout} />
                <Route path="/signup" component={SignupUI} />
                <Route path="/create" component={CreatePosting} />
                <Route path="/posting_details/:id" component={OpenPosting} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/terms" component={Terms} />
                <Redirect from="/" exact to="/home" />
                <Redirect to="/not-found"></Redirect>
              </Switch>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
