import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Box {
    title: string
    number: string
    subtext: string
}

const MeetOurTeam:React.FC = () => {

    const { t } = useTranslation("about");
    const contentArray = [
        t("content.meet.content1", {returnObjects: true}),
        t("content.meet.content2", {returnObjects: true}),
        t("content.meet.content3", {returnObjects: true})
    ]

    return (
        <section className="p-0 text-center">
            <Container id="team-container">
                <div id="team-image">
                        temporary image placeholder
                </div>
                <h4>{t("content.meet.title")}</h4>
                <Row md={3} sm={1} xs={1} className="w-100 m-0 pt-4 pb-5">
                    {/* For some reason with i18n I can't figure out how to type it correctly */}
                    {contentArray.map((e:any) => 
                        <Col key={e.title} className="p-2">
                            <div className="team-box p-3">
                                <p className="fs-6 fw-bold">{e.title}</p>
                                <h1>{e.number}</h1>
                                <p className="fs-6">{e.subtext}</p>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    )
}

export default MeetOurTeam