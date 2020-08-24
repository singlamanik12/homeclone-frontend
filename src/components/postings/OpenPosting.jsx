import React, { Component } from "react";
import http from "../../services/httpServices";

import BigScreenPosting from "./BigScreenPosting";
import SmallScreenPosting from "./SmallScreenPosting";
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
