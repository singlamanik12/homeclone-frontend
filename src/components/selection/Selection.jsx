import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import data from "../../tools/cities.json";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  NativeSelect,
} from "@material-ui/core";
class Selection extends Component {
  state = { data: null, citiesList: [], loaded: false };

  handleChange = (e) => {};

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "10px" }}
          >
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={5} md={4}>
              <FormControl variant="outlined" style={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Area
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.props.city}
                  name="city"
                  onChange={this.props.handleChange}
                  label="City"
                >
                  <MenuItem value="All">
                    <em>Select</em>
                  </MenuItem>
                  {data.map((data, index) => (
                    <MenuItem key={index} value={data.city}>
                      {data.city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={5} md={4}>
              <FormControl variant="outlined" style={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.props.region}
                  onChange={this.props.handleChange}
                  label="Region"
                  name="region"
                >
                  <MenuItem value="All">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value={"North"}>North</MenuItem>
                  <MenuItem value={"South"}>South</MenuItem>
                  <MenuItem value={"Downtown"}>Downtown (Central)</MenuItem>
                  <MenuItem value={"East"}>East</MenuItem>
                  <MenuItem value={"West"}>West</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1} md={3}>
              {/* <Filter
                value={this.props.typeOfHousing}
                handleChange={this.props.handleChange}
              /> */}
            </Grid>
            {/* <Grid item xs={1}></Grid> */}
          </Grid>
          <Grid item xs={12} container style={{ marginTop: "10px" }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              {"Select type of housing:   "}
              <FormControl style={{ marginLeft: "10px", marginBottom: "20px" }}>
                <NativeSelect
                  value={this.props.typeOfHousing}
                  onChange={this.props.handleChange}
                  name="typeOfHousing"
                  // className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Type Of Housing" }}
                >
                  <option value="All">Select</option>
                  <option value={"Full Storey"}>Full Storey</option>
                  <option value={"Apartment"}>Apartment</option>
                  <option value={"Private Room"}>Private Room</option>
                  <option value={"Shared Room"}>Shared Room</option>
                  <option value={"Condo"}>Condo</option>
                </NativeSelect>
                {/* <FormHelperText>With visually hidden label</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          {/* <Grid item xs={12} style={{ marginTop: "6px" }}>
            <div
              className="alert alert-light alert-dismissible fade show"
              role="alert"
              style={{ fontSize: "15px", padding: "1px" }}
            >
              Want to post your place ,<Link to="/create">Click here</Link>
              
            </div>
          </Grid> */}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Selection;
