import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
class Description extends Component {
  state = {};
  render() {
    return (
      <>
        {" "}
        <Grid item xs={10}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            Some points of difference .....
          </Typography>
          The Hideaway is an older small cottage but with a fully redone
          interior in 2018. • About the size of a 1 bedroom condo. • 5 minutes
          to The Cambridge Mill & The Galt Country Club, 10 minutes to Langdon
          Hall. • Hospital, Police & Fire are all within a mile. Downtown
          Kitchener is 17 minutes, Waterloo 21 min, Cambridge 5 min. • The futon
          in your lounge has bedding if you want the queen size Casper for
          yourself. There is NO KITCHEN but you do have a microwave, toaster
          oven, fridge, Kurig coffee maker, tea kettle and all dishes, glassware
          and cutlery. You aren't coming to cook but to enjoy. There are 2
          kayaks and two bikes for you to enjoy. If you enjoy art, there are
          four originals in The Hideaway. I'll tell you about the artists. Guest
          access We have 150ft of grape vines, a huge apple tree, plums, pears &
          veggies. Help yourself. The jam from our plums won 1st Prize at the
          Rockton World Fair. The property is an acre with over 100 trees.
          You'll find lots of space to stretch out. There's a beautiful lake
          behind us and I'm positive you'll love it. There is a sand beach 200
          yards down the lake or (if you're a good swimmer) swim and kayak right
          behind The Hideaway.
        </Grid>
        <Grid item></Grid>
      </>
    );
  }
}

export default Description;
