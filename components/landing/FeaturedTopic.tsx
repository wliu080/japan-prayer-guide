import React from "react"
import { Container, Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { TFunction, Trans, useTranslation } from "next-i18next"
import { Image } from "react-bootstrap"
import { useRouter } from "next/router"

interface FeaturedTopicsProps {
    featuredTrans: TFunction
}

export default function FeaturedTopic({ featuredTrans }: FeaturedTopicsProps) {
    const { t, i18n } = useTranslation("common")
    const router = useRouter()

    const prayerPoints: string[] = featuredTrans("prayerSummary", { returnObjects: true })
    const featuredImg: string = "/photos/topic-nav/church/church-leadership-b.jpg"

    return (
        <Container className="d-flex justify-content-center featured-topic-container">
            <Card className="my-4 shadow d-md-flex flex-md-row">
                {/* temporary height for image, before we finalize images */}
                <Card.Img variant="top" src={featuredImg} className="home-feature-img" />
                <Card.Body className="p-4 featured-topic-card">
                    <Card.Text className="featuredTopicTitle px-2 pb-2 fs-2 border-bottom border-grey">
                        <Trans t={featuredTrans} i18nKey="title" />
                    </Card.Text>
                    <Card.Text className="fs-3 featuredTopicSubtitle d-flex align-items-center gap-2 text-secondary-5">
                        <Image alt="praying hands" src="/icons/prayer.png" style={{ height: "20px" }} />
                        <Trans t={t} i18nKey="prayerSummary.subtitle" />
                    </Card.Text>
                    <ul className="bullet-points">
                        {prayerPoints.map((point: string, idx: number) => (
                            <li key={idx + point} className="my-2 bullet-point">
                                <Trans>{point}</Trans>
                            </li>
                        ))}
                    </ul>
                    <Button
                        className="feature-button fs-4 fw-bold bg-grey-4 text-white text-center border-0 mt-3 mb-2 w-100"
                        variant="primary"
                    >
                        <Trans t={t} i18nKey="prayerSummary.readMore" />
                    </Button>
                    <Card.Text
                        className="mt-3 w-100 mx-auto text-center text-decoration-underline text-secondary-5 fw-bold fs-4 feature-view-all"
                        style={{ cursor: "pointer" }}
                        onClick={() => router.push("topics/all", "topics/all", { locale: i18n.language })}
                        tabIndex={0}
                    >
                        <Trans t={t} i18nKey="prayerSummary.viewAll" />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
