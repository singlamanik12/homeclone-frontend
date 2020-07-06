import React, {
  Component,
  useEffect,
  useState,
  Suspense,
  ConcurrentMode,
} from "react";

import { fetchCities } from "./../../api/index";
import RenderOptions from "./RenderOptions";
class Selection extends Component {
  state = { citiesList: [] };

  componentDidMount = async () => {
    const citiesList = await fetchCities();
    console.log(citiesList);
    this.setState({ citiesList });
  };

  render() {
    return (
      <ConcurrentMode>
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <RenderOptions citiesList={this.state.citiesList} />
        </Suspense>
      </ConcurrentMode>
    );
  }
}

export default Selection;
