import React, { Component } from "react";
import { getCurrentUserEmail } from "./../../services/JwtServices";
import { Grid, Typography } from "@material-ui/core";
import https from "../../services/httpServices";
import EditPosting from "./EditPosting";
import { url } from "../../tools/config.json";
class MyPostings extends Component {
  state = { data: [] };
  componentDidMount = async () => {
    // console.log(getCurrentUserEmail().email);
    const { data } = await https.get(
      `${url}/myposting?email=${getCurrentUserEmail().email}`
    );
    this.setState({ data });
  };
  render() {
    return (
      <>
        <Grid container direction="row" style={{ marginTop: "20px" }}>
          <Grid item md={1} container></Grid>
          <Grid item xs={12} direction="column" container>
            <Grid item xs={12} container>
              <Typography
                variant="h4"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                My Postings
              </Typography>
            </Grid>
            <Grid container>
              <Grid item md={1}></Grid>
              <Grid item xs={12} md={8} container>
                {this.state.data.map((item, i) => (
                  <Grid item xs={12} md={6} style={{ padding: "10px" }}>
                    <EditPosting key={i} data={item} />
                  </Grid>
                ))}
              </Grid>
              <Grid item md={3}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default MyPostings;
