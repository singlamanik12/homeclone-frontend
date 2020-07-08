import React, { Component } from "react";
import { NativeSelect, FormControl, Grid } from "@material-ui/core";
const RenderOptions = ({ data }) => {
  return (
    <FormControl>
      <NativeSelect>
        <option value="manik">Choose a city...</option>
        {data.map(({ city, i }) => (
          <option key={i} value={city}>
            {city}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default RenderOptions;
