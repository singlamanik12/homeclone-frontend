import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import UnitPosting from "./UnitPosting";
import Navigation from "./Navigation";
import Selection from "./../selection/Selection";
import Footer from "./../common/footer";
import { Link } from "react-router-dom";
class IteratePostings extends Component {
  render() {
    const {
      city,
      region,
      page,
      typeOfHousing,
      handleChange,
      handlePrevPage,
      handleNextPage,
      data,
      loaded,
      error,
    } = this.props;
    return (
      <React.Fragment>
        <Grid container style={{ marginTop: "20px" }}>
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
            {error === "" ? (
              <>
                <Grid container>
                  <Grid item md={1}></Grid>
                  <Grid item xs={12} md={8} container>
                    {loaded ? (
                      data.postings.map((item) => (
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
                    {loaded && (
                      <Navigation
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        page={page}
                        hasNextPage={data.hasnextpage}
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
                    {error}
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
