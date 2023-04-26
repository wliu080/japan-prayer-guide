import { Dispatch, SetStateAction } from "react"
import { Container } from "react-bootstrap"

interface Props {
    selected: string
    setSelected: Dispatch<SetStateAction<string>>
}

export const TopicNav = ({selected, setSelected}:Props) => {
    return (
        <Container data-testid={"topic-nav-container"} className="w-100 d-flex justify-content-center">
            <div data-testid={"topic-nav-links"} className="pt-4 pb-0 w-100 border-bottom d-flex justify-content-around">
                <a
                    href="#topic-about"
                    className={"px-3 my-0 text-decoration-none fs-4" + 
                    (selected === 'About' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                    onClick={()=>setSelected('About')}
                    data-testid={"topic-nav-link"}
                >
                        About this Topic
                </a>
                <a
                    href="#topic-prayer"
                    className={"px-3 my-0 text-decoration-none fs-4" + 
                    (selected === 'Prayer' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                    onClick={()=>setSelected('Prayer')}
                >
                        Prayer Points
                </a>
                <a
                    href="#topic-downloads"
                    className={"px-3 my-0 text-decoration-none fs-4" + 
                    (selected === 'Downloads' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                    onClick={()=>setSelected('Downloads')}
                >
                        Downloadables
                </a>
            </div>
        </Container>
    )
}