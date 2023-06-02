import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"

interface Props {
    selected: string
    setSelected: Dispatch<SetStateAction<string>>
}

export const OverviewNav = ({selected, setSelected}:Props) => {
    
    const bannerRef = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const bannerElement:any = bannerRef.current;
            if (bannerElement) {
                const { top } = bannerElement.getBoundingClientRect();
                if (top === 0) {
                    setShow(true)
                } else {
                    setShow(false)
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            <Container style={{maxWidth: 'none'}} ref={bannerRef} data-testid={"overview-nav-container"} className="bg-white w-100 d-flex flex-column align-items-center justify-content-center sticky-top">
                <div id="overview-nav" className="w-100" style={show ? {height: '40px'} : {height: '0px'}}></div>
                <div data-testid={"overview-nav-links"} className="pt-4 pb-0 w-100 d-flex justify-content-around">
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
        </>
    )
}