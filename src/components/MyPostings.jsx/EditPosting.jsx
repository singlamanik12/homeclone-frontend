import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Grid, Typography } from "@material-ui/core";

import ShareIcon from "@material-ui/icons/Share";

import { Link as RouterLink } from "react-router-dom";

class EditPosting extends Component {
  state = {
    expanded: false,
    date: "",
  };
  componentDidMount = () => {
    console.log(this.props.data);
  };
  postingpage = () => {
    console.log("Manik");
  };

  render() {
    const { data } = this.props;
    let date = new Date(data.createdAt);
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

          <CardActions disableSpacing>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default EditPosting;
