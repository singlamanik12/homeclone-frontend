import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ReactDOM } from "react-dom";
class SmallScreenPosting extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel showThumbs={false} showArrows={false} transitionTime={100}>
          <div>
            <img src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&w=1000&q=80" />
          </div>
          <div>
            <img src="https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
          </div>
        </Carousel>
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
              $365
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default SmallScreenPosting;
