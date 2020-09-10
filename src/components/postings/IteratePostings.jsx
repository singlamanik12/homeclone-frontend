import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import UnitPosting from "./UnitPosting";
import http from "../../services/httpServices";
import Navigation from "./Navigation";
class IteratePostings extends Component {
  state = { data: {}, loaded: false, error: "" };
  componentDidMount = async () => {
    try {
      console.log(this.state.data);

      const { data } = await http.get(
        `https://apiforrenting.herokuapp.com/postings?city=${this.props.city}&region=${this.props.region}&page=${this.props.page}&typeOfHousing=${this.props.typeOfHousing}`
      );
      console.log(data);
      this.setState({ data, loaded: true });
    } catch (ex) {
      console.log(ex.response.data);
      this.setState({ error: "No postings available yet" });
    }
  };
  render() {
    return (
      <>
        {this.state.error === "" ? (
          <>
            <Grid container>
              <Grid item md={1}></Grid>
              <Grid item xs={12} md={8} container>
                {this.state.loaded ? (
                  this.state.data.postings.map((item) => (
                    <Grid item xs={12} md={6} style={{ padding: "10px" }}>
                      <UnitPosting data={item} />
                    </Grid>
                  ))
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <CircularProgress color="secondary" />
                  </div>
                )}
              </Grid>
              <Grid item md={3}></Grid>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                {this.state.loaded && (
                  <Navigation
                    handleNextPage={this.props.handleNextPage}
                    handlePrevPage={this.props.handlePrevPage}
                    page={this.props.page}
                    hasNextPage={this.state.data.hasnextpage}
                  />
                )}
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography
                variant="body2"
                style={{ fontFamily: "Noto Sans JP" }}
              >
                {this.state.error}
              </Typography>
            </div>
          </Grid>
        )}
      </>
    );
  }
}

export default IteratePostings;
