import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import UnitPosting from "./UnitPosting";
import http from "../../services/httpServices";
import { url } from "../../tools/config.json";
import Navigation from "./Navigation";
import Selection from "./../selection/Selection";
import Footer from "./../common/footer";
import { Link } from "react-router-dom";
class IteratePostings extends Component {
  state = { data: {}, loaded: false };
  componentDidMount = async () => {
    try {
      // console.log(this.state.data);

      const { data } = await http.get(
        `${url}/postings?city=${this.props.city}&region=${this.props.region}&page=${this.props.page}&typeOfHousing=${this.props.typeOfHousing}`
      );
      // console.log(data);
      this.setState({ data, loaded: true });
    } catch (ex) {
      // console.log(ex.response.data);

      this.props.setError();
    }
  };
  componentDidUpdate = async (prevProps) => {
    if (
      this.props.city !== prevProps.city ||
      this.props.region !== prevProps.region ||
      this.props.page !== prevProps.page ||
      this.props.typeOfHousing !== prevProps.typeOfHousing
    ) {
      try {
        // console.log(this.state.data);

        const { data } = await http.get(
          `${url}/postings?city=${this.props.city}&region=${this.props.region}&page=${this.props.page}&typeOfHousing=${this.props.typeOfHousing}`
        );
        // console.log(data);
        this.setState({ data, loaded: true });
      } catch (ex) {
        // console.log(ex.response.data);
        this.props.setError();
      }
    }
  };
  render() {
    const {
      city,
      region,
      page,
      typeOfHousing,
      handleChange,
      handlePrevPage,
      handleNextPage,
    } = this.props;
    return (
      <React.Fragment>
        <Grid container>
          {/* <Grid item xs={12} container>
            <Grid item xs={12}>
              <SocialIcon url="https://www.facebook.com/rooftailcanada" />
              <SocialIcon url="https://instagram.com/rooftail_canada?igshid=ncjvwlnab2zv" />
            </Grid>
          </Grid> */}
          <Grid item xs={12}>
            <Grid item xs={11}>
              <Link to="/create">
                <span
                  style={{ float: "right" }}
                  className="badge badge-success"
                >
                  Create Posting
                </span>
              </Link>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid item xs={12}>
            <Selection
              handleChange={handleChange}
              city={city}
              region={region}
              typeOfHousing={typeOfHousing}
            />
          </Grid>
          <Grid item xs={12} container>
            {this.props.error === "" ? (
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
                    {this.props.error}
                  </Typography>
                </div>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default IteratePostings;
