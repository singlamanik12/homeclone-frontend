import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Typography } from "@material-ui/core";
class Amenities extends Component {
  state = {};
  render() {
    const {
      handleChange,
      values,
      handleCheck,
      nextStep,
      prevStep,
    } = this.props;
    return (
      <Grid container>
        <Grid item lg={3} xs={1} container></Grid>

        <Grid item lg={9} xs={10} container direction="column">
          <Typography
            variant="h3"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            Basic Details
          </Typography>
          <br />
          <Typography
            variant="h6"
            style={{ fontFamily: "Noto Sans JP" }}
            gutterBottom
          >
            Basic Amenities
          </Typography>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.wifi}
                  onChange={handleCheck}
                  value={values.wifi}
                  name="wifi"
                  color="primary"
                />
              }
              label="Wi-Fi"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.electricity}
                  onChange={handleCheck}
                  value={values.electricity}
                  name="electricity"
                  color="primary"
                />
              }
              label="Electricity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.water}
                  onChange={handleCheck}
                  value={values.water}
                  name="water"
                  color="primary"
                />
              }
              label="Water"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.laundry}
                  onChange={handleCheck}
                  value={values.laundry}
                  name="laundary"
                  color="primary"
                />
              }
              label="Laundry"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.parking}
                  onChange={handleCheck}
                  value={values.parking}
                  name="parking"
                  color="primary"
                />
              }
              label="Parking"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={values.refrigerator}
                  onChange={handleCheck}
                  value={values.refrigerator}
                  name="refrigerator"
                  color="primary"
                />
              }
              label="Refrigerator"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={values.microwave}
                  onChange={handleCheck}
                  value={values.microwave}
                  name="microwave"
                  color="primary"
                />
              }
              label="Microwave"
            />
            <br />
            <Typography
              variant="h6"
              style={{ fontFamily: "Noto Sans JP" }}
              gutterBottom
            >
              Type Of Bathroom
            </Typography>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Type of Bathroom
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={values.typeOfBathroom}
                onChange={handleChange}
                name="typeOfBathroom"
                label="Type Of Bathroom"
                required
              >
                <MenuItem value="">
                  <em>Select type</em>
                </MenuItem>

                <MenuItem value={"Private"}>Private</MenuItem>
                <MenuItem value={"Shared"}>Shared</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <Typography
              variant="h6"
              style={{ fontFamily: "Noto Sans JP" }}
              gutterBottom
            >
              Additional Information
            </Typography>
            <TextareaAutosize
              style={{ width: "100%" }}
              aria-label="minimum height"
              rowsMin={6}
              placeholder="Description..."
              onChange={handleChange}
              name="description"
              value={values.description}
            />
            <br />
            <br />
            <Typography
              variant="h6"
              style={{ fontFamily: "Noto Sans JP" }}
              gutterBottom
            >
              Price per month
            </Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={values.price}
                onChange={handleChange}
                type="number"
                name="price"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={40}
              />
            </FormControl>
            <br />
            <br />
            <br />
            <Grid item xs={12} container style={{ marginBottom: "30px" }}>
              <Grid item>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={prevStep}
                >
                  Back
                </button>
              </Grid>
              <Grid item xs={7} lg={9} />
              <Grid item>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={nextStep}
                  disabled={values.price === "" || values.typeOfBathroom === ""}
                >
                  Next
                </button>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Amenities;
