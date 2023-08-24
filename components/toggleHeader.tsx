import Image from "next/image"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import LanguageSwitcher from "./languageSwitcher"
import { useRouter } from "next/router"
import Link from "next/link"

const NavLinkWithLocale = ({ text, href, locale }: { text: string; href: string; locale: string }) => {
  return (
    <Nav.Item>
      <Link href={href} passHref locale={locale} className="nav-link">
        <Nav.Link as="span">{text}</Nav.Link>
      </Link>
    </Nav.Item>
  )
}

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
    <Navbar sticky="top" bg={bg} expand="xl" variant={variant}>
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
              <NavLinkWithLocale text={t("header.topics")} href="/topics/all" locale={i18n.language} />
              <NavLinkWithLocale text={t("header.booklet")} href="/booklet" locale={i18n.language} />
              <NavLinkWithLocale text={t("header.download")} href="/downloads" locale={i18n.language} />
              <NavLinkWithLocale text={t("header.about")} href="/about" locale={i18n.language} />
              {/* 
                Need a more extensibile way for future languages but for now this should do
              */}
              {i18n.language === "en" ? (
                <NavDropdown title="English" className="d-none d-xl-block">
                  <NavDropdown.Item href="" onClick={() => handleLanguageChange("ja")}>
                    日本語
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="日本語" className="d-none d-xl-block">
                  <NavDropdown.Item href="" onClick={() => handleLanguageChange("en")}>
                    English
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Container className="d-xl-none text-center">
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
