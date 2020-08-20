import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
class AmenitiesIncluded extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12} container>
        <Typography variant="h6" style={{ fontFamily: "Noto Sans JP" }}>
          Amenities Included
        </Typography>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
            gutterBottom
          >
            <img
              src="https://img.icons8.com/office/40/000000/water.png"
              style={{ marginRight: "10px", width: "45px" }}
            />
            Water
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            <img
              src="https://img.icons8.com/cotton/64/000000/electricity.png"
              style={{ marginRight: "10px", width: "45px" }}
            />
            Electricity
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            <img
              src="https://img.icons8.com/color/48/000000/wifi.png"
              style={{ marginRight: "10px", width: "45px" }}
            />
            WiFi
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            <img
              src="https://img.icons8.com/officel/40/000000/washing-machine.png"
              style={{ marginRight: "10px", width: "45px" }}
            />
            Laundry
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            <img
              src="https://img.icons8.com/color/48/000000/fridge.png"
              style={{ marginRight: "10px", width: "45px" }}
            />
            Referigerator
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            <img
              src="https://img.icons8.com/ultraviolet/40/000000/toaster-oven.png"
              style={{ marginRight: "10px", width: "45px" }}
            />
            Microwave
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default AmenitiesIncluded;
