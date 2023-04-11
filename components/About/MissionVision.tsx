import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import BibleVerse from "./BibleVerse";
import { useTranslation } from "next-i18next";

const MissionVision: React.FC = () => {
    const { t } = useTranslation("about");
    const missionArray: string[] = t("content.mission.content", { returnObjects: true });
    const visionArray: string[] = t("content.vision.content", { returnObjects: true });

    return (
        <section id="mission-vision-section" className="position-relative">
            <Container id="mission-vision" className="py-5">
                <div id="about-landing-image" className="w-100 p-3">
                    temporary image placeholder
                </div>
                <Container className="d-flex flex-wrap justify-content-center align-items-center p-4">
                    <Row md={2} sm={1}>
                        <Container>
                            <h4>{t("content.mission.title")}</h4>
                            {missionArray.map((e: string) => (
                                <p key={e} className="fs-6">
                                    {e}
                                </p>
                            ))}
                        </Container>
                        <Container>
                            <h4>{t("content.vision.title")}</h4>
                            {visionArray.map((e: string) => (
                                <p key={e} className="fs-6">
                                    {e}
                                </p>
                            ))}
                        </Container>
                    </Row>
                </Container>
                <BibleVerse verse={t("content.bible.content")} chapter={t("content.bible.title")} />
            </Container>
        </section>
    );
};

export default MissionVision;
