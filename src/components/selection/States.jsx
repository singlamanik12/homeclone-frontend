import React from "react";

import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

const States = ({ handleChange, value }) => {
  return (
    <>
      <FormControl variant="outlined" style={{ minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          name="state"
          onChange={handleChange}
          label="State"
        >
          <MenuItem value="ON">
            <em>ON</em>
          </MenuItem>
          <MenuItem value="BC">
            <em>BC</em>
          </MenuItem>
          <MenuItem value="AB">
            <em>AB</em>
          </MenuItem>
          <MenuItem value="MB">
            <em>MB</em>
          </MenuItem>
          <MenuItem value="SK">
            <em>SK</em>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default States;
