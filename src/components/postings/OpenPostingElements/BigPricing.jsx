import React, { Component } from "react";
import {
  Grid,
  Divider,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
class BigPricing extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={
              <Typography variant="h5" style={{ fontFamily: "Noto Sans JP" }}>
                Pricing
              </Typography>
            }
            subheader={
              <Typography
                variant="caption"
                style={{ fontFamily: "Noto Sans JP" }}
              >
                /month
              </Typography>
            }
          ></CardHeader>
          <Divider variant="middle" />
          <CardContent>
            <Typography
              variant="h3"
              style={{ fontFamily: "Noto Sans JP", color: "#cc0000" }}
            >
              $365
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default BigPricing;
