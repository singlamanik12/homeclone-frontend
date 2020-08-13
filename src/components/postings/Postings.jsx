import React, { Component } from "react";
import { Route, Redirect, Switch, NavLink, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IteratePostings from "./IteratePostings";
import OpenPosting from "./OpenPosting";
import Selection from "../selection/Selection";
class Postings extends Component {
  state = {
    city: "All",
    region: "All",
    page: "0",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Grid container>
        <Grid item xs={12} style={{ margin: "10px" }}>
          <Selection
            handleChange={this.handleChange}
            city={this.state.city}
            region={this.state.region}
          />
        </Grid>
        <Switch>
          <Route
            path="/home/postings"
            component={() => (
              <IteratePostings
                city={this.state.city}
                region={this.state.region}
                page={this.state.page}
              />
            )}
          />

          <Redirect from="/home" exact to="/home/postings" />
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </Grid>
    );
  }
}

export default Postings;
