import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PostingOutline from "./PostingOutline";
import Amenities from "./Amenities";
import Information from "./Information";
import ImageUpload from "./ImageUpload";
import http from "../../services/httpServices";
import { getCurrentUserEmail } from "./../../services/JwtServices";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
class CreatePosting extends Component {
  state = {
    step: 1,
    typeOfHousing: "",
    totalPersonRequired: "",
    city: "",
    state: "",
    totalBeds: "123",
    typeOfBathroom: "",
    streetAddress: "",
    wifi: false,
    electricity: false,
    laundary: false,
    water: false,
    parking: false,
    microwave: false,
    refrigerator: false,
    ownerLiving: true,
    description: "",
    phoneNumber: "",
    price: "",
    region: "",
    title: "",
    verified: true,
    images: [],
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillUnmount = () => {
    this.handleClickOpen();
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
  handleDeleteImage = async (link) => {
    const images = this.state.images.filter((image) => image !== link);
    await http.post("https://apiforrenting.herokuapp.com/delete", {
      link: link,
    });
    this.setState({ images });
  };
  handleSubmitPosting = async () => {
    const { email } = getCurrentUserEmail();
    console.log(this.state.images);
    try {
      await http.post("https://apiforrenting.herokuapp.com/newposting", {
        email: email,
        typeOfHousing: this.state.typeOfHousing,
        totalPersonRequired: this.state.totalPersonRequired,
        city: this.state.city,
        state: this.state.state,
        totalBeds: this.state.totalBeds,
        typeOfBathroom: this.state.typeOfBathroom,
        streetAddress: this.state.streetAddress,
        wifi: this.state.wifi,
        electricity: this.state.electricity,
        laundary: this.state.laundary,
        water: this.state.water,
        parking: this.state.parking,
        microwave: this.state.microwave,
        refrigerator: this.state.refrigerator,
        ownerLiving: this.state.ownerLiving,
        description: this.state.description,
        phoneNumber: this.state.phoneNumber,
        price: this.state.price,
        region: this.state.region,
        images: this.state.images,
        title: this.state.title,
      });
      window.location = "/";
    } catch (ex) {
      console.log(ex);
    }
  };
  multipleFileChangedHandler = (event) => {
    const datas = new FormData();
    let selectedFiles = event.target.files;

    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        datas.append("file", selectedFiles[i], selectedFiles[i].name);
      }
    }
    http
      .post("https://apiforrenting.herokuapp.com/upload", datas, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${datas._boundary}`,
        },
      })
      .then((response) => {
        this.setState({
          images: [...this.state.images, ...response.data],
        });
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    const { step, open } = this.state;
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
      title,
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
      title,
    };

    return (
      <>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <Grid container>
          <Grid item xs={12} lg={7}>
            {
              {
                1: (
                  <PostingOutline
                    handleChange={this.handleChange}
                    values={values}
                    nextStep={this.nextStep}
                  />
                ),
                2: (
                  <Amenities
                    handleCheck={this.handleCheck}
                    handleChange={this.handleChange}
                    values={values}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                  ></Amenities>
                ),
                3: (
                  <Information
                    handleCheck={this.handleCheck}
                    handleChange={this.handleChange}
                    values={values}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                  ></Information>
                ),
                4: (
                  <ImageUpload
                    images={this.state.images}
                    multipleFileChangedHandler={this.multipleFileChangedHandler}
                    handleDeleteImage={this.handleDeleteImage}
                    handleSubmitPosting={this.handleSubmitPosting}
                    prevStep={this.prevStep}
                  ></ImageUpload>
                ),
              }[step]
            }
          </Grid>
          <Grid item lg={5}></Grid>
        </Grid>
      </>
    );
  }
}

export default CreatePosting;
