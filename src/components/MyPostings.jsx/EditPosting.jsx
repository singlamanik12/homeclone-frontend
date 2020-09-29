import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Typography } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

class EditPosting extends Component {
  state = {
    expanded: false,
  };
  componentDidMount = () => {
    // console.log(this.props.data);
  };
  postingpage = () => {
    // console.log("Manik");
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <Card style={{ maxWidth: "100%" }}>
          <CardActionArea
            style={{ textDecoration: "none" }}
            component={RouterLink}
            to={`/preview_edit_posting/${data._id}`}
          >
            <CardMedia
              style={{ height: 0, paddingTop: "56.25%" }}
              image={data.images[0]}
              title="Paella dish"
            />

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom={true}
                style={{ color: "black" }}
              >
                {"$" + data.price + " /month"}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "black" }}>
                {data.typeOfBathroom + " " + data.typeOfHousing}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {"Available Space : " + data.totalPersonRequired}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {data.streetAddress}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
}

export default EditPosting;
