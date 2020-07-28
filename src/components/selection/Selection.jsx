import React, { Component, useEffect, useState, Suspense } from "react";
import styles from "./Selection.module.css";
import { fetchCities } from "./../../api/index";
import RenderOptions from "./Cities";
import Grid from "@material-ui/core/Grid";
import { url } from "../../tools/config.json";
import {
  NativeSelect,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
class Selection extends Component {
  state = { data: null, citiesList: [], loaded: false };
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {};

  render() {
    return (
      <React.Fragment>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          style={{ marginTop: "30px" }}
        >
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <RenderOptions
              // data={this.state.data}
              handleChange={this.handleChange}
            />
          </Grid>

          <Grid item xs={4}>
            <FormControl variant="outlined" style={{ minWidth: "100%" }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={""}
                // onChange={handleChange}
                label="Region"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"North"}>North</MenuItem>
                <MenuItem value={"South"}>South</MenuItem>
                <MenuItem value={"East"}>East</MenuItem>
                <MenuItem value={"West"}>West</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Selection;
