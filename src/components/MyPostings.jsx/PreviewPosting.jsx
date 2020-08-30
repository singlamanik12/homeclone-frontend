import React, { Component } from "react";
import SmallScreenPosting from "../postings/SmallScreenPosting";
import BigScreenPosting from "../postings/BigScreenPosting";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

class PreviewPosting extends Component {
  state = {
    isMobile: window.matchMedia("(max-width: 600px)").matches,
    data: [],
  };

  componentDidMount = async () => {
    const mql = window.matchMedia("(max-width: 600px)");
    let isMobile;
    mql.addEventListener("change", (e) => {
      isMobile = e.matches;
      this.setState({ isMobile });
    });
  };

  render() {
    console.log(window.matchMedia("(max-width: 600px)"));
    return (
      <>
        <Grid item xs={12} contianer>
          <Grid item xs={11}>
            <Link to={`/edit_posting_details/${this.props.match.params.id}`}>
              <button
                type="button"
                class="btn btn-danger"
                style={{ float: "right", marginTop: "20px" }}
              >
                Edit
              </button>
            </Link>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={12}>
          {this.state.isMobile ? (
            <SmallScreenPosting id={this.props.match.params.id} />
          ) : (
            <BigScreenPosting id={this.props.match.params.id} />
          )}
        </Grid>
      </>
    );
  }
}

export default PreviewPosting;
