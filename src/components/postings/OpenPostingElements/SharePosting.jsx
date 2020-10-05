import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";
class SharePosting extends Component {
  state = {};

  render() {
    const { data } = this.props;
    const id = data._id;
    console.log(data);
    const url = `https://www.rooftail.com/posting_details/${id}`;
    return (
      <Grid item xs={12}>
        <Typography variant="body2" style={{ fontFamily: "Noto Sans JP" }}>
          Share this place with your friends on:
        </Typography>
        <br />
        <WhatsappShareButton
          url={url}
          title={`${data.typeOfHousing} available in ${data.city}, ${data.state} for $${data.price}. \nRooftail - Place to find rooms, apartments , basements.`}
          separator=""
        >
          {" "}
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <FacebookShareButton
          url={url}
          title={`${data.typeOfHousing} available in ${data.city}, ${data.state} for $${data.price}. Click for details.\n Rooftail - Place to find rooms, apartments , basements.`}
          separator=""
        >
          {" "}
          <FacebookIcon size={32} round={true} style={{ marginLeft: "5px" }} />
        </FacebookShareButton>
      </Grid>
    );
  }
}

export default SharePosting;
