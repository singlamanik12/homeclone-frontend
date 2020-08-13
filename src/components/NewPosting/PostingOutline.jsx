import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import TextField from "@material-ui/core/TextField";
class PostingOutline extends Component {
  state = {};

  render() {
    const { handleChange, values, nextStep } = this.props;

    return (
      <>
        <Grid container>
          <Grid item lg={3} xs={1} container></Grid>
          <Grid item lg={9} xs={10} container direction="column">
            <h1>Let's start!</h1>
            <br />
            {/* <h2>Outline</h2> */}
            <Grid item xs={12}>
              <h5>
                <em>Type of Housing</em>
              </h5>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Type of Housing
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={values.typeOfHousing}
                  onChange={handleChange}
                  name="typeOfHousing"
                  label="Type Of Housing"
                  required
                >
                  <MenuItem value="">
                    <em>Select type</em>
                  </MenuItem>
                  <MenuItem value={"Full Storey"}>Full Storey</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Private Room"}>Private Room</MenuItem>
                  <MenuItem value={"Shared Room"}>Shared Room</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br />
              <h5>
                <em>Vacancies</em>
              </h5>
              <TextField
                style={{ width: "100%" }}
                id="outlined-number"
                label="Vacancies"
                type="number"
                name="totalPersonRequired"
                onChange={handleChange}
                value={values.totalPersonRequired}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <br />

              {/* {&& ( */}

              <div
                style={{ marginInlineStart: "85%", marginTop: "50px" }}
                onClick={nextStep}
              >
                <Fab
                  color="primary"
                  aria-label="add"
                  disabled={
                    // values.totalPersonRequired === "" ||
                    // values.typeOfHousing === ""
                    false
                  }
                >
                  <ArrowForwardIcon fontSize="large" />
                </Fab>
              </div>
            </Grid>
            {/* )} */}
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </>
    );
  }
}

export default PostingOutline;
