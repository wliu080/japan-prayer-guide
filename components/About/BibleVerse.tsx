import React from "react"
import { Container } from "react-bootstrap"

export default function BibleVerse(props:any) {
    return (
        <Container id="about-bible-verse" className="bg-white shadow py-3 px-5 text-center d-flex flex-column align-items-center">
            <div className="verse-bar mb-4 mt-3 bg-primary"></div>
            <p className="text-primary fs-5">{props.verse}</p>
            <p className="text-primary fw-bold">{props.chapter}</p>
            <div className="verse-bar m-3 bg-primary"></div>
        </Container>
    )
}