import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SharePosting from "../OpenPostingElements/SharePosting";
import BigPricing from "../OpenPostingElements/BigPricing";
class RightHandSide extends Component {
  state = {};
  render() {
    return (
      <Grid
        item
        xs={4}
        container
        direction="container"
        style={{ marginTop: "50px" }}
      >
        <BigPricing />
        <Grid item xs={12} container>
          <SharePosting />
        </Grid>
      </Grid>
    );
  }
}

export default RightHandSide;
