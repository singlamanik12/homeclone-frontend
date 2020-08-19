import React, { Component } from "react";
import http from "../../services/httpServices";
import ImageGrid from "./ImageGrid";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import HotelIcon from "@material-ui/icons/Hotel";
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
class BigScreenPosting extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12} container style={{ marginBottom: "50px" }}>
        <Grid item lg={1}></Grid>
        <Grid item xs={12} lg={10} container direction="column">
          <Grid item xs={12} container style={{ marginTop: "30px" }}>
            <br />

            <Grid item xs={12} style={{ marginBottom: "20px" }}>
              <ImageGrid />
            </Grid>

            <Grid
              item
              xs={12}
              style={{ marginTop: "10px", marginBottom: "10px" }}
            ></Grid>
            <Grid item xs={12} container>
              <Grid item xs={8} container direction="container">
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    style={{ fontFamily: "Noto Sans JP" }}
                  >
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
                  xs={10}
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  <Divider />
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{ fontFamily: "Noto Sans JP" }}
                    >
                      Posted By Manik Singla
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Avatar style={{ width: "60px", height: "60px" }}>M</Avatar>
                  </Grid>
                </Grid>

                <Grid item xs={10} style={{ marginTop: "20px" }}>
                  <Divider />
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  style={{ marginTop: "20px" }}
                  direction="container"
                >
                  <Grid item xs={12} container>
                    <Avatar>
                      <HomeIcon style={{ color: "black" }} />
                    </Avatar>

                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
                      gutterBottom
                    >
                      Private Room
                    </Typography>
                  </Grid>

                  <Grid item xs={12} container style={{ marginTop: "10px" }}>
                    <Avatar>
                      <CallIcon style={{ color: "black" }} />
                    </Avatar>

                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
                      gutterBottom
                    >
                      +17057703061
                    </Typography>
                  </Grid>
                  <Grid item xs={12} container style={{ marginTop: "10px" }}>
                    <Avatar>
                      <LocalParkingIcon style={{ color: "black" }} />
                    </Avatar>

                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
                      gutterBottom
                    >
                      Parking Available
                    </Typography>
                  </Grid>
                  <Grid item xs={12} container style={{ marginTop: "10px" }}>
                    <Avatar>
                      <HotelIcon style={{ color: "black" }} />
                    </Avatar>

                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
                      gutterBottom
                    >
                      1 Person
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  <Divider />
                </Grid>

                <Grid item xs={10} container>
                  <Typography
                    variant="h6"
                    style={{ fontFamily: "Noto Sans JP" }}
                    gutterBottom
                  >
                    Some points of difference .....
                  </Typography>
                  The Hideaway is an older small cottage but with a fully redone
                  interior in 2018. • About the size of a 1 bedroom condo. • 5
                  minutes to The Cambridge Mill & The Galt Country Club, 10
                  minutes to Langdon Hall. • Hospital, Police & Fire are all
                  within a mile. Downtown Kitchener is 17 minutes, Waterloo 21
                  min, Cambridge 5 min. • The futon in your lounge has bedding
                  if you want the queen size Casper for yourself. There is NO
                  KITCHEN but you do have a microwave, toaster oven, fridge,
                  Kurig coffee maker, tea kettle and all dishes, glassware and
                  cutlery. You aren't coming to cook but to enjoy. There are 2
                  kayaks and two bikes for you to enjoy. If you enjoy art, there
                  are four originals in The Hideaway. I'll tell you about the
                  artists. Guest access We have 150ft of grape vines, a huge
                  apple tree, plums, pears & veggies. Help yourself. The jam
                  from our plums won 1st Prize at the Rockton World Fair. The
                  property is an acre with over 100 trees. You'll find lots of
                  space to stretch out. There's a beautiful lake behind us and
                  I'm positive you'll love it. There is a sand beach 200 yards
                  down the lake or (if you're a good swimmer) swim and kayak
                  right behind The Hideaway.
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  <Divider />
                </Grid>
                <Grid item xs={12} container>
                  <Typography
                    variant="h6"
                    style={{ fontFamily: "Noto Sans JP" }}
                  >
                    Amenities Included
                  </Typography>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
                      gutterBottom
                    >
                      <img
                        src="https://img.icons8.com/office/40/000000/water.png"
                        style={{ marginRight: "10px", width: "45px" }}
                      />
                      Water
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP" }}
                      gutterBottom
                    >
                      <img
                        src="https://img.icons8.com/cotton/64/000000/electricity.png"
                        style={{ marginRight: "10px", width: "45px" }}
                      />
                      Electricity
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP" }}
                      gutterBottom
                    >
                      <img
                        src="https://img.icons8.com/color/48/000000/wifi.png"
                        style={{ marginRight: "10px", width: "45px" }}
                      />
                      WiFi
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP" }}
                      gutterBottom
                    >
                      <img
                        src="https://img.icons8.com/officel/40/000000/washing-machine.png"
                        style={{ marginRight: "10px", width: "45px" }}
                      />
                      Laundry
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP" }}
                      gutterBottom
                    >
                      <img
                        src="https://img.icons8.com/color/48/000000/fridge.png"
                        style={{ marginRight: "10px", width: "45px" }}
                      />
                      Referigerator
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontFamily: "Noto Sans JP" }}
                      gutterBottom
                    >
                      <img
                        src="https://img.icons8.com/ultraviolet/40/000000/toaster-oven.png"
                        style={{ marginRight: "10px", width: "45px" }}
                      />
                      Microwave
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
                container
                direction="container"
                style={{ marginTop: "50px" }}
              >
                <Grid item xs={12}>
                  <Card>
                    <CardHeader
                      title={
                        <Typography
                          variant="h5"
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
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      style={{ fontFamily: "Noto Sans JP" }}
                    >
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
                      <FacebookIcon
                        size={32}
                        round={true}
                        style={{ marginLeft: "5px" }}
                      />
                    </FacebookShareButton>
                  </Grid>
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
