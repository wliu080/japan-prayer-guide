import React from "react"
import { Container, Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Link from "next/link"
import { TFunction, Trans, useTranslation } from "next-i18next"

interface downloadProps {
    topicTrans: TFunction
}

export default function TopicDownloadables({ topicTrans }: downloadProps) {
    const { i18n } = useTranslation("common")

    const labels: string[] = topicTrans("downloads.labels", { returnObjects: true })
    const links: string[] = topicTrans("downloads.links", { returnObjects: true })
    const headers: string[] = topicTrans("downloads.headers", { returnObjects: true })

    return (
        <Container
            data-testid={"topic-downloadables-container"}
            className="d-flex flex-column my-5"
            id="topic-downloads"
        >
            <Container className="d-flex flex-row justify-content-between align-items-center">
                <h1 data-testid={"topic-downloadables-title"} className="text-primary my-4 fs-1">
                    <Trans t={topicTrans} i18nKey="downloads.title" />
                </h1>
                <Link href={"/resources"} className="text-secondary d-none d-md-block" locale={i18n.language}>
                    <Trans>{headers[0]}</Trans>
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
                                    <p className="text-center fw-bold fs-4 my-0">
                                        <Trans>{label}</Trans>
                                    </p>
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
                    <Trans>{headers[1]}</Trans>
                </Button>
            </Link>
            <Link
                href={"/resources"}
                className="align-self-center my-3 text-secondary d-md-none"
                locale={i18n.language}
            >
                <Trans>{headers[0]}</Trans>
            </Link>
        </Container>
    )
}
