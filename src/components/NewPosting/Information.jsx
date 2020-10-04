import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import RenderOptions from "../selection/Cities";
import States from "../selection/States";

import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
class Information extends Component {
  state = {};
  render() {
    const { handleChange, values, nextStep, prevStep } = this.props;
    return (
      <>
        {" "}
        <Grid container>
          <Grid item lg={3} xs={1} container></Grid>
          <Grid item lg={9} xs={10} container>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Place Information
              </Typography>
            </Grid>
            <br />
            {/* <h2>Outline</h2> */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Street Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="streetAddress"
                label="Street Address"
                helperText="e.g. 48, Yonge Street"
                variant="outlined"
                name="streetAddress"
                value={values.streetAddress}
                onChange={handleChange}
              />
            </Grid>
            <br />
            <Grid item xs={12} container>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  style={{ fontFamily: "Noto Sans JP" }}
                  gutterBottom
                >
                  City
                </Typography>
                <RenderOptions
                  handleChange={handleChange}
                  value={values.city}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={5}>
                <Typography
                  variant="h6"
                  style={{ fontFamily: "Noto Sans JP" }}
                  gutterBottom
                >
                  State
                </Typography>
                <States handleChange={handleChange} values={values.state} />
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Region
              </Typography>
            </Grid>
            <Grid item xs={12} container>
              <FormControl variant="outlined" style={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={values.region}
                  onChange={handleChange}
                  label="Region"
                  name="region"
                >
                  <MenuItem value={"North"}>North</MenuItem>
                  <MenuItem value={"South"}>South</MenuItem>
                  <MenuItem value={"East"}>East</MenuItem>
                  <MenuItem value={"West"}>West</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Typography
                variant="h3"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Contact Information
              </Typography>
            </Grid>
            <br />
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Full Name
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="name"
                label="Full Name"
                // helperText="e.g. 0123456789 length should be 10"
                variant="outlined"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Phone Number
              </Typography>
            </Grid>
            <Grid item xs={12} container>
              {/* <Grid item xs={12}>
                <TextField
                  style={{ width: "100%" }}
                  id="name"
                  label="Full Name"
                  helperText="e.g. 0123456789 length should be 10"
                  variant="outlined"
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                />
              </Grid> */}
              <Grid item xs={2}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-read-only-input"
                  label="Code"
                  defaultValue="+1"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ width: "100%" }}
                  id="phoneNumber"
                  label="Phone Number"
                  helperText="e.g. 0123456789 length should be 10"
                  variant="outlined"
                  type="tel"
                  value={values.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid item xs={12} container style={{ marginBottom: "30px" }}>
              <Grid item>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={prevStep}
                >
                  Back
                </button>
              </Grid>
              <Grid item xs={7} lg={9} />

              <Grid item>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={nextStep}
                  disabled={
                    values.city === "" ||
                    values.state === "" ||
                    values.streetAddress === "" ||
                    values.region === "" ||
                    values.phoneNumber === "" ||
                    values.name === ""
                  }
                >
                  Next
                </button>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Information;
