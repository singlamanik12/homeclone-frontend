import React, { Component } from "react";

import RenderOptions from "./Cities";
import Grid from "@material-ui/core/Grid";

import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";
import { Link } from "react-router-dom";

class Selection extends Component {
  state = { data: null, citiesList: [], loaded: false };

  handleChange = (e) => {};

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="center"
            style={{ marginTop: "30px" }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <RenderOptions
                value={this.props.city}
                handleChange={this.props.handleChange}
              />
            </Grid>

            <Grid item xs={5}>
              <FormControl variant="outlined" style={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.props.region}
                  onChange={this.props.handleChange}
                  label="Region"
                  name="region"
                >
                  <MenuItem value="All">
                    <em>Any</em>
                  </MenuItem>
                  <MenuItem value={"North"}>North</MenuItem>
                  <MenuItem value={"South"}>South</MenuItem>
                  <MenuItem value={"East"}>East</MenuItem>
                  <MenuItem value={"West"}>West</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "6px" }}>
            <div
              className="alert alert-light alert-dismissible fade show"
              role="alert"
              style={{ fontSize: "15px", padding: "1px" }}
            >
              Want to post your place ,<Link to="/create">Click here</Link>
              {/* <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button> */}
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Selection;
