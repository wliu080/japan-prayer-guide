import React from "react";
import { Container, Card } from "react-bootstrap";
import {FaPrayingHands} from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { BsDownload } from "react-icons/bs";
import Button from "react-bootstrap/Button";

interface Props {
    prayerPoints: string[]
}

export default function TopicPrayerPoints({prayerPoints}:Props) {
    return (
        <Container className="d-flex justify-content-center px-6" id="topic-prayer">
            <Card className="my-4 shadow d-lg-flex flex-lg-row">
                {/* temporary height for video, before we finalize videos */}
                <Card.Img variant="top" src="/bamboo.jpeg" style={{height:'300px', maxWidth:'600px'}}></Card.Img>
                <Card.Body style={{maxWidth:'600px'}}>
                    <Card.Text className="px-2 pb-3 fs-2 fst-italic fw-bold border-bottom border-grey d-flex justify-content-between align-items-center">
                        Prayer Points
                        <IconContext.Provider value={{size:'30px'}}>
                            <BsDownload className="text-secondary fw-bold" style={{cursor: 'pointer'}}>
                            </BsDownload>
                        </IconContext.Provider>
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
                </Card.Body>
            </Card>
        </Container>
    )
}