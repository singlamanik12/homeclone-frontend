import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
class TitleHeading extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <Grid item xs={12}>
        <Typography variant="h4" style={{ fontFamily: "Noto Sans JP" }}>
          {data.title}
        </Typography>

        <Typography
          variant="body2"
          style={{ fontFamily: "Noto Sans JP" }}
          gutterBottom
        >
          {data.city}, {data.state}
        </Typography>
      </Grid>
    );
  }
}

export default TitleHeading;
