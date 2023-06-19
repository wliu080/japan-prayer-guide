import Link from "next/link"
import { Card, Container, Carousel, Row, Col } from "react-bootstrap";

interface TopicOverviewProps {
    title: string
    links: string[]
    section: string
}

export const TopicOverviewSection = ({title, links, section}:TopicOverviewProps) => {

    return (
        <section id={section}>
            <div id="placeholder-image" className="bg-secondary d-flex flex-column justify-content-end" style={{height: '244px'}}>
                <Container>
                    <h1 className="text-white p-3 fs-1">{title}</h1>
                </Container>
            </div>
            <Container className="p-4">
                <Row xl={4} lg={3} md={2} sm={2} xs={2}>
                    {links.map((element, idx) => 
                        <Col key={element + idx}>
                            {/* TODO: change the link to actually lead to the topic later */}
                            <Link href={"/"} className="text-decoration-none">
                                <Card style={{ height: "186px"}} className="mx-1 my-3">
                                    <Card.Body className="m-0 p-0">
                                        <div className="w-100 bg-primary" style={{height: "138px"}}></div>
                                    </Card.Body>
                                    <Card.Body className="m-2 p-1">
                                        <p>{element}</p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    )
}