import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import RenderOptions from "../selection/Cities";
import States from "../selection/States";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
class Information extends Component {
  state = {};
  render() {
    const { handleChange, values, nextStep, prevStep } = this.props;
    return (
      <>
        {" "}
        <Grid container>
          <Grid item lg={3} xs={1} container></Grid>
          <Grid item lg={9} xs={10} container direction="column">
            <h1>Place Information</h1>
            <br />
            {/* <h2>Outline</h2> */}
            <h5>
              <em>Street Address</em>
            </h5>
            <TextField
              id="outlined-helperText"
              label="Street Address"
              helperText="e.g. 48, Yonge Street"
              variant="outlined"
              name="streetAddress"
              value={values.streetAddress}
              onChange={handleChange}
            />
            <br />
            <Grid item xs={12} container>
              <Grid item xs={6}>
                <h5>
                  <em>City</em>
                </h5>
                <RenderOptions
                  handleChange={handleChange}
                  values={values.city}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={5}>
                <h5>
                  <em>State</em>
                </h5>
                <States handleChange={handleChange} values={values.state} />
              </Grid>
            </Grid>
            <br />
            <br />
            <h1>Contact Information</h1>
            <br />
            <h5>
              <em>Phone Number</em>
            </h5>
            <Grid item xs={12} container>
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
                  id="outlined-helperText"
                  label="Phone Number"
                  helperText="e.g. 0123456789"
                  variant="outlined"
                  value={values.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Grid item xs={12} container>
              <Grid item>
                <div onClick={prevStep}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    disabled={
                      // values.city === "" ||
                      // values.state === "" ||
                      // values.streetA === ""
                      false
                    }
                  >
                    <ArrowBackIcon fontSize="large" />
                  </Fab>
                </div>
              </Grid>
              <Grid item xs={7} lg={9} />
              <Grid item>
                <div onClick={nextStep}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    disabled={
                      // values.city === "" ||
                      // values.state === "" ||
                      // values.streetAddress === ""||
                      // values.phoneNumber === ""
                      false
                    }
                  >
                    <ArrowForwardIcon fontSize="large" />
                  </Fab>
                </div>
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
