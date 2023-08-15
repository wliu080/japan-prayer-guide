import Link from "next/link"
import { Card, Container, Carousel, Row, Col, Image } from "react-bootstrap";

interface TopicOverviewProps {
    title: string
    links: string[]
    section: string
    labels: string[]
}

export const TopicOverviewSection = ({title, links, labels, section}:TopicOverviewProps) => {

    return (
        <>
            <section>
                <Container id={section} className="no-max-container mt-4 mt-md-5">
                    <h1 className="topic-nav-section-title text-primary pt-4 px-0 px-md-2 mb-0">{title}</h1>
                </Container>
                <Container className="bottom-grey-border px-4 pt-1 no-max-container pb-4">
                    <Row xl={3} lg={3} md={2} sm={2} xs={2}>
                        {labels.map((element, idx) => {
                            // Special if statement for conference, the 'else' will be removed for final
                            if ((idx === 0 && section === "culture") || (idx === 2 && section === "church")) {
                                return (
                                    <Col key={element + idx} className="d-flex justify-content-center">
                                        <Link href={`/topics/${links[idx].toLowerCase()}`} className="text-decoration-none">
                                            <Card className="topic-nav-card mx-1 my-3">
                                                <Image
                                                    src={`/photos/topic-nav/${section}/${links[idx]}.png`}
                                                    alt={""}
                                                />
                                                <Card.Body style={{height: 'fit-content'}} className="d-flex align-items-center topic-nav-card-title">
                                                    <p className="m-0">{element}</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                )
                            } else {
                                return (
                                    <Col key={element + idx} className="d-flex justify-content-center">
                                        <Link href={''} className="text-decoration-none position-relative">
                                            <Card className="topic-nav-card mx-1 my-3">
                                                <div className="position-relative" style={{width: 'fit-content', height: 'fit-content'}}>
                                                    <Image
                                                        src={`/photos/topic-nav/${section}/placeholder.png`}
                                                        alt={""}
                                                        style={{aspectRatio: 1.772, objectFit: 'cover', width: '100%'}}
                                                    />
                                                    <div style={{zIndex: 2, top: 0, cursor: 'not-allowed', backgroundColor: '#727C96'}} className="position-absolute w-100 h-100 opacity-75"></div>
                                                </div>
                                                <Card.Body className="d-flex align-items-center topic-nav-card-title" style={{cursor: 'not-allowed'}}>
                                                    <p className="m-0">{element}</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                )
                            }
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}