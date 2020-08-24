import React from "react";

import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

const States = ({ handleChange, values }) => {
  return (
    <>
      <FormControl variant="outlined" style={{ minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={values}
          name="state"
          onChange={handleChange}
          label="State"
        >
          <MenuItem value={"ON"}>ON</MenuItem>
          <MenuItem value={"BC"}>BC</MenuItem>
          <MenuItem value={"AB"}>AB</MenuItem>
          <MenuItem value={"MB"}>MB</MenuItem>
          <MenuItem value={"SK"}>SK</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default States;
