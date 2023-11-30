import React from "react"
import { Container, Card } from "react-bootstrap"
import { FaPrayingHands } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { BsDownload } from "react-icons/bs"
import Button from "react-bootstrap/Button"
import { TFunction, Trans, useTranslation } from "next-i18next"

export enum PrayerDisplayStyle {
    Featured,
    TopicTop,
    TopicBottom,
}

interface prayerProps {
    topicTrans: TFunction // the translation object for the given topic
    displayStyle: PrayerDisplayStyle
}

export default function PrayerPoints({ topicTrans, displayStyle }: prayerProps) {
    const { t } = useTranslation("common")

    const prayerPoints: string[] = topicTrans("prayerSummary", { returnObjects: true })

    // will implement and tidy up properly in later PR
    const showSubtitle: boolean =
        displayStyle === PrayerDisplayStyle.TopicTop || displayStyle === PrayerDisplayStyle.TopicBottom
    const showImg: boolean = displayStyle === PrayerDisplayStyle.Featured
    const featured: boolean = displayStyle === PrayerDisplayStyle.Featured

    return (
        <Container
            data-testid={"prayer-points-container"}
            className={"d-flex px-6" + (showSubtitle ? " justify-content-center" : " justify-content-start")}
            id="topic-prayer"
        >
            <Card className="my-4 shadow d-md-flex flex-md-row">
                {/* temporary height for video, before we finalize videos */}
                {showImg && (
                    <Card.Img
                        className="h-100"
                        variant="top"
                        src="/bamboo.jpeg"
                        style={{ maxWidth: "600px" }}
                    ></Card.Img>
                )}
                <Card.Body style={showSubtitle ? { maxWidth: "600px" } : { maxWidth: "400px" }}>
                    <Card.Text
                        data-testid={"prayer-points-title"}
                        className="px-2 pb-3 fs-2 fst-italic fw-bold border-bottom border-grey d-flex justify-content-between align-items-center"
                    >
                        <Trans t={topicTrans} i18nKey="title" />
                        <IconContext.Provider value={{ size: "30px" }}>
                            <BsDownload className="text-secondary fw-bold" style={{ cursor: "pointer" }}></BsDownload>
                        </IconContext.Provider>
                    </Card.Text>
                    {showSubtitle && (
                        <Card.Text className="d-flex align-items-center gap-2 text-secondary">
                            <IconContext.Provider value={{ size: "20px" }}>
                                <FaPrayingHands></FaPrayingHands>
                            </IconContext.Provider>
                            <Trans t={t} i18nKey="prayerSummary.subtitle" />
                        </Card.Text>
                    )}
                    <ul className="fs-5" data-testid={"prayer-points-points"}>
                        {prayerPoints.map((point: string, idx: number) => (
                            <li key={idx + point} className="my-3">
                                <Trans>{point}</Trans>
                            </li>
                        ))}
                    </ul>
                    {featured && (
                        <>
                            <Button className="w-100 mt-2 text-secondary border-secondary bg-white" variant="primary">
                                <Trans t={t} i18nKey="prayerSummary.readMore" />
                            </Button>
                            <Card.Text
                                className="my-3 w-100 mx-auto text-center text-decoration-underline text-secondary"
                                style={{ cursor: "pointer" }}
                            >
                                <Trans t={t} i18nKey="prayerSummary.viewAll" />
                            </Card.Text>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    )
}
