import React from "react";
import { Container, Card } from "react-bootstrap";
import {FaPrayingHands} from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import Button from "react-bootstrap/Button";

export default function TopicPrayerPoints({prayerPoints}:any) {
    return (
        <Container className="d-flex justify-content-center" style={{height: 'auto'}}>
            <Card className="my-4 shadow" style={{width: '400px'}}>
                <Card.Img variant="top" src="/bamboo.jpeg" style={{height:'300px'}}></Card.Img>
                <Card.Body>
                    <Card.Text className="pb-3" style={{fontSize:'1.25rem', fontWeight:'700', fontStyle:'italic', borderBottom:'#CECECE 1px solid'}}>
                        Prayer Points
                    </Card.Text>
                    <Card.Text className="d-flex align-items-center gap-2" style={{color:"#4592CF"}}>
                        <IconContext.Provider value={{size:'20px'}}>
                            <FaPrayingHands></FaPrayingHands>
                        </IconContext.Provider>
                        Pray For
                    </Card.Text>
                    <ul style={{fontSize:"0.85rem"}}>
                        {prayerPoints.map((point:string) => 
                            <li key={point} className="my-3">{point}</li>
                        )}
                    </ul>
                    <Button className="w-100 mt-2" variant="primary" style={{color: "#4592CF", border: "#4592CF 1.5px solid", backgroundColor:"white"}}>Read the entire article</Button>
                    <Card.Text className="my-3 w-100 mx-auto text-center" style={{textDecoration:"underline", color:"#4592CF", cursor:"pointer"}}>
                        View all topics
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}