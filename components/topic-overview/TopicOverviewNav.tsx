import { useTranslation } from "next-i18next"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"

interface Props {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

export const TopicOverviewNav = ({ selected, setSelected }: Props) => {
  const { t } = useTranslation("topic-overview")

  const bannerRef = useRef(null)
  const [show, setShow] = useState(false)

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
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToCustomPosition = (id: string) => {
    setSelected(id)
    const targetElement = document.getElementById(id)
    const offset = -50 // Adjust this value to the desired scroll height

    if (targetElement) {
      const topPosition = targetElement.getBoundingClientRect().top
      window.scrollTo({ top: topPosition + window.pageYOffset + offset, behavior: "smooth" })
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
              "topic-nav-tab px-3 my-0 text-decoration-none text-secondary-5" +
              (selected === "culture" ? " border-bottom border-secondary-5 border-3 text-secondary" : "")
            }
            onClick={() => scrollToCustomPosition("culture")}
            data-testid={"overview-nav-link"}
          >
            {t("topHeading")}
          </a>
          <a
            className={
              "topic-nav-tab px-3 my-0 text-decoration-none text-secondary-5" +
              (selected === "church" ? " border-bottom border-secondary-5 border-3 text-secondary" : "")
            }
            onClick={() => scrollToCustomPosition("church")}
          >
            {t("botHeading")}
          </a>
        </div>
      </Container>
    </>
  )
}
