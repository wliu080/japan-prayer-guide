import React from "react";
import { Card, Container, Carousel } from "react-bootstrap";

interface Props {
    topics: string[]
}

export default function RelatedContent({topics}:Props) {
    return (
        <Container className="d-flex flex-column my-5">
            <Container className="d-flex flex-row justify-content-between align-items-center">
                <h1 className="text-primary my-4 fs-1">Other related topics</h1>
                <a href={'/topics'} className="text-secondary d-none d-md-block">View all topics</a>
            </Container>
            <CarouselSmall topics={topics}/>
            <CarouselLarge topics={topics}/>
            <a href={'/topics'} className="align-self-center my-3 text-secondary d-md-none">View all topics</a>
        </Container>
    )
}

function CarouselSmall({topics}:Props) {
    return (
        <Carousel indicators={false} interval={null} className="d-md-none">
            <Carousel.Item>
                    <div className="d-flex justify-content-around gap-2">
                    {topics.slice(0,2).map((topic) => 
                        <>
                            <Card style={{width: "308px", height: "186px"}} key={topic}>
                                <Card.Body className="m-0 p-0">
                                    <div className="w-100 bg-secondary" style={{height: "138px"}}></div>
                                </Card.Body>
                                <Card.Body className="m-2 p-1">
                                    <p>{topic}</p>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-around gap-2">
                    {topics.slice(2,4).map((topic) => 
                        <>
                            <Card style={{width: "308px", height: "186px"}} key={topic}>
                                <Card.Body className="m-0 p-0">
                                    <div className="w-100 bg-secondary" style={{height: "138px"}}></div>
                                </Card.Body>
                                <Card.Body className="m-2 p-1">
                                    <p>{topic}</p>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-around gap-2">
                    {topics.slice(4,6).map((topic) => 
                        <>
                            <Card style={{width: "308px", height: "186px"}} key={topic}>
                                <Card.Body className="m-0 p-0">
                                    <div className="w-100 bg-secondary" style={{height: "138px"}}></div>
                                </Card.Body>
                                <Card.Body className="m-2 p-1">
                                    <p>{topic}</p>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                    </div>
                </Carousel.Item>
        </Carousel>
    )
}

function CarouselLarge({topics}:Props) {
    return (
        <Carousel indicators={false} interval={null} className="d-none d-md-block">
                <Carousel.Item>
                    <div className="d-flex justify-content-around gap-2">
                    {topics.slice(0,4).map((topic) => 
                        <>
                            <Card style={{width: "308px", height: "186px"}} key={topic}>
                                <Card.Body className="m-0 p-0">
                                    <div className="w-100 bg-secondary" style={{height: "138px"}}></div>
                                </Card.Body>
                                <Card.Body className="m-2 p-1">
                                    <p>{topic}</p>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-around gap-2">
                    {topics.slice(2,6).map((topic) => 
                        <>
                            <Card style={{width: "308px", height: "186px"}} key={topic}>
                                <Card.Body className="m-0 p-0">
                                    <div className="w-100 bg-secondary" style={{height: "138px"}}></div>
                                </Card.Body>
                                <Card.Body className="m-2 p-1">
                                    <p>{topic}</p>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                    </div>
                </Carousel.Item>
            </Carousel>
    )
}