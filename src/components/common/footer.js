import React from "react";
import Grid from "@material-ui/core/Grid";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
const Footer = () => (
  <div className="footer">
    <small style={{ color: "white" }}>
      {" "}
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <CopyrightIcon />
          2020 Rooftail Technologies Inc.
          <div style={{ float: "right", marginRight: "10px" }}>
            <Link
              to="/privacy"
              style={{ color: "white", textDecoration: "none" }}
            >
              Privacy
            </Link>{" "}
            |{" "}
            <Link
              to="/terms"
              style={{ color: "white", textDecoration: "none" }}
            >
              Terms
            </Link>
          </div>
        </Grid>
      </Grid>
    </small>
  </div>
);

export default Footer;
