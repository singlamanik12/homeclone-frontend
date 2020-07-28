import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import Button from "@material-ui/core/Button";
import $ from "jquery";
import http from "../../services/httpServices";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedFile: null,
      selectedFiles: null,
    };
  }

  multipleFileChangedHandler = (event) => {
    this.setState({
      selectedFiles: event.target.files,
    });
    console.log(event.target.files);
  };

  multipleFileUploadHandler = () => {
    const datas = new FormData();
    let selectedFiles = this.state.selectedFiles;

    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        datas.append("file", selectedFiles[i], selectedFiles[i].name);
      }
    }
    http
      .post("http://apiforrenting.herokuapp.com/upload", datas, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${datas._boundary}`,
        },
      })
      .then((response) => {
        this.setState({
          images: [...this.state.images, [response.data]],
        });
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          {/* For Alert box*/}
          <div id="oc-alert-container"></div>

          {/* Multiple File Upload */}
          <div
            className="card border-light mb-3"
            style={{ boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)" }}
          >
            <div className="card-header">
              <h3 style={{ color: "#555", marginLeft: "12px" }}>
                Upload Muliple Images
              </h3>
              <p className="text-muted" style={{ marginLeft: "12px" }}>
                Upload Size: 400px x 400px ( Max 2MB )
              </p>
            </div>
            <div className="card-body">
              <p className="card-text">
                Please upload the Gallery Images for your gallery
              </p>
              <input
                type="file"
                multiple
                onChange={this.multipleFileChangedHandler}
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={this.multipleFileUploadHandler}
                >
                  Upload!
                </button>
                <img
                  src={this.state.images[0]}
                  height="100px"
                  width="100px"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
