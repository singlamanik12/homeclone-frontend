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
import BigScreenPosting from "./BigScreenPosting";
import SmallScreenPosting from "./SmallScreenPosting";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import throttle from "lodash.throttle";
class OpenPosting extends Component {
  state = { isMobile: window.matchMedia("(max-width: 600px)").matches };

  componentDidMount = async () => {
    const mql = window.matchMedia("(max-width: 600px)");
    let isMobile;
    mql.addEventListener("change", (e) => {
      isMobile = e.matches;
      this.setState({ isMobile });
    });

    const result = await http.get(
      `http://apiforrenting.herokuapp.com/posting?id=${this.props.match.params.id}`
    );
    console.log(result);
  };

  render() {
    console.log(window.matchMedia("(max-width: 600px)"));
    return this.state.isMobile ? <SmallScreenPosting /> : <BigScreenPosting />;
  }
}

export default OpenPosting;
