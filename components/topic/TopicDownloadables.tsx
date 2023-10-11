import React from "react"
import { Container, Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Link from "next/link"
import { useTranslation } from "react-i18next"

interface downloadProps {
    links: string[]
    title: string
    labels: string[]
    headers: string[]
}

export default function TopicDownloadables({ links, title, labels, headers }: downloadProps) {
    const { i18n } = useTranslation("common")
    return (
        <Container
            data-testid={"topic-downloadables-container"}
            className="d-flex flex-column my-5"
            id="topic-downloads"
        >
            <Container className="d-flex flex-row justify-content-between align-items-center">
                <h1 data-testid={"topic-downloadables-title"} className="text-primary my-4 fs-1">
                    {title}
                </h1>
                <Link href={"/resources"} className="text-secondary d-none d-md-block" locale={i18n.language}>
                    {headers[0]}
                </Link>
            </Container>
            <Row xl={4} md={2} className="g-3" data-testid={"topic-downloadables-links"}>
                {labels.map((label, idx) => (
                    <Col key={idx + label}>
                        <Link href={links[idx]} className="text-decoration-none" locale={i18n.language}>
                            <Card
                                className="shadow-sm border-0 rounded"
                                style={{ backgroundColor: "#E2E2E2", minHeight: "125px" }}
                            >
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <p className="text-center fw-bold fs-4 my-0">{label}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
            <Link
                href={links[4]}
                className="align-self-center w-100"
                style={{ maxWidth: "500px" }}
                locale={i18n.language}
            >
                <Button
                    className="align-self-center w-100 mt-4 text-white border-secondary bg-secondary"
                    variant="primary"
                >
                    {headers[1]}
                </Button>
            </Link>
            <Link
                href={"/resources"}
                className="align-self-center my-3 text-secondary d-md-none"
                locale={i18n.language}
            >
                {headers[0]}
            </Link>
        </Container>
    )
}
