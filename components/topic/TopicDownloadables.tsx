import React, { ReactNode } from "react"
import { Container, Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Link from "next/link"
import { TFunction, Trans, useTranslation } from "next-i18next"
import { RiDonutChartFill, RiFile3Line, RiImageFill, RiMic2Fill, RiSlideshowLine } from "react-icons/ri"
import { FaPrayingHands } from "react-icons/fa"

interface downloadProps {
    topicTrans: TFunction
}

interface ResourceProps {
    disabled?: boolean
    icon: ReactNode
    label: string
    link: string
    shrinkWidth?: boolean
}

const ResourceCard = ({ icon, label, link, disabled = false, shrinkWidth = false }: ResourceProps) => {
    return (
        <Col key={label}>
            <Link
                href={disabled ? "#" : link}
                className={"text-decoration-none"}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : undefined}
            >
                <Card
                    className={"shadow-sm border-0 rounded" + (disabled ? " disabled" : "")}
                    style={{ minHeight: "100px" }}
                    onClick={(event) => (disabled ? event.preventDefault() : null)}
                >
                    <Card.Body
                        data-testid="topic-downloadables-cards"
                        className={
                            "d-flex align-items-center justify-content-center topic-downloadables" +
                            (disabled ? " disabled" : "")
                        }
                    >
                        {icon}
                        <p className={"fw-bold fs-4 my-0" + (shrinkWidth ? " shrinkWidth" : "")}>
                            <Trans>{label}</Trans>
                        </p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default function TopicDownloadables({ topicTrans }: downloadProps) {
    const { t, i18n } = useTranslation("common")

    const infographicsLabel = t("downloads.infographicsLabel")
    const photographyLabel = t("downloads.photographyLabel")
    const pdfLabel = t("downloads.pdfLabel")
    const prayerPtsLabel = t("downloads.prayerPtsLabel")
    const prayerVidLabel = t("downloads.prayerVidLabel")
    const slidesLabel = t("downloads.slidesLabel")

    // defaults to "" if not available, this is checked for use in ResourceCard
    const infographicsUrl = topicTrans("downloads.infographicsUrl", "")
    const photographyUrl = topicTrans("downloads.photographyUrl", "")
    const pdfUrl = topicTrans("downloads.pdfUrl", "")
    const prayerPtsUrl = topicTrans("downloads.prayerPtsUrl", "")
    const prayerVidUrl = topicTrans("downloads.prayerVidUrl", "")
    const slidesUrl = topicTrans("downloads.slidesUrl", "")
    const downloadAllUrl = topicTrans("downloads.downloadAllUrl", "#")

    return (
        <Container
            data-testid={"topic-downloadables-container"}
            className="d-flex flex-column my-5"
            id="topic-downloads"
        >
            <Container>
                <h2 data-testid={"topic-downloadables-title"} className="fw-bold text-primary mt-4 mb-3">
                    <Trans t={t} i18nKey="downloads.title" />
                </h2>
                <p>
                    <Trans t={t} i18nKey="downloads.description" />
                </p>
            </Container>
            <Container>
                <Row md={3} sm={2} className="g-3" data-testid={"topic-downloadables-links"}>
                    <ResourceCard
                        icon={<RiDonutChartFill />}
                        label={infographicsLabel}
                        link={infographicsUrl}
                        disabled={infographicsUrl === ""}
                    />
                    <ResourceCard icon={<RiFile3Line />} label={pdfLabel} link={pdfUrl} disabled={pdfUrl === ""} />
                    <ResourceCard
                        icon={<RiImageFill />}
                        label={photographyLabel}
                        link={photographyUrl}
                        disabled={photographyUrl === ""}
                    />
                    <ResourceCard
                        icon={<FaPrayingHands />}
                        label={prayerPtsLabel}
                        link={prayerPtsUrl}
                        disabled={prayerPtsUrl === ""}
                    />
                    <ResourceCard
                        icon={<RiMic2Fill />}
                        label={prayerVidLabel}
                        link={prayerVidUrl}
                        disabled={prayerVidUrl === ""}
                    />
                    <ResourceCard
                        icon={<RiSlideshowLine />}
                        label={slidesLabel}
                        link={slidesUrl}
                        disabled={slidesUrl === ""}
                        shrinkWidth={true}
                    />
                </Row>
            </Container>
            <Link
                href={downloadAllUrl}
                className="align-self-center w-100"
                style={{ maxWidth: "280px", cursor: "not-allowed" }}
                locale={i18n.language}
            >
                <Button
                    disabled
                    className="align-self-center w-100 mt-4 px-3 text-white bg-secondary-5 border-secondary-5 fw-bold fs-4 border-0"
                    variant="primary"
                >
                    <Trans t={t} i18nKey="downloads.downloadAllBtn" />
                </Button>
            </Link>
            {/* <Link
                href={"/resources"}
                className="align-self-center my-3 text-secondary-5 fw-bolder fs-5"
                locale={i18n.language}
            >
                <Trans t={t} i18nKey="downloads.viewAllBtn" />
            </Link> */}
        </Container>
    )
}
