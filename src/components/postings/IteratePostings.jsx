import React, { Component } from "react";
import { Grid, CircularProgress } from "@material-ui/core";

import UnitPosting from "./UnitPosting";
import http from "../../services/httpServices";
class IteratePostings extends Component {
  state = { data: [] };
  componentDidMount = async () => {
    console.log(this.state.data);

    const { data } = await http.get(
      `https://apiforrenting.herokuapp.com/postings?city=${this.props.city}&region=${this.props.region}&page=${this.props.page}&typeOfHousing=${this.props.typeOfHousing}`
    );
    console.log(data);
    this.setState({ data });
  };
  render() {
    return (
      <>
        {this.state.data ? (
          <Grid container>
            <Grid item lg={1}></Grid>
            <Grid item xs={12} lg={8} container spacing={4}>
              {this.state.data.map((item, i) => (
                <Grid item xs={12} md={6} style={{ padding: "10px" }}>
                  <UnitPosting key={i} data={item} />
                </Grid>
              ))}
            </Grid>
            <Grid item lg={3}></Grid>
          </Grid>
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
      </>
    );
  }
}

export default IteratePostings;
