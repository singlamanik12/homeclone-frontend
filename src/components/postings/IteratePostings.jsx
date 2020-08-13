import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import UnitPosting from "./UnitPosting";
import http from "../../services/httpServices";
class IteratePostings extends Component {
  state = { data: [] };
  componentDidMount = async () => {
    console.log(this.state.data);

    const { data } = await http.get(
      `http://apiforrenting.herokuapp.com/postings?city=${this.props.city}&region=${this.props.region}&start=${this.props.page}`
    );
    console.log(data);
    this.setState({ data });
  };
  render() {
    return (
      <>
        <Grid direction="column" container>
          <Grid item xs={12} container>
            {this.state.data.map((item) => (
              <Grid item xs={12} md={4} style={{ padding: "10px" }}>
                <UnitPosting data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default IteratePostings;
