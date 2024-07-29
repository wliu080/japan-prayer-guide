import React, { ReactNode } from "react"
import { Container } from "react-bootstrap"
import { Trans, useTranslation } from "next-i18next"
import { StaticImageData } from "next/image"
import NextImage from "../../common/NextImage/NextImage"

interface ResourceProps {
    src: StaticImageData
    imgAltKey: string
    headingKey: string
    headingClass?: string
    descriptionArrayKey: string
    children?: ReactNode
}

export default function ImageWithContentFlexCol({
    src,
    imgAltKey,
    headingClass = "",
    headingKey,
    descriptionArrayKey,
    children,
}: ResourceProps) {
    const { t } = useTranslation("resources")

    const heading: string = t(headingKey)
    const imgAlt: string = t(imgAltKey)
    let descriptions: string[] = t(descriptionArrayKey, { returnObjects: true })
    descriptions = Array.isArray(descriptions) ? descriptions : []

    return (
        <Container className="d-flex flex-column my-4 image-content-flex">
            <NextImage src={src} alt={imgAlt} className={"mb-4 content-image"} />
            <h3 className={"text-primary " + headingClass}>
                <Trans>{heading}</Trans>
            </h3>
            {descriptions.map((description, idx) => (
                <p key={description.substring(0, 5) + idx}>
                    <Trans>{description}</Trans>
                </p>
            ))}
            <br />
            {children}
        </Container>
    )
}
