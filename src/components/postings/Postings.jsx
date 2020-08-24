import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IteratePostings from "./IteratePostings";
import Selection from "../selection/Selection";

import Footer from "../common/footer";
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
      <React.Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Selection
              handleChange={this.handleChange}
              city={this.state.city}
              region={this.state.region}
            />
          </Grid>
          <Grid item xs={12} container>
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
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Postings;
