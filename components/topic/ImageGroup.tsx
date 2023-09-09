import React from "react"
import { Container, Carousel } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// TODO: Should accept an array of image links which are displayed here

const ImageGroup = () => {
  return (
    <Container className="w-100 d-flex justify-content-center">
      <ImageGrid />
      <ImageCarousel />
    </Container>
  )
}

const ImageGrid = () => {
  return (
    <div className="w-100 d-flex flex-column gap-3 d-none d-md-flex my-3">
      <Row>
        <Col>
          <div className="placeholder-image"></div>
        </Col>
        <Col>
          <div className="placeholder-image"></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="placeholder-image"></div>
        </Col>
        <Col>
          <div className="placeholder-image"></div>
        </Col>
      </Row>
    </div>
  )
}

const ImageCarousel = () => {
  return (
    <Carousel id="image-carousel" className="w-100 d-md-none" interval={null}>
      <Carousel.Item>
        <div className="placeholder-image"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="placeholder-image"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="placeholder-image"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="placeholder-image"></div>
      </Carousel.Item>
    </Carousel>
  )
}

export default ImageGroup
