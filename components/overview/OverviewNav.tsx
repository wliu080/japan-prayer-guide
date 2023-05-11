import { Dispatch, SetStateAction } from "react"
import { Container } from "react-bootstrap"

interface Props {
    selected: string
    setSelected: Dispatch<SetStateAction<string>>
}

export const OverviewNav = ({selected, setSelected}:Props) => {
    return (
        <Container data-testid={"overview-nav-container"} className="w-100 d-flex justify-content-center">
            <div data-testid={"overview-nav-links"} className="pt-4 pb-0 w-100 border-bottom d-flex justify-content-around">
                <a
                    href="#culture"
                    className={"px-3 my-0 text-decoration-none fs-4" + 
                    (selected === 'culture' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                    onClick={()=>setSelected('culture')}
                    data-testid={"overview-nav-link"}
                >
                        Culture and Society
                </a>
                <a
                    href="#church"
                    className={"px-3 my-0 text-decoration-none fs-4" + 
                    (selected === 'church' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                    onClick={()=>setSelected('church')}
                >
                        Church and Missions
                </a>
            </div>
        </Container>
    )
}