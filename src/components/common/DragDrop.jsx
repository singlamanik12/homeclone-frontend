import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./DragDrop.module.css";
class DragDrop extends Component {
  state = {};
  render() {
    return (
      <Grid container>
        <Grid item xs={12} style={{ marginTop: "80px", marginBottom: "80px" }}>
          <div className="drop-container">
            <center>
              <div className="drop-message">
                <center>
                  <div className="upload-icon">
                    <span style={{ fontSize: "3em", color: "grey" }}>
                      <i className="fa fa-home"></i>
                    </span>
                  </div>
                  <p>Upload Min 4 files to get your house accomodate</p>
                </center>
              </div>
            </center>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default DragDrop;
