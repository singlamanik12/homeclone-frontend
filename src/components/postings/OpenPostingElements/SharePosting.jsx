import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";
class SharePosting extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12}>
        <Typography variant="body2" style={{ fontFamily: "Noto Sans JP" }}>
          Share this place on:
        </Typography>
        <br />
        <WhatsappShareButton
          url="https://www.rooftail.com/home/"
          title="Rooftail is a Pvt. Ltd."
          separator=""
        >
          {" "}
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <FacebookShareButton
          url="https://www.rooftail.com/home/"
          title="Rooftail is a Pvt. Ltd."
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
