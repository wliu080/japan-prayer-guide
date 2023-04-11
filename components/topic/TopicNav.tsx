import { Dispatch, SetStateAction } from "react"
import { Container } from "react-bootstrap"

interface Props {
    selected: string
    setSelected: Dispatch<SetStateAction<string>>
}

export const TopicNav = ({selected, setSelected}:Props) => {
    return (
        <Container className="w-100 d-flex justify-content-center">
            <div className="pt-4 pb-0 w-100 border-bottom d-flex justify-content-around">
                <a
                    href="#about"
                    className={"px-3 my-0 text-decoration-none fs-4" + 
                    (selected === 'About' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                    onClick={()=>setSelected('About')}
                >
                        About this Topic
                </a>
                <a
                    href="#prayer"
                    className={"px-3 my-0 text-decoration-none fs-4" + 
                    (selected === 'Prayer' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                    onClick={()=>setSelected('Prayer')}
                >
                        Prayer Points
                </a>
                <a
                    href="#downloads"
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