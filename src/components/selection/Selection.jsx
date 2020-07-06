import React, { Component, useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCities } from "./../../api/index";
class Selection extends Component {
  state = { citiesList: [] };

  componentDidMount = async () => {
    const citiesList = await fetchCities();
    this.setState({ citiesList });
  };
  render() {
    return (
      <FormControl>
        <NativeSelect>
          <option value="manik">Choose a city...</option>
          {this.state.citiesList &&
            this.state.citiesList.map((city) => (
              <option value={city}>{city}</option>
            ))}
        </NativeSelect>
      </FormControl>
    );
  }
}

export default Selection;
