import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Grid } from "@material-ui/core";
import TitleHeading from "./OpenPostingElements/TitleHeading";
import PostedBy from "./OpenPostingElements/PostedBy";
import MainInformation from "./OpenPostingElements/MainInformation";
import AmenitiesIncluded from "./OpenPostingElements/AmenitiesIncluded";
import Description from "./OpenPostingElements/Description";
import CustomDivider from "./OpenPostingElements/CustomDivider";
import http from "../../services/httpServices";
import CircularProgress from "@material-ui/core/CircularProgress";
import { url } from "../../tools/config.json";
import SharePosting from "./OpenPostingElements/SharePosting";
import MobileCarousel from "./MobileCarousel";
class SmallScreenPosting extends Component {
  state = { data: {}, images: [], load: false, lata: {} };
  componentDidMount = async () => {
    try {
      await http
        .get(`${url}/posting?id=${this.props.id}`)
        .then((response) =>
          this.setState({ load: response, data: response.data.posting })
        );
    } catch (ex) {
      window.location = "/";
    }
    // console.log(data);
    // this.setState({ data });
  };
  render() {
    const { data } = this.state;
    return this.state.load ? (
      <React.Fragment>
        {/* <Carousel showThumbs={false} showArrows={false} transitionTime={200}>
          {data.images.map((image) => (
            <div>
              <img src={image} alt="Retry to load" />
            </div>
          ))}
        </Carousel> */}
        <MobileCarousel images={data.images} />
        <Grid container>
          <Grid item xs={1} container></Grid>
          <Grid
            item
            xs={11}
            container
            // direction="column"
            spacing={3}
            style={{ marginBottom: "100px" }}
          >
            <Grid item xs={12} container>
              <TitleHeading data={data} />
            </Grid>
            <Grid item xs={12} container>
              <PostedBy owner={this.state.load.data.owner} />
            </Grid>
            <Grid item xs={12} container>
              <CustomDivider />
            </Grid>
            <Grid item xs={12} container>
              <SharePosting data={data} />
            </Grid>
            <Grid item xs={12} container>
              <CustomDivider />
            </Grid>
            <Grid item xs={12} container>
              <MainInformation data={data} />
            </Grid>
            <Grid item xs={12} container>
              <CustomDivider />
            </Grid>
            <Grid item xs={12} container>
              <Description data={data} />
            </Grid>
            <Grid item xs={12} container>
              <CustomDivider />
            </Grid>
            <Grid item xs={12} container>
              <AmenitiesIncluded data={data} />
            </Grid>
          </Grid>
        </Grid>

        <AppBar
          position="fixed"
          color="black"
          style={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <div style={{ flexGrow: 1 }} />
            <Typography
              variant="h3"
              style={{ fontFamily: "Noto Sans JP", color: "#cc0000" }}
            >
              ${data.price}
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
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
    );
  }
}

export default SmallScreenPosting;
