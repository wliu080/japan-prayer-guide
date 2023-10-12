import React from "react"
import { Container, Card } from "react-bootstrap"
import { FaPrayingHands } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { BsDownload } from "react-icons/bs"
import Button from "react-bootstrap/Button"
import { useTranslation } from "next-i18next"

interface prayerProps {
    prayerPoints: string[] // array of prayer points
    title?: string // Title that goes on top of card
    featured?: boolean // is this component the "featured" component?
    showImg?: boolean // show the image?
    showSubtitle?: boolean // show the "Pray For" subtitle?
}

export default function PrayerPoints({
    prayerPoints,
    title,
    featured = false,
    showImg = false,
    showSubtitle = false,
}: prayerProps) {
    const { t } = useTranslation("common")

    const subtitle: string = t("prayerSummary.subtitle")
    const view: string = t("prayerSummary.viewAll")
    const read: string = t("prayerSummary.readMore")

    const displayTitle: string = title ? title : t("prayerSummary.title")

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
                        {displayTitle}
                        <IconContext.Provider value={{ size: "30px" }}>
                            <BsDownload className="text-secondary fw-bold" style={{ cursor: "pointer" }}></BsDownload>
                        </IconContext.Provider>
                    </Card.Text>
                    {showSubtitle && (
                        <Card.Text className="d-flex align-items-center gap-2 text-secondary">
                            <IconContext.Provider value={{ size: "20px" }}>
                                <FaPrayingHands></FaPrayingHands>
                            </IconContext.Provider>
                            {subtitle}
                        </Card.Text>
                    )}
                    <ul className="fs-5" data-testid={"prayer-points-points"}>
                        {prayerPoints.map((point: string, idx: number) => (
                            <li key={idx + point} className="my-3">
                                {point}
                            </li>
                        ))}
                    </ul>
                    {featured && (
                        <>
                            <Button className="w-100 mt-2 text-secondary border-secondary bg-white" variant="primary">
                                {read}
                            </Button>
                            <Card.Text
                                className="my-3 w-100 mx-auto text-center text-decoration-underline text-secondary"
                                style={{ cursor: "pointer" }}
                            >
                                {view}
                            </Card.Text>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    )
}
