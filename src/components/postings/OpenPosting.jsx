import React, { Component } from "react";
import http from "../../services/httpServices";
import ImageGrid from "./ImageGrid";
class OpenPosting extends Component {
  state = {};
  componentDidMount = async () => {
    console.log(
      await http.get(
        `http://apiforrenting.herokuapp.com/posting?id=${this.props.match.params.id}`
      )
    );
  };
  render() {
    return <ImageGrid />;
  }
}

export default OpenPosting;
