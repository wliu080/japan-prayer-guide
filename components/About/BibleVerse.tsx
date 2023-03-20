import React from "react"
import { Container } from "react-bootstrap"

interface Props {
    verse: string
    chapter: string
}

export default function BibleVerse({verse, chapter}:Props) {
    
    return (
        <Container id="about-bible-verse" className="bg-white shadow py-3 px-5 text-center d-flex flex-column align-items-center">
            <div className="verse-bar mb-4 mt-3 bg-primary"></div>
            <p className="text-primary fs-5">{verse}</p>
            <p className="text-primary fw-bold">{chapter}</p>
            <div className="verse-bar m-3 bg-primary"></div>
        </Container>
    )
}