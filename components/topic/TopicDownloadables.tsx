import React from "react";
import { Container, Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

interface Props {
    links: string[]
    title: string
    labels: string[]
}

export default function TopicDownloadables({links, title, labels}:Props) {
    return (
        <Container data-testid={"topic-downloadables-container"} className="d-flex flex-column my-5" id="topic-downloads">
            <Container className="d-flex flex-row justify-content-between align-items-center">
                <h1 data-testid={"topic-downloadables-title"} className="text-primary my-4 fs-1">{title}</h1>
                <a href={'/downloads'} className="text-secondary d-none d-md-block">View all downloadables</a>
            </Container>
           <Row xl={4} lg={2} className="g-3" data-testid={"topic-downloadables-links"}>
            {labels.map((label, idx) => 
                 <Col key={label}>
                    <Link href={links[idx]} className="text-decoration-none">
                        <Card className="shadow-sm border-0 rounded" style={{backgroundColor: '#E2E2E2', minHeight: '125px'}}>
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <p className="text-center fw-bold fs-4 my-0">{label}</p>
                                </Card.Body>
                        </Card>
                    </Link>
                </Col>
            )}
           </Row>
            <Link href={links[4]} className="align-self-center w-100" style={{maxWidth:'500px'}}>
                <Button className="align-self-center w-100 mt-4 text-white border-secondary bg-secondary" variant="primary">Download all</Button>
            </Link>
            <a href={'/downloads'} className="align-self-center my-3 text-secondary d-md-none">View all downloadables</a>
        </Container>
    )
}