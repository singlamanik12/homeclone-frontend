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

    // window.addEventListener("resize", () => {
    //   if (window.innerWidth <= 600) {
    //     this.setState({ isMobile: true });
    //   } else {
    //     this.setState({ isMobile: false });
    //   }
    // });
    console.log(
      await http.get(
        `http://apiforrenting.herokuapp.com/posting?id=${this.props.match.params.id}`
      )
    );
  };

  render() {
    console.log(window.matchMedia("(max-width: 600px)"));
    return this.state.isMobile ? <SmallScreenPosting /> : <BigScreenPosting />;
  }
}

export default OpenPosting;

// class OpenPosting extends Component {
//   state = { isMobile: false };
//   componentDidMount = async () => {
//     this.setState({ height: window.innerWidth });
//     console.log(
//       await http.get(
//         `http://apiforrenting.herokuapp.com/posting?id=${this.props.match.params.id}`
//       )
//     );
//   };
//   render() {
//     return useMediaQuery("(min-width:600px)") ? (
//       <BigScreenPosting />
//     ) : (
//       <SmallScreenPosting />
//     );
//   }
// }

// export default OpenPosting;
