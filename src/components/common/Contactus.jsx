import React, { Component } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import * as services from "./../../services/Services";
class Contactus extends Component {
  state = { subject: "", body: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async () => {
    try {
      await services.contact(this.state.subject, this.state.body);
      window.location = "/";
    } catch (ex) {
      console.log(ex);
    }
  };
  render() {
    return (
      <Grid container direction="row">
        <Grid item xs={2} container></Grid>

        <Grid item xs={8} container>
          <Grid item xs={12}>
            <TextField
              id="outlined-full-width"
              label="Subject"
              placeholder="Subject"
              fullWidth
              name="subject"
              margin="normal"
              multiline
              variant="outlined"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "30px" }}>
            <TextField
              id="outlined-multiline-static"
              label="Body"
              name="body"
              placeholder="Any suggestion or complaint"
              multiline
              fullWidth
              rows={6}
              variant="outlined"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "30px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right" }}
              endIcon={<SendIcon />}
              onClick={this.handleSubmit}
            >
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={2} container></Grid>
      </Grid>
    );
  }
}

export default Contactus;
