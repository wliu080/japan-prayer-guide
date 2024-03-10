import { Trans } from "next-i18next"
import { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"

const scrollOffset = -50

export interface Tab {
    refId: string
    label: string
}

interface StickyNavProps {
    tabs: Tab[]
}

export const StickyNav = ({ tabs }: StickyNavProps) => {
    const bannerRef = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState<string>(tabs[0].refId)
    const [show, setShow] = useState(false)
    const isScrolling = useRef(false)

    const highlightCurrentNavLink = () => {
        const scrollY = window.scrollY
        // The leeway makes it so that if they click the link and scroll a little, it will still show the correct section as selected
        const scrollLeeway = 10

        const currentScrolledSection = tabs
            .map((tab) => {
                const section = document.getElementById(tab.refId)
                const tabWithPosition = {
                    tab: tab,
                    sectionTop: -1,
                }
                if (section) {
                    tabWithPosition.sectionTop =
                        section.getBoundingClientRect().top + window.pageYOffset + 2 * scrollOffset - scrollLeeway
                }

                return tabWithPosition
            })
            .sort((a, b) => a.sectionTop - b.sectionTop) // sort ascending
            .filter((tab) => tab.sectionTop > 0 && scrollY >= tab.sectionTop) // remove invalid sections and elements not yet scrolled to
            .pop()
        if (currentScrolledSection === undefined) {
            // in the case where we have yet to scroll to any of the sections, set the first section as selected
            setSelected(tabs[0].refId)
        } else {
            setSelected(currentScrolledSection.tab.refId)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const bannerElement: any = bannerRef.current
            if (bannerElement) {
                const { top } = bannerElement.getBoundingClientRect()
                if (top === 0) {
                    setShow(true)
                } else {
                    setShow(false)
                }
            }

            if (!isScrolling.current) {
                highlightCurrentNavLink()
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToCustomPosition = (id: string) => {
        setSelected(id)
        isScrolling.current = true // block the listener from triggering while we scroll
        const targetElement = document.getElementById(id)

        if (targetElement) {
            const topPosition = targetElement.getBoundingClientRect().top
            const offset = 2 * scrollOffset // main nav + sticky nav
            window.scrollTo({ top: topPosition + window.pageYOffset + offset, behavior: "smooth" })

            setTimeout(() => {
                isScrolling.current = false
            }, 1500)
        }
    }

    return (
        <Container
            style={{ maxWidth: "none" }}
            ref={bannerRef}
            data-testid={"sticky-nav-container"}
            className="w-100 d-flex align-items-center justify-content-center flex-column sticky-top p-0 sticky-nav"
        >
            <div id="overview-nav" className="w-100" style={show ? {} : { height: "0px" }}></div>
            <div className="w-100 d-flex justify-content-center bg-white">
                <div className="limit-width d-flex justify-content-center border-bottom">
                    <div
                        data-testid={"topic-nav-links"}
                        id="topic-nav-links"
                        className="pt-4 pb-0 w-100 border-bottom d-flex justify-content-center bg-white text-center"
                    >
                        {tabs.map((tab, idx) => (
                            <a
                                key={tab.refId}
                                className={
                                    "px-3 my-0 text-decoration-none fw-normal w-100" +
                                    (selected === tab.refId
                                        ? " border-bottom border-secondary-5 border-3 text-secondary-5 fw-bold"
                                        : "")
                                }
                                onClick={() => scrollToCustomPosition(tab.refId)}
                                data-testid={"topic-nav-link" + idx}
                            >
                                <Trans>{tab.label}</Trans>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}
