import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
class Description extends Component {
  state = {};
  render() {
    return (
      <>
        {" "}
        <Grid item xs={10}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            Some points of difference .....
          </Typography>
          <Typography
            variant="body1"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            {this.props.data.description}
          </Typography>
        </Grid>
        <Grid item></Grid>
      </>
    );
  }
}

export default Description;
