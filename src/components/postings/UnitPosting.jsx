import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

import ShareIcon from "@material-ui/icons/Share";

import { Link as RouterLink } from "react-router-dom";
class UnitPosting extends Component {
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
  handleExpandClick = () => {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  };
  render() {
    const { data } = this.props;
    let date = new Date(data.createdAt);
    return (
      <Card style={{ maxWidth: "100%" }}>
        <CardActionArea
          style={{ textDecoration: "none" }}
          component={RouterLink}
          to={`/posting_details/${data._id}`}
        >
          {/* <CardHeader
            //   avatar={
            //     <Avatar aria-label="recipe" className={classes.avatar}>
            //       R
            //     </Avatar>
            //   }
            //   action={
            //     <IconButton aria-label="settings">
            //       <MoreVertIcon />
            //     </IconButton>
            //   }
            //   title="Shrimp and Chorizo Paella"
            subheader={
              "Posted on - " +
              date.getDate() +
              "/" +
              date.getMonth() +
              "/" +
              date.getFullYear()
            }
          /> */}

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
            {/* <Typography variant="body1" color="textSecondary" component="p">
              {data.city + ", " + data.state}
            </Typography> */}
          </CardContent>
        </CardActionArea>

        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <button
            type="button"
            class="btn btn-light"
            style={{
              marginLeft: "auto",
              fontSize: "15px",
              fontWeight: "lighter",
            }}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            Click to Expand
          </button>
        </CardActions>
      </Card>
    );
  }
}

export default UnitPosting;
