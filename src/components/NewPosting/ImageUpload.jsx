import React, { Component, lazy, Suspense } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Grid from "@material-ui/core/Grid";

import UploadMessage from "./UploadMessage";
import SubmitPosting from "./SubmitPosting";
import { Typography } from "@material-ui/core";
const ImagePreview = lazy(() => import("./ImagePreview"));
class ImageUpload extends Component {
  render() {
    const {
      images,
      multipleFileChangedHandler,
      handleDeleteImage,
      handleSubmitPosting,
      prevStep,
      load,
    } = this.props;
    return (
      <Grid container style={{ marginBottom: "50px" }}>
        <Grid item lg={3} xs={1} container></Grid>
        <Grid item lg={9} xs={10} container>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "Noto Sans JP", margin: "5px" }}
              gutterBottom
            >
              Please upload at least 4 images of your place
            </Typography>
          </Grid>
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
            {load ? (
              <>
                <Suspense
                  fallback={
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <CircularProgress color="secondary" />
                    </div>
                  }
                >
                  {images.length > 0 && (
                    <ImagePreview
                      images={images}
                      handleDeleteImage={handleDeleteImage}
                    />
                  )}
                </Suspense>
              </>
            ) : (
              <UploadMessage></UploadMessage>
            )}
          </Grid>

          <Grid item xs={12} container style={{ marginBottom: "0px" }}>
            <Grid item>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={prevStep}
              >
                Back
              </button>
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
