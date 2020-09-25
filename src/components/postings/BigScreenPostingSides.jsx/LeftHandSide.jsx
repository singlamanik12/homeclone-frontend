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
    const { data, owner } = this.props;
    // console.log(data);
    return (
      <Grid item xs={8} container direction="column">
        <Grid item xs={12} container>
          <PostedBy data={data} owner={owner} />
        </Grid>
        <CustomDivider />
        <MainInformation data={data} />
        <CustomDivider />

        <Grid item xs={12} container>
          <Description data={data} />
        </Grid>
        <CustomDivider />
        <AmenitiesIncluded data={data} />
      </Grid>
    );
  }
}

export default LeftHandSide;
