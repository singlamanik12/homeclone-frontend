import React, { Component } from "react";
class MobileCarousel extends Component {
  state = {};
  render() {
    const { images } = this.props;
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          {images.map(
            (image, index) =>
              index > 0 && (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={index}
                ></li>
              )
          )}
          {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> */}
          {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={images[0]}
              alt="First slide"
              style={{
                height: "350px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          {images.map(
            (image, index) =>
              index > 0 && (
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="Second slide"
                    style={{
                      height: "350px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              )
          )}

          {/* <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://rooftailcanada.s3.amazonaws.com/2b9facf9f111847ea60f14576d9b4c93a6c9630c"
              alt="Third slide"
              style={{
                height: "350px",
                width: "350px",
                objectFit: "contain",
              }}
            />
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default MobileCarousel;
