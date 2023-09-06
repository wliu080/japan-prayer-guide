import { useTranslation } from "next-i18next"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"

interface Props {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

const scrollOffset = -50

export const TopicOverviewNav = ({ selected, setSelected }: Props) => {
  const { t } = useTranslation("topic-overview")

  const bannerRef = useRef(null)
  const [show, setShow] = useState(false)
  const isScrolling = useRef(false)

  const highlightCurrentNavLink = () => {
    // If we're not in the 'church' section, show 'culture' as selected by default
    const scrollY = window.scrollY

    const churchSection = document.getElementById("church")

    if (churchSection) {
      // The leeway makes it so that if they click the link and scroll a little, it will still show the correct section as selected
      const scrollLeeway = 10
      const churchPosition =
        churchSection.getBoundingClientRect().top + window.pageYOffset + scrollOffset - scrollLeeway

      // Determine which section is active based on the scroll position
      if (scrollY >= churchPosition) {
        setSelected("church")
      } else {
        setSelected("culture")
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement: any = bannerRef.current
      if (bannerElement) {
        const { top } = bannerElement.getBoundingClientRect() + window.pageYOffset
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
      window.scrollTo({ top: topPosition + window.pageYOffset + scrollOffset, behavior: "smooth" })

      setTimeout(() => {
        isScrolling.current = false
      }, 1500)
    }
  }

  return (
    <>
      <Container
        style={{ maxWidth: "none" }}
        ref={bannerRef}
        data-testid={"overview-nav-container"}
        className="bottom-grey-border w-100 d-flex flex-column align-items-center justify-content-center sticky-top p-0"
      >
        <div id="overview-nav" className="w-100 opacity-0" style={show ? {} : { height: "0px" }}></div>
        <div
          data-testid={"overview-nav-links"}
          className="pt-4 pb-0 w-100 d-flex justify-content-center gap-3 bg-white"
        >
          <a
            className={
              "topic-nav-tab px-3 my-0 text-decoration-none" +
              (selected === "culture"
                ? " border-bottom border-secondary-5 border-3 text-secondary-5 fw-bold"
                : " text-black")
            }
            onClick={() => scrollToCustomPosition("culture")}
            data-testid={"overview-nav-link"}
          >
            {t("topHeading")}
          </a>
          <a
            className={
              "topic-nav-tab px-3 my-0 text-decoration-none " +
              (selected === "church"
                ? " border-bottom border-secondary-5 border-3 text-secondary-5 fw-bold"
                : " text-black")
            }
            onClick={() => scrollToCustomPosition("church")}
            data-testid="overview-nav-link-2"
          >
            {t("botHeading")}
          </a>
        </div>
      </Container>
    </>
  )
}
