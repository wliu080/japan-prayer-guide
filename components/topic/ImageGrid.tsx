import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ImageGroup = () => {
    return (
        <Container className="w-100 d-flex justify-content-center">
            <ImageGrid/>
            <ImageCarousel/>
        </Container>
    )
}

const ImageGrid = () => {
    return (
        <div className="w-100 d-flex flex-column gap-3 d-none d-lg-flex my-3">
            <Row className="">
                <Col>
                    <div id="about-landing-image" className=""></div>
                </Col>
                <Col>
                    <div id="about-landing-image" className=""></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div id="about-landing-image" className=""></div>
                </Col>
                <Col>
                    <div id="about-landing-image" className=""></div>
                </Col>
            </Row>
        </div>
    )
}

const ImageCarousel = () => {
    return (
        <Carousel id="image-carousel" className="w-100 d-lg-none" interval={null}>
            <Carousel.Item>
                <div id="about-landing-image" className=""></div>
            </Carousel.Item>
            <Carousel.Item>
                <div id="about-landing-image" className=""></div>
            </Carousel.Item>
            <Carousel.Item>
                <div id="about-landing-image" className=""></div>
            </Carousel.Item>
            <Carousel.Item>
                <div id="about-landing-image" className=""></div>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageGroup