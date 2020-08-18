import React, { Component } from "react";
import http from "../../services/httpServices";
import ImageGrid from "./ImageGrid";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
class BigScreenPosting extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12} container style={{ marginBottom: "50px" }}>
        <Grid item lg={1}></Grid>
        <Grid item xs={12} lg={10} container direction="column">
          <Grid item xs={12} container style={{ marginTop: "30px" }}>
            <br />
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "Noto Sans JP" }}
              gutterBottom
            >
              Private Room
            </Typography>
            <Grid item xs={12} style={{ marginBottom: "20px" }}>
              <ImageGrid />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" style={{ fontFamily: "Noto Sans JP" }}>
                Shinchan's House
              </Typography>

              <Typography
                variant="body2"
                style={{ fontFamily: "Noto Sans JP" }}
                guuterBottom
              >
                Tokyo, Japan
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <Divider />
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={8} container direction="container">
                <Grid item xs={12} container>
                  <Grid item xs={10}>
                    <Typography
                      variant="h6"
                      style={{ fontFamily: "Noto Sans JP" }}
                    >
                      Posted By Manik Singla
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Avatar style={{ width: "60px", height: "60px" }}>M</Avatar>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <WhatsappShareButton
                    url="https://www.rooftail.com"
                    title="Rooftail is a Pvt. Ltd."
                    separator=""
                  >
                    {" "}
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                </Grid>
                <Grid item xs={12}>
                  <Divider variant="middle" />
                </Grid>
              </Grid>
              <Grid item xs={4} container direction="container">
                <Grid item xs={12}>
                  <Card>
                    <CardHeader
                      title={
                        <Typography
                          variant="h4"
                          style={{ fontFamily: "Noto Sans JP" }}
                        >
                          Pricing
                        </Typography>
                      }
                      subheader={
                        <Typography
                          variant="caption"
                          style={{ fontFamily: "Noto Sans JP" }}
                        >
                          /month
                        </Typography>
                      }
                    ></CardHeader>
                    <Divider variant="middle" />
                    <CardContent>
                      <Typography
                        variant="h3"
                        style={{ fontFamily: "Noto Sans JP", color: "#cc0000" }}
                      >
                        $365
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    );
  }
}

export default BigScreenPosting;
