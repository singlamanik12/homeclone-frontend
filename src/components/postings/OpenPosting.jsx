import React, { Component } from "react";

import BigScreenPosting from "./BigScreenPosting";
import SmallScreenPosting from "./SmallScreenPosting";
class OpenPosting extends Component {
  state = {
    isMobile: window.matchMedia("(max-width: 600px)").matches,
    data: [],
  };

  componentDidMount = async () => {
    const mql = window.matchMedia("(max-width: 600px)");
    let isMobile;
    mql.addEventListener("change", (e) => {
      isMobile = e.matches;
      this.setState({ isMobile });
    });
  };

  render() {
    // console.log(window.matchMedia("(max-width: 600px)"));
    return this.state.isMobile ? (
      <SmallScreenPosting id={this.props.match.params.id} />
    ) : (
      <BigScreenPosting id={this.props.match.params.id} />
    );
  }
}

export default OpenPosting;
