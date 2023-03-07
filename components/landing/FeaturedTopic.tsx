import React from "react";
import { Container, Card } from "react-bootstrap";
import {FaPrayingHands} from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import Button from "react-bootstrap/Button";

export default function FeaturedTopic({title, prayerPoints}:any) {
    return (
        <Container className="d-flex justify-content-center">
            <Card className="my-4 shadow d-lg-flex flex-lg-row">
                {/* temporary height for image, before we finalize images */}
                <Card.Img variant="top" src="/bamboo.jpeg" style={{height:'300px', maxWidth: '600px'}}></Card.Img>
                <Card.Body style={{maxWidth: '600px'}}>
                    <Card.Text className="px-2 pb-3 fs-2 fst-italic fw-bold border-bottom border-grey">
                        {title}
                    </Card.Text>
                    <Card.Text className="d-flex align-items-center gap-2 text-secondary">
                        <IconContext.Provider value={{size:'20px'}}>
                            <FaPrayingHands></FaPrayingHands>
                        </IconContext.Provider>
                        Pray For
                    </Card.Text>
                    <ul className="fs-5">
                        {prayerPoints.map((point:string) => 
                            <li key={point} className="my-3">{point}</li>
                        )}
                    </ul>
                    <Button className="w-100 mt-2 text-secondary border-secondary bg-white" variant="primary">Read the entire article</Button>
                    <Card.Text className="my-3 w-100 mx-auto text-center text-decoration-underline text-secondary" style={{cursor:"pointer"}}>
                        View all topics
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}