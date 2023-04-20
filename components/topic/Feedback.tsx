import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface Props {
    title: string
    button: string
}

const Feedback = ({title, button}:Props) => {
    return (
        <section className="text-center m-0 p-4 w-100" style={{backgroundColor: "#EAF4FF"}}>
            <h1 className="text-primary fs-2">{title}</h1>
            <Button className="bg-secondary text-white border-0 p-2 w-100 mt-4" style={{maxWidth: '300px'}}>
                <p className="m-0">{button}</p>
            </Button>
        </section>
    )
}

export default Feedback