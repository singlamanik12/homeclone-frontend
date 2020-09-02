import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IteratePostings from "./IteratePostings";
import Selection from "../selection/Selection";

import Footer from "../common/footer";
import Navigation from "./Navigation";
class Postings extends Component {
  state = {
    city: "All",
    region: "All",
    page: 0,
    typeOfHousing: "All",
  };
  handleNextPage = () => {
    let page = this.state.page;
    page += 1;
    this.setState({ page });
  };
  handlePrevPage = () => {
    let page = this.state.page;
    page -= 1;
    this.setState({ page });
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value, page: 0 });
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
              typeOfHousing={this.state.typeOfHousing}
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
                    typeOfHousing={this.state.typeOfHousing}
                  />
                )}
              />

              <Redirect from="/home" exact to="/home/postings" />
              <Redirect to="/not-found"></Redirect>
            </Switch>
          </Grid>
          <Grid item xs={12} container>
            <Navigation
              handleNextPage={this.handleNextPage}
              handlePrevPage={this.handlePrevPage}
              page={this.state.page}
            />
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Postings;
