import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PostingOutline from "./PostingOutline";
import Amenities from "./Amenities";
import Information from "./Information";
import ImageUpload from "./ImageUpload";
import http from "../../services/httpServices";
import { getCurrentUserEmail } from "./../../services/JwtServices";
import { url } from "../../tools/config.json";
import Resizer from "react-image-file-resizer";
class CreatePosting extends Component {
  state = {
    step: 1,
    id: "",
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
    load: false,
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
    await http.post(`${url}/delete`, {
      link: link,
    });
    this.setState({ images });
  };
  handleSubmitPosting = async () => {
    const { email } = getCurrentUserEmail();
    console.log(this.state.images);
    try {
      await http.post(`${url}/newposting`, {
        id: this.state.id,
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
        date: Date.now(),
      });

      window.location = "/my_postings";
    } catch (ex) {
      // console.log(ex);
    }
  };
  startLoading = () => {
    this.setState({ load: true });
  };
  resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        680,
        320,
        "PNG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "blob",
        10,
        400
      );
    });
  multipleFileChangedHandler = async (event) => {
    const datas = new FormData();
    let selectedFiles = event.target.files;

    if (selectedFiles) {
      this.startLoading();
      // console.log(this.state.load);
      for (let i = 0; i < selectedFiles.length; i++) {
        let file = selectedFiles[i];
        let image = await this.resizeFile(file);
        datas.append("file", image, selectedFiles[i].name);
      }
    }
    http
      .post(`${url}/upload`, datas, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${datas._boundary}`,
        },
      })
      .then((response) => {
        this.setState({
          images: [...this.state.images, ...response.data],
          load: response,
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
      laundary,
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
      laundary,
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
        <Grid container>
          <Grid item xs={12} lg={7} style={{ paddingTop: "20px" }}>
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
                    load={this.state.load}
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
