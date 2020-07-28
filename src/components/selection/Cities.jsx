import React, { Component } from "react";
import data from "../../tools/cities.json";
import {
  NativeSelect,
  FormControl,
  Grid,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import axios from "axios";

const RenderOptions = ({ handleChange, value }) => {
  return (
    <>
      <FormControl variant="outlined" style={{ minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          name="city"
          onChange={handleChange}
          label="City"
        >
          {data.map((data) => (
            <MenuItem value={data.city}>{data.city}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default RenderOptions;
