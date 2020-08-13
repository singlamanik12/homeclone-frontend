import React from "react";
import Form from "../Form/Form";
import * as confirmService from "../../services/confirmService";
class Confirmation extends Form {
  state = { error: [] };
  componentDidMount = async () => {
    try {
      await confirmService.confirm(this.props.match.params.id);
      localStorage.setItem("token", this.props.match.params.id);
      this.props.history.push("/");
    } catch (error) {
      this.setState({ error: error.response.data });
    }
  };
  render() {
    return <h1>{this.state.error}</h1>;
  }
}

export default Confirmation;
