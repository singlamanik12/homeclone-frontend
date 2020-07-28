import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Selection from "../selection/Selection";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
class Postings extends Component {
  state = {};
  render() {
    return (
      <>
        <Grid direction="column" container>
          <Grid item xs={12}>
            <Selection />
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="h2">
                    benevbulllent
                  </Typography>
                  <Typography color="textSecondary">adjective</Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Postings;
