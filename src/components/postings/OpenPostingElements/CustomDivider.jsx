import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
class CustomDivider extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={10} style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Divider />
      </Grid>
    );
  }
}

export default CustomDivider;
