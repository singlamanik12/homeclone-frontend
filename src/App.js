import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import jwtDecode from "jwt-decode";
import { Selection, NavBar } from "./components";
import { Route, Redirect, Switch } from "react-router-dom";
import RegisterForm from "./components/Form/RegisterForm";
import LoginForm from "./components/Form/LoginForm";
import Forgot from "./components/Form/Forgot";
import Logout from "./components/common/Logout";
import ChangePassword from "./components/Form/ChangePassword";
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
        <NavBar user={this.state.user} />
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/postings" component={Selection} />
          <Route path="/login" component={LoginForm} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/change_password/:id" component={ChangePassword} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/" exact to="/postings" />
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
