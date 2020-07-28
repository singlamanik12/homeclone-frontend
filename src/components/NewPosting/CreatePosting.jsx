import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PostingOutline from "./PostingOutline";
import Amenities from "./Amenities";
import Information from "./Information";
import ImageUpload from "./ImageUpload";
class CreatePosting extends Component {
  state = {
    step: 1,
    typeOfHousing: "",
    totalPersonRequired: "",
    city: "",
    state: "",
    totalBeds: "",
    typeOfBathroom: "",
    streetAddress: "",
    wifi: false,
    electricity: false,
    laundry: false,
    water: false,
    parking: false,
    microwave: false,
    refrigerator: false,
    ownerLiving: "",
    description: "",
    phoneNumber: "",
    price: "",
    region: "",
    houseNumber: "",
    verified: true,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    const { step } = this.state;
    const {
      typeOfHousing,
      totalPersonRequired,
      city,
      state,
      totalBeds,
      typeOfBathroom,
      streetAddress,
      wifi,
      electricity,
      laundry,
      water,
      parking,
      microwave,
      refrigerator,
      description,
      phoneNumber,
      price,
      region,
      ownerLiving,
      houseNumber,
    } = this.state;
    const values = {
      typeOfHousing,
      totalPersonRequired,
      city,
      state,
      totalBeds,
      typeOfBathroom,
      streetAddress,
      wifi,
      electricity,
      laundry,
      water,
      parking,
      microwave,
      refrigerator,
      description,
      phoneNumber,
      price,
      region,
      ownerLiving,
      houseNumber,
    };
    switch (step) {
      case 1:
        return (
          <Grid container>
            <Grid item xs={12} lg={7}>
              <PostingOutline
                handleChange={this.handleChange}
                values={values}
                nextStep={this.nextStep}
              />
            </Grid>
            <Grid item lg={5}></Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container>
            <Grid item xs={12} lg={7}>
              <Amenities
                handleCheck={this.handleCheck}
                handleChange={this.handleChange}
                values={values}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              ></Amenities>
            </Grid>
            <Grid item lg={5}></Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container>
            <Grid item xs={12} lg={7}>
              <Information
                handleCheck={this.handleCheck}
                handleChange={this.handleChange}
                values={values}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              ></Information>
            </Grid>
            <Grid item lg={5}></Grid>
          </Grid>
        );
      case 4:
        return (
          <Grid container>
            <Grid item xs={12} lg={7}>
              <ImageUpload></ImageUpload>
            </Grid>
            <Grid item lg={5}></Grid>
          </Grid>
        );
    }
  }
}

export default CreatePosting;
