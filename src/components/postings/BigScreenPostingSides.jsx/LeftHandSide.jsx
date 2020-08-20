import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import MainInformation from "../OpenPostingElements/MainInformation";
import Description from "../OpenPostingElements/Description";
import AmenitiesIncluded from "../OpenPostingElements/AmenitiesIncluded";
import PostedBy from "../OpenPostingElements/PostedBy";
import CustomDivider from "../OpenPostingElements/CustomDivider";
class LeftHandSide extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={8} container direction="container">
        <Grid item xs={12} container>
          <PostedBy />
        </Grid>
        <CustomDivider />
        <MainInformation />
        <CustomDivider />

        <Grid item xs={12} container>
          <Description />
        </Grid>
        <CustomDivider />
        <AmenitiesIncluded />
      </Grid>
    );
  }
}

export default LeftHandSide;
