import { useTranslation } from "next-i18next"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"

interface Props {
    selected: string
    setSelected: Dispatch<SetStateAction<string>>
}

export const TopicOverviewNav = ({selected, setSelected}:Props) => {

    const { t } = useTranslation("topic-overview")
    
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
            <Container style={{ maxWidth:"none" }} ref={bannerRef} data-testid={"overview-nav-container"} className="bottom-grey-border w-100 d-flex flex-column align-items-center justify-content-center sticky-top p-0">
                <div id="overview-nav" className="w-100 opacity-0" style={show ? {} : {height: '0px'}}></div>
                <div data-testid={"overview-nav-links"} className="pt-4 pb-0 w-100 d-flex justify-content-center gap-3 bg-white">
                    <a
                        href="#culture"
                        className={"topic-nav-tab px-3 my-0 text-decoration-none" + 
                        (selected === 'culture' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                        onClick={()=>setSelected('culture')}
                        data-testid={"overview-nav-link"}
                    >
                            {t("topHeading")}
                    </a>
                    <a
                        href="#church"
                        className={"topic-nav-tab px-3 my-0 text-decoration-none" + 
                        (selected === 'church' ? " border-bottom border-secondary border-3 text-secondary" : "")}
                        onClick={()=>setSelected('church')}
                    >
                            {t("botHeading")}
                    </a>
                </div>
            </Container>
        </>
    )
}