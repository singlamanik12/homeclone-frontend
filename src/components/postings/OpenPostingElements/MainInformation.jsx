import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import HotelIcon from "@material-ui/icons/Hotel";
class MainInformation extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12} container direction="container">
        <Grid item xs={12} container>
          <Avatar>
            <HomeIcon style={{ color: "black" }} />
          </Avatar>

          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
            gutterBottom
          >
            Private Room
          </Typography>
        </Grid>

        <Grid item xs={12} container style={{ marginTop: "10px" }}>
          <Avatar>
            <CallIcon style={{ color: "black" }} />
          </Avatar>

          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
            gutterBottom
          >
            +17057703061
          </Typography>
        </Grid>
        <Grid item xs={12} container style={{ marginTop: "10px" }}>
          <Avatar>
            <LocalParkingIcon style={{ color: "black" }} />
          </Avatar>

          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
            gutterBottom
          >
            Parking Available
          </Typography>
        </Grid>
        <Grid item xs={12} container style={{ marginTop: "10px" }}>
          <Avatar>
            <HotelIcon style={{ color: "black" }} />
          </Avatar>

          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
            gutterBottom
          >
            1 Person
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default MainInformation;
