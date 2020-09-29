import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import DeleteUploadedImage from "./DeleteUploadedImage";
class ImagePreview extends Component {
  state = {};
  render() {
    const { images, handleDeleteImage } = this.props;
    return images.map((image) => (
      <>
        <Grid item xs={12} lg={6}>
          <Card
            style={{
              marginBottom: "50px",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            <CardMedia
              image={image}
              style={{ height: 0, paddingTop: "100%" }}
            ></CardMedia>
            <CardContent>
              <DeleteUploadedImage
                image={image}
                handleDeleteImage={handleDeleteImage}
              />
            </CardContent>
          </Card>
        </Grid>
      </>
    ));
  }
}

export default ImagePreview;
