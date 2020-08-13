import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
class DeleteUploadedImage extends Component {
  state = {};
  render() {
    const { image, handleDeleteImage } = this.props;
    return (
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => handleDeleteImage(image)}
      >
        <DeleteIcon /> Delete
      </button>
    );
  }
}

export default DeleteUploadedImage;
