import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MeetOurTeam:React.FC = () => {

    const { t } = useTranslation("about");

    return (
        <section className="p-0 text-center">
            <Container id="team-container">
                <div id="team-image">
                        temporary image placeholder
                </div>
                <h4>{t("content.meet.title")}</h4>
                <Row md={3} sm={1} xs={1} className="w-100 m-0 pt-4 pb-5">
                    {t("content.meet.content").map((e:string) => 
                        <Col key={e} className="p-2">
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