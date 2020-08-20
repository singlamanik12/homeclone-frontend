import React, { Component } from "react";
import http from "../../services/httpServices";
import ImageGrid from "./ImageGrid";
import Grid from "@material-ui/core/Grid";
import TitleHeading from "./OpenPostingElements/TitleHeading";
import RightHandSide from "./BigScreenPostingSides.jsx/RightHandSide";
import LeftHandSide from "./BigScreenPostingSides.jsx/LeftHandSide";
class BigScreenPosting extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12} container style={{ marginBottom: "50px" }}>
        <Grid item lg={1}></Grid>
        <Grid item xs={12} lg={10} container direction="column">
          <Grid item xs={12} container style={{ marginTop: "30px" }}>
            <br />
            <TitleHeading />
            <Grid
              item
              xs={12}
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              <ImageGrid />
            </Grid>
            <Grid item xs={12} container>
              <LeftHandSide />
              <RightHandSide />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    );
  }
}

export default BigScreenPosting;
