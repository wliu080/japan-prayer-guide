import React from "react";
import { Container, Card } from "react-bootstrap";
import {FaPrayingHands} from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { BsDownload } from "react-icons/bs";

interface Props {
    prayerPoints: string[]
}

export default function PrayerSummary({prayerPoints}:Props) {
    return (
        <Container className="d-flex justify-content-center px-6">
            <Card className="my-4 shadow" style={{maxWidth: '400px'}}>
                <Card.Body>
                    <Card.Text className="text-primary px-2 py-3 fs-3 fst-italic border-bottom border-grey d-flex justify-content-between align-items-center">
                        Please pray for:
                        <IconContext.Provider value={{size:'30px'}}>
                            <BsDownload className="text-secondary fw-bold" style={{cursor: 'pointer'}}>
                            </BsDownload>
                        </IconContext.Provider>
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