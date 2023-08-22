import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"

interface navProps {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  labels: string[]
}

export const TopicNav = ({ selected, setSelected, labels }: navProps) => {
  const bannerRef = useRef(null)
  const [show, setShow] = useState(false)

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
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container
      style={{ maxWidth: "none" }}
      ref={bannerRef}
      data-testid={"topic-nav-container"}
      className="w-100 d-flex justify-content-center flex-column sticky-top p-0"
    >
      <div id="overview-nav" className="w-100" style={show ? {} : { height: "0px" }}></div>
      <div
        data-testid={"topic-nav-links"}
        className="pt-4 pb-0 w-100 border-bottom d-flex justify-content-around bg-white"
      >
        <a
          href="#topic-about"
          className={
            "px-3 my-0 text-decoration-none fs-4" +
            (selected === "About" ? " border-bottom border-secondary border-3 text-secondary" : "")
          }
          onClick={() => setSelected("About")}
          data-testid={"topic-nav-link"}
        >
          {labels[0]}
        </a>
        <a
          href="#topic-prayer"
          className={
            "px-3 my-0 text-decoration-none fs-4" +
            (selected === "Prayer" ? " border-bottom border-secondary border-3 text-secondary" : "")
          }
          onClick={() => setSelected("Prayer")}
        >
          {labels[1]}
        </a>
        <a
          href="#topic-downloads"
          className={
            "px-3 my-0 text-decoration-none fs-4" +
            (selected === "Downloads" ? " border-bottom border-secondary border-3 text-secondary" : "")
          }
          onClick={() => setSelected("Downloads")}
        >
          {labels[2]}
        </a>
      </div>
    </Container>
  )
}
