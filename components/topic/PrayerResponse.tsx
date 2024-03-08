import { TFunction, Trans, useTranslation } from "next-i18next"
import React from "react"
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import PrayerPoints, { PrayerDisplayStyle } from "../common/PrayerPoints"

const PrayerResponse = ({ topicTrans }: { topicTrans: TFunction }) => {
    const { t: common } = useTranslation("common")

    const textPlaceholder: string = common("response.feedbackTextPlaceholder", "")
    const emailPlaceholder: string = common("response.feedbackEmailPlaceholder", "")

    const topicVideoSrc: string = topicTrans("videoSrc", "")
    const couldLoadVideo: boolean = topicVideoSrc !== ""

    return (
        <Container fluid id="prayer-response" data-testid="prayer-response" className="pb-5">
            <Container>
                <h2 className="fw-bold text-primary">
                    <Trans t={common} i18nKey="response.title" />
                </h2>
                <p>
                    <Trans t={common} i18nKey="response.blurb0" />
                </p>
                <p>
                    <Trans t={common} i18nKey="response.blurb1" />
                </p>

                <h3 className="fw-bold fs-2">
                    <Trans t={common} i18nKey="response.recordingLabel" />
                </h3>
                <div className="mb-5 video-embed">
                    {couldLoadVideo ? (
                        <iframe
                            className="d-flex align-content-start"
                            src={topicVideoSrc}
                            allow="autoplay; fullscreen"
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                border: "0px",
                            }}
                            title="Prayer recording"
                        />
                    ) : (
                        <div>
                            <Trans t={common} i18nKey="errors.videoLoadError" />
                        </div>
                    )}
                </div>
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
                                    <Form.Control type="email" placeholder={emailPlaceholder} />
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
