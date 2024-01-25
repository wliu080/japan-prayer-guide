import Link from "next/link"
import React from "react"
import { Card, Container } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { TFunction, Trans, useTranslation } from "next-i18next"

interface relatedProps {
    topicTrans: TFunction
}

function SampleArrow(props: any) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: "block", borderRadius: "50%" }} onClick={onClick} />
}

export default function RelatedContent({ topicTrans }: relatedProps) {
    const { t: common, i18n } = useTranslation("common")
    const responsive = [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
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

    return (
        <Container data-testid={"related-content-container"} className="d-flex flex-column my-5">
            <Container className="d-flex flex-row justify-content-between align-items-center">
                <h1 data-testid={"related-content-title"} className="text-primary my-4 fs-1">
                    <Trans t={common} i18nKey="relatedTopics.heading" />
                </h1>
                <Link href={"/topics"} className="text-secondary d-none d-md-block" locale={i18n.language}>
                    <Trans t={common} i18nKey="relatedTopics.viewAll" />
                </Link>
            </Container>
            <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={4}
                slidesToScroll={1}
                arrows={true}
                responsive={responsive}
                nextArrow={<SampleArrow />}
                prevArrow={<SampleArrow />}
            >
                {topics.map((topic, idx) => (
                    <Link
                        href={links[idx]}
                        key={idx + topic}
                        className="d-flex flex-column align-items-center"
                        locale={i18n.language}
                    >
                        <Card style={{ width: "308px", height: "186px" }}>
                            <Card.Body className="m-0 p-0">
                                <div className="w-100 bg-secondary" style={{ height: "138px" }}></div>
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
            <Link href={"/topics"} className="align-self-center my-3 text-secondary d-md-none" locale={i18n.language}>
                <Trans t={common} i18nKey="relatedTopics.viewAll" />
            </Link>
        </Container>
    )
}
