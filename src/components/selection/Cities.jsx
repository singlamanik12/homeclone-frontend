import React from "react";
import data from "../../tools/cities.json";
import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

const RenderOptions = ({ handleChange, values }) => {
  return (
    <>
      <FormControl variant="outlined" style={{ minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={values}
          name="city"
          onChange={handleChange}
          label="City"
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {data.map((data, index) => (
            <MenuItem key={index} value={data.city}>
              {data.city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default RenderOptions;
