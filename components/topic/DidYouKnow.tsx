import React from "react";
import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsLightbulb } from "react-icons/bs";

interface dykProps {
    text: string
    title: string
}

const DidYouKnow = ({text, title}:dykProps) => {
    return (
        <Container data-testid={"dyk-container"} className="d-flex justify-content-center">
            <div className="did-you-know p-4 shadow">
                <div className="d-flex align-items-center">
                    <IconContext.Provider value={{size: '25px'}}>
                        <BsLightbulb/>
                    </IconContext.Provider>
                    <h1 className="fw-bold fs-5 my-0 mx-2">{title}</h1>
                </div>
                <div data-testid={"dyk-text"} className="fs-5 my-3">
                    {text}
                </div>
            </div>
        </Container>
    )
}

export default DidYouKnow