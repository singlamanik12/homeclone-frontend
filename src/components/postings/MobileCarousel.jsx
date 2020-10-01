import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
class MobileCarousel extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { images } = this.props;
    return (
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Second slide"
              style={{
                height: "250px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default MobileCarousel;
