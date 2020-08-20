import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
class TitleHeading extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12}>
        <Typography variant="h4" style={{ fontFamily: "Noto Sans JP" }}>
          Shinchan's House
        </Typography>

        <Typography
          variant="body2"
          style={{ fontFamily: "Noto Sans JP" }}
          guuterBottom
        >
          Tokyo, Japan
        </Typography>
      </Grid>
    );
  }
}

export default TitleHeading;
