import React, { Component } from "react";
import {
  NativeSelect,
  FormControl,
  Grid,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
class RenderOptions extends Component {
  handleChange = (e) => {
    console.log(e.target.value);
  };
  state = {};
  render() {
    const { data } = this.props;
    return (
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={""}
          onChange={this.handleChange}
          label="City"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map(({ city, i }) => (
            <MenuItem key={i} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default RenderOptions;
