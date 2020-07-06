import React, { Component } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
const RenderOptions = ({ citiesList }) => {
  return (
    <FormControl>
      <NativeSelect>
        <option value="manik">Choose a city...</option>
        {citiesList.map((city) => (
          <option value={city}>{city}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default RenderOptions;
