import React from "react"
import { Container } from "react-bootstrap"

interface Props {
    content: string
    passageLocation: string
}

export default function BibleVerse({ content, passageLocation }: Props) {
    return (
        <Container
            id="about-bible-verse"
            data-testid="about-bible-verse"
            className="bg-white shadow py-3 px-5 text-center d-flex flex-column align-items-center"
        >
            <div className="verse-bar mb-4 mt-3 bg-primary"></div>
            <p className="text-primary-blue fs-5">{content}</p>
            <p className="text-primary-blue fw-bold">{passageLocation}</p>
            <div className="verse-bar m-3 bg-primary"></div>
        </Container>
    )
}
