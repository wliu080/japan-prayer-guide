import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./languageSwitcher";

const ToggleHeader: React.FC = () => {
  const { t } = useTranslation("common"); // specify translation file from public/locales/[lng]

  // when the Navbar.Collapse is expanded we want to switch to the dark theme
  const [bg, setBg] = useState("white");
  const [variant, setVariant] = useState("light");

  const toggleColorScheme = () => {
    setBg(bg === "white" ? "primary" : "white");
    setVariant(variant === "light" ? "dark" : "light");
  };

  return (
    <Navbar fixed="top" bg={bg} expand="lg" variant={variant}>
      <Container>
        <Navbar.Brand href="#home">
          <Image
            alt={t('header.brandAlt')}
            src={bg === "white" ? "/bts-crane-wht-logo-en.png" : "/bts-crane-blue-logo-en.png"}
            width="150"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar-nav" onClick={toggleColorScheme} />
        <Navbar.Collapse id="header-navbar-nav">
          <Container className="mobile-header d-flex flex-column justify-content-between">
            <Nav className="mr-auto" variant={variant}>
              <Nav.Link href="#topics">{t('header.topics')}</Nav.Link>
              <Nav.Link href="#downloads">{t('header.downloads')}</Nav.Link>
              <Nav.Link href="#purchase">{t('header.purchase')}</Nav.Link>
              <Nav.Link href="#about">{t('header.about')}</Nav.Link>
            </Nav>
            <Container className="d-lg-none text-center">
              <LanguageSwitcher />
              <Image
                alt="Crane logo"
                src={bg === "white" ? "/bts-crane-wht-logo-en.png" : "/bts-crane-blue-logo-en.png"}
                width="150"
                height="30"
              />{" "}
              <p className="text-light fs-6">
                {t('header.blurb')}
              </p>
            </Container>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { ToggleHeader };
