import React from "react";
import { Container, Card } from "react-bootstrap";
import {FaPrayingHands} from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { BsDownload } from "react-icons/bs";

interface Props {
    prayerPoints: string[]
    title: string
    subtitle: string
}

export default function TopicPrayerPoints({prayerPoints, title, subtitle}:Props) {
    return (
        <Container data-testid={"topic-points-container"} className="d-flex justify-content-center px-6" id="topic-prayer">
            <Card className="my-4 shadow d-lg-flex flex-lg-row">
                {/* temporary height for video, before we finalize videos */}
                <Card.Img variant="top" src="/bamboo.jpeg" style={{height:'300px', maxWidth:'600px'}}></Card.Img>
                <Card.Body style={{maxWidth:'600px'}}>
                    <Card.Text data-testid={"topic-points-title"} className="px-2 pb-3 fs-2 fst-italic fw-bold border-bottom border-grey d-flex justify-content-between align-items-center">
                        {title}
                        <IconContext.Provider value={{size:'30px'}}>
                            <BsDownload className="text-secondary fw-bold" style={{cursor: 'pointer'}}>
                            </BsDownload>
                        </IconContext.Provider>
                    </Card.Text>
                    <Card.Text className="d-flex align-items-center gap-2 text-secondary">
                        <IconContext.Provider value={{size:'20px'}}>
                            <FaPrayingHands></FaPrayingHands>
                        </IconContext.Provider>
                        {subtitle}
                    </Card.Text>
                    <ul className="fs-5" data-testid={"topic-points-points"}>
                        {prayerPoints.map((point:string) => 
                            <li key={point} className="my-3">{point}</li>
                        )}
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    )
}