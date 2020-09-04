import React, { Component } from "react";
import { Grid, Avatar, Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
class Navigation extends Component {
  state = {};
  render() {
    const { handleNextPage, handlePrevPage, page } = this.props;
    return (
      <Grid item xs={12} container style={{ marginTop: "50px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <Button
            color="primary"
            disabled={page === 0}
            startIcon={<NavigateBeforeIcon />}
            onClick={handlePrevPage}
          >
            Previous
          </Button>
          <Button
            style={{ float: "right" }}
            color="primary"
            disabled={!this.props.hasNextPage}
            endIcon={<NavigateNextIcon />}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    );
  }
}

export default Navigation;
