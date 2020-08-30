import React, { Component } from "react";
import ImageGrid from "./ImageGrid";
import Grid from "@material-ui/core/Grid";
import TitleHeading from "./OpenPostingElements/TitleHeading";
import RightHandSide from "./BigScreenPostingSides.jsx/RightHandSide";
import LeftHandSide from "./BigScreenPostingSides.jsx/LeftHandSide";
import http from "../../services/httpServices";
import CircularProgress from "@material-ui/core/CircularProgress";
class BigScreenPosting extends Component {
  state = { data: {}, images: [], load: false };
  componentDidMount = async () => {
    await http
      .get(`https://apiforrenting.herokuapp.com/posting?id=${this.props.id}`)
      .then((response) =>
        this.setState({ load: response, data: response.data.posting })
      );

    // console.log(data);
    // this.setState({ data });
  };
  render() {
    const { data } = this.state;
    const { id } = this.props;
    return this.state.load ? (
      <Grid item xs={12} container style={{ marginBottom: "50px" }}>
        <Grid item lg={1}></Grid>
        <Grid item xs={12} lg={10} container direction="column">
          <Grid item xs={12} container style={{ marginTop: "20px" }}>
            <br />
            <TitleHeading id={id} data={data} />
            <Grid
              item
              xs={12}
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              <ImageGrid id={id} images={data.images} />
            </Grid>
            <Grid item xs={12} container>
              <LeftHandSide data={data} />
              <RightHandSide data={data} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1}></Grid>
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
    );
  }
}

export default BigScreenPosting;
