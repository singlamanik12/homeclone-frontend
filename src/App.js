import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, NavBar } from "./components";
import { Route, Redirect, Switch } from "react-router-dom";
import RegisterForm from "./components/Form/RegisterForm";
import LoginForm from "./components/Form/LoginForm";
import Forgot from "./components/Form/Forgot";
class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/postings" component={Selection} />
          <Route path="/login" component={LoginForm} />
          <Route path="/forgot" component={Forgot} />
          <Redirect from="/" exact to="/postings" />
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
