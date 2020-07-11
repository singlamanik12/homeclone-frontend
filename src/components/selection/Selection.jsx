import React, { Component, useEffect, useState, Suspense } from "react";
import styles from "./Selection.module.css";
import { fetchCities } from "./../../api/index";
import RenderOptions from "./RenderOptions";
import Grid from "@material-ui/core/Grid";
import { url } from "../../tools/config.json";
class Selection extends Component {
  state = { data: null, citiesList: [], loaded: false };

  componentDidMount = async () => {
    fetch(url + "cities", {
      method: "GET",
    }).then((res) =>
      res.json().then((result) => this.setState({ data: result, loaded: true }))
    );
  };

  render() {
    return (
      <React.Fragment>
        <Grid container alignContent="center" className={styles.dropdown}>
          <Grid item xs={8} sm={6} md={10}>
            {this.state.loaded ? (
              <RenderOptions data={this.state.data} />
            ) : (
              "Loading..."
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Selection;
