import Link from "next/link"
import { Card, Container, Carousel, Row, Col } from "react-bootstrap";

export const CultureSociety = () => {
    const placeholder = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    return (
        <section id="culture">
            <div id="placeholder-image" className="bg-secondary d-flex flex-column justify-content-end" style={{height: '244px'}}>
                <Container>
                    <h1 className="text-white p-3 fs-1">Culture and Society</h1>
                </Container>
            </div>
            <Container className="p-4">
                <Row xl={4} lg={3} md={2} sm={2}>
                    {placeholder.map((element) => 
                        <Col key={element}>
                            <Link href={"/"} className="text-decoration-none">
                                <Card style={{ height: "186px"}} className="mx-1 my-3">
                                    <Card.Body className="m-0 p-0">
                                        <div className="w-100 bg-primary" style={{height: "138px"}}></div>
                                    </Card.Body>
                                    <Card.Body className="m-2 p-1">
                                        <p>Topic Name Here</p>
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