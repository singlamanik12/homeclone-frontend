import React, { Component } from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import BlankPage from "./../common/BlankPage";
class ImageGrid extends Component {
  state = { images: [], photos: [] };
  componentDidMount = async () => {
    let photos = [];
    this.props.images.map((image) =>
      photos.push({
        src: image,
      })
    );
    this.setState({ photos });
  };
  render() {
    const setting = {
      width: "100%",
      height: ["200px", "170px"],
      layout: [2, 3],
      photos: this.state.photos,
      showNumOfRemainingPhotos: true,
    };

    return this.state.photos.length > 0 ? (
      <ReactPhotoCollage {...setting} photos={this.state.photos} />
    ) : (
      <BlankPage />
    );
  }
}

export default ImageGrid;
