import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
class PostingOutline extends Component {
  state = {};

  render() {
    const { handleChange, values, nextStep } = this.props;

    return (
      <>
        <Grid container>
          <Grid item lg={3} xs={1} container></Grid>
          <Grid item lg={9} xs={10} container direction="column">
            <Typography
              variant="h3"
              style={{ fontFamily: "Noto Sans JP" }}
              gutterBottom
            >
              Let's start
            </Typography>
            <br />
            {/* <h2>Outline</h2> */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Type Of Housing
              </Typography>
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
                  <MenuItem value={"Full Storey"}>Full Storey</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Private Room"}>Private Room</MenuItem>
                  <MenuItem value={"Shared Room"}>Shared Room</MenuItem>
                  <MenuItem value={"Condo"}>Condo</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br />
              <Typography
                variant="h6"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Vacancies
              </Typography>
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
              <br />
              <Typography
                variant="h6"
                style={{ fontFamily: "Noto Sans JP" }}
                gutterBottom
              >
                Title
              </Typography>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                onChange={handleChange}
                value={values.title}
              />

              <button
                type="button"
                className="btn btn-primary"
                onClick={nextStep}
                style={{ marginInlineStart: "85%", marginTop: "50px" }}
                disabled={
                  values.totalPersonRequired === "" ||
                  values.typeOfHousing === "" ||
                  values.title === ""
                }
              >
                Next
              </button>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </>
    );
  }
}

export default PostingOutline;
