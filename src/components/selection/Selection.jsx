import React, { Component, useEffect, useState, Suspense } from "react";

import { fetchCities } from "./../../api/index";
import RenderOptions from "./RenderOptions";
class Selection extends Component {
  state = { data: null, citiesList: [], loaded: false };

  componentDidMount = async () => {
    fetch("http://apiforrenting.herokuapp.com/cities", {
      method: "GET",
    }).then((res) =>
      res.json().then((result) => this.setState({ data: result, loaded: true }))
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loaded ? (
          <RenderOptions data={this.state.data} />
        ) : (
          "Loading..."
        )}
      </React.Fragment>
    );
  }
}

export default Selection;
