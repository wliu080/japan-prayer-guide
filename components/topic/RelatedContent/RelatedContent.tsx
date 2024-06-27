import Link from "next/link"
import React from "react"
import { Card, Container, Image } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { TFunction, Trans, useTranslation } from "next-i18next"

interface relatedProps {
    topicTrans: TFunction
}

export default function RelatedContent({ topicTrans }: relatedProps) {
    const slider = React.useRef(null)
    const { t: common, i18n } = useTranslation("common")
    const responsive = [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]

    const topics: string[] = topicTrans("related.labels", { returnObjects: true })
    const links: string[] = topicTrans("related.links", { returnObjects: true })

    const onClickPrev = () => {
        slider?.current?.slickPrev()
    }

    const onClickNext = () => {
        slider?.current?.slickNext()
    }

    return (
        <Container
            id="related-content-main"
            data-testid={"related-content-container"}
            className="d-flex flex-column my-4"
        >
            <Container className="d-flex flex-row gap-4 align-items-center">
                <h1 data-testid={"related-content-title"} className="text-primary my-4 fs-1">
                    <Trans t={common} i18nKey="relatedTopics.heading" />
                </h1>
                <Link href={"/topics"} className="text-secondary" locale={i18n.language}>
                    <Trans t={common} i18nKey="relatedTopics.viewAll" />
                </Link>
            </Container>
            <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                arrows={false}
                responsive={responsive}
                ref={slider}
            >
                {topics.map((topic, idx) => (
                    <Link
                        href={links[idx]}
                        key={idx + topic}
                        className="d-flex flex-column align-items-center text-decoration-none"
                        locale={i18n.language}
                    >
                        <Card style={{ width: "350px", height: "273px" }}>
                            <Card.Body className="m-0 p-0">
                                <div className="w-100 bg-secondary" style={{ height: "220px" }}></div>
                            </Card.Body>
                            <Card.Body className="m-2 p-1">
                                <p>
                                    <Trans>{topic}</Trans>
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </Slider>
            <div className="related-prev d-xl-none" onClick={onClickPrev}>
                <div className="related-prev-icon" />
            </div>
            <div className="related-next d-xl-none" onClick={onClickNext}>
                <div className="related-next-icon" />
            </div>
        </Container>
    )
}
