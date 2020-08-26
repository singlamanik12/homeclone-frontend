import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SharePosting from "../OpenPostingElements/SharePosting";
import BigPricing from "../OpenPostingElements/BigPricing";
class RightHandSide extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <Grid
        item
        xs={4}
        container
        direction="column"
        style={{ marginTop: "50px" }}
      >
        <Grid item>
          <BigPricing data={data} />
        </Grid>

        <Grid item style={{ marginTop: "20px" }}>
          <SharePosting data={data} />
        </Grid>
      </Grid>
    );
  }
}

export default RightHandSide;
