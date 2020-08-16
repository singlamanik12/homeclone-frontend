import React from "react";
import Grid from "@material-ui/core/Grid";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Link } from "react-router-dom";
const Footer = () => (
  <div className="footer">
    <small style={{ color: "white" }}>
      {" "}
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={9}>
          <CopyrightIcon />
          2020 Rooftail Technologies Inc.
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/privacy"
            style={{ color: "white", textDecoration: "none" }}
          >
            Privacy
          </Link>{" "}
          |{" "}
          <Link to="/terms" style={{ color: "white", textDecoration: "none" }}>
            Terms
          </Link>
        </Grid>
      </Grid>
    </small>
  </div>
);

export default Footer;
