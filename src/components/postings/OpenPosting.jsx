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
  state = { isMobile: false };
  throttledHandleWindowResize = () => {
    return throttle(() => {
      this.setState({ isMobile: window.innerWidth < 760 });
    }, 200);
  };

  componentDidMount() {
    window.addEventListener("resize", this.throttledHandleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledHandleWindowResize);
  }
  render() {
    console.log(this.state.isMobile);
    return this.state.isMobile ? <div>Mobile</div> : <div>Window</div>;
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
