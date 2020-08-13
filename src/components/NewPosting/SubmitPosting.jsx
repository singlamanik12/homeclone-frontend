import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
class SubmitPosting extends Component {
  state = {};
  render() {
    const { handleSubmitPosting, images } = this.props;
    return (
      <Grid item xs={12}>
        <button
          type="button"
          class="btn btn-success"
          onClick={handleSubmitPosting}
          disabled={images.length < 4}
        >
          Submit
        </button>
      </Grid>
    );
  }
}

export default SubmitPosting;
