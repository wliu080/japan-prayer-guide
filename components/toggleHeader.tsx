import Image from "next/image"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import LanguageSwitcher from "./languageSwitcher"
import { useRouter } from "next/router"

const ToggleHeader: React.FC = () => {
  const { t } = useTranslation("common") // specify translation file from public/locales/[lng]
  const { i18n } = useTranslation()
  const router = useRouter()

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
    const path = router.asPath
    const options = {
      locale: language,
    }

    router.push(path, path, options)
  }

  // when the Navbar.Collapse is expanded we want to switch to the dark theme
  const [bg, setBg] = useState("white")
  const [variant, setVariant] = useState("light")

  const toggleColorScheme = () => {
    setBg(bg === "white" ? "primary" : "white")
    setVariant(variant === "light" ? "dark" : "light")
  }

  return (
    <Navbar sticky="top" bg={bg} expand="lg" variant={variant}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt={t("header.brandAlt")}
            src={bg === "white" ? "/bts-crane-wht-logo-en.png" : "/bts-crane-blue-logo-en.png"}
            width="150"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar-nav" onClick={toggleColorScheme} />
        <Navbar.Collapse id="header-navbar-nav">
          <Container className="mobile-header d-flex flex-column justify-content-between w-auto ms-auto me-0">
            <Nav className="ml-auto d-md-flex gap-md-3" variant={variant}>
              <Nav.Link href="/topics/all">{t("header.topics")}</Nav.Link>
              <Nav.Link href="/booklet">{t("header.booklet")}</Nav.Link>
              <Nav.Link href="/downloads">{t("header.download")}</Nav.Link>
              <Nav.Link href="/about">{t("header.about")}</Nav.Link>
              {/* 
                Need a more extensibile way for future languages but for now this should do
              */}
              {i18n.language === "en" ? (
                <NavDropdown title="English" className="d-none d-lg-block">
                  <NavDropdown.Item href="" onClick={() => handleLanguageChange("ja")}>
                    日本語
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="日本語" className="d-none d-lg-block">
                  <NavDropdown.Item href="" onClick={() => handleLanguageChange("en")}>
                    English
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Container className="d-lg-none text-center">
              <LanguageSwitcher />
              <Image
                alt="Crane logo"
                src={bg === "white" ? "/bts-crane-wht-logo-en.png" : "/bts-crane-blue-logo-en.png"}
                width="150"
                height="30"
              />{" "}
              <p className="text-light fs-6 pb-3">{t("header.blurb")}</p>
            </Container>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { ToggleHeader }
