import { TFunction, Trans, useTranslation } from "next-i18next"
import React from "react"
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import PrayerPoints, { PrayerDisplayStyle } from "../common/PrayerPoints"

const PrayerResponse = ({ topicTrans }: { topicTrans: TFunction }) => {
    const { t: common } = useTranslation("common")

    const textPlaceholder: string = common("response.feedbackTextPlaceholder", "")
    const emailPlaceholder: string = common("response.feedbackEmailPlaceholder", "")
    return (
        <Container fluid id="prayer-response" data-testid="prayer-response" className="pb-5">
            <Container>
                <h2 className="fw-bold text-primary">
                    <Trans t={common} i18nKey="response.title" />
                </h2>
                <p>
                    <Trans t={common} i18nKey="response.blurb" />
                </p>
                <h3 className="fw-bold fs-2">
                    <Trans t={common} i18nKey="response.recordingLabel" />
                </h3>
                {/* <div style={{ padding: "177.78%", position: "relative" }}>
                            <iframe
                                src="https://player.vimeo.com/video/641660551?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    border: "0px",
                                }}
                                title="trees"
                            ></iframe>
                        </div> */}
                <Row>
                    <Col lg={6} md={12} className="px-0">
                        <PrayerPoints topicTrans={topicTrans} displayStyle={PrayerDisplayStyle.TopicBottom} />
                    </Col>
                    <Col lg={6} md={12}>
                        <Container data-testid="feedback" fluid className="px-0">
                            <h3 className="fw-bold mt-0">
                                <Trans t={common} i18nKey="response.feedbackLabel" />
                            </h3>
                            <Form action="https://formbold.com/s/67Gj1" method="POST">
                                <Form.Group className="mb-2">
                                    <FloatingLabel
                                        controlId="floatingTextArea"
                                        label={textPlaceholder}
                                        className="text-muted"
                                    >
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            placeholder={textPlaceholder}
                                            style={{ height: "100px" }}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" name="email" placeholder={emailPlaceholder} />
                                </Form.Group>
                                <Button variant="outline-primary" className="fw-bold px-4 py-2" type="submit">
                                    <Trans t={common} i18nKey="response.feedbackSubmit" />
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default PrayerResponse
