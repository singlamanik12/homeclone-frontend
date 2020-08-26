import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Avatar } from "@material-ui/core";
class PostedBy extends Component {
  state = {};
  render() {
    return (
      <>
        {" "}
        <Grid item xs={6} style={{ marginTop: "10px" }}>
          <Typography variant="h6" style={{ fontFamily: "Noto Sans JP" }}>
            {this.props.data.email}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Avatar style={{ width: "60px", height: "60px" }}>M</Avatar>
        </Grid>
      </>
    );
  }
}

export default PostedBy;
