import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Grid from "@material-ui/core/Grid";
import ImagePreview from "./ImagePreview";
import UploadMessage from "./UploadMessage";
import SubmitPosting from "./SubmitPosting";

class ImageUpload extends Component {
  render() {
    const {
      images,
      multipleFileChangedHandler,
      handleDeleteImage,
      handleSubmitPosting,
      prevStep,
    } = this.props;
    return (
      <Grid container>
        <Grid item lg={3} xs={1} container></Grid>
        <Grid item lg={9} xs={10} container direction="column">
          <p>Please upload at least 4 images of your place</p>
          <Grid item>
            <input
              style={{ display: "none" }}
              accept="image/*"
              type="file"
              multiple
              id="contained-button-file"
              onChange={multipleFileChangedHandler}
            />

            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item container xs={12}>
            {images.length > 0 ? (
              <>
                <ImagePreview
                  images={images}
                  handleDeleteImage={handleDeleteImage}
                />
              </>
            ) : (
              <UploadMessage></UploadMessage>
            )}
          </Grid>

          <Grid item xs={12} container style={{ marginBottom: "0px" }}>
            <Grid item>
              <div onClick={prevStep}>
                <Fab color="primary" aria-label="add" disabled={false}>
                  <ArrowBackIcon fontSize="large" />
                </Fab>
              </div>
            </Grid>
            <Grid item xs={6} lg={8} />
            <Grid item>
              <SubmitPosting
                images={images}
                handleSubmitPosting={handleSubmitPosting}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ImageUpload;
