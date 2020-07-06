import React, { Component, useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCities } from "./../../api/index";
const Selection = () => {
  const [citiesList, setCitiesList] = useState([]);
  useEffect(() => {
    const fetchedCities = async () => {
      setCitiesList(await fetchCities());
    };
    fetchedCities();
  });

  return (
    citiesList && (
      <FormControl>
        <NativeSelect>
          <option value="manik">Choose a city...</option>
          {citiesList &&
            citiesList.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
    )
  );
};

export default Selection;
