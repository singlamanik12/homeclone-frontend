import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
class SmallScreenPosting extends Component {
  state = {};
  render() {
    return (
      <AppBar position="fixed" color="black" style={{ top: "auto", bottom: 0 }}>
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
    );
  }
}

export default SmallScreenPosting;
