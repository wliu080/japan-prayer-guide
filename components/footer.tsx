import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
// import Image from "next/image";
import Image from "react-bootstrap/Image"
import { IconContext } from "react-icons/lib"
import { BsYoutube, BsInstagram, BsVimeo } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FaAmazon } from "react-icons/fa"
import Link from "next/link"
import LanguageSwitcher from "./languageSwitcher"
import { Col } from "react-bootstrap"
import { useTranslation } from "next-i18next"

export default function Footer() {
  const { t } = useTranslation("common")

  const tagline = t("footer.tagline")
  const copyrightText = t("footer.copyright")

  return (
    // Footer needs to be two separate things I THINK because the order of components is different between
    // mobile and large sizes
    <>
      {/* Small screens footer starts here */}
      <div className="w-100 d-lg-none">
        <Container fluid className="bg-primary pt-3" data-testid="footer">
          <LanguageSwitcher />
          <Row className="d-flex justify-content-center mt-4">
            <LinksList additional="" />
          </Row>
          <Row className="d-flex justify-content-center align-items-center pt-3 pb-2">
            {/* another temp inline-style for an image */}
            <Image style={{ maxHeight: "50px", width: "auto" }} src="/bts-crane-blue-logo-en.png" alt="logo"></Image>
          </Row>
          <Row className="text-center px-5">
            <p className="text-white fs-6 fw-light">{tagline}</p>
          </Row>
          <Row className="d-flex justify-content-center align-items-center pt-1 pb-3 text-white">
            <IconContext.Provider value={{ size: "25px" }}>
              <a className="text-white footer-icon" href="https://vimeo.com/japanprayerguide">
                <BsVimeo />
              </a>
              <a
                className="text-white footer-icon"
                href="https://www.amazon.com/BENEATH-SURFACE-WAYS-PRAY-JAPAN-ebook/dp/B099KSSY79"
              >
                <FaAmazon />
              </a>
              <a className="text-white footer-icon" href="https://www.instagram.com/omf_japan/">
                <BsInstagram />
              </a>
            </IconContext.Provider>
          </Row>
          <Row className="text-center py-3 px-5">
            <p className="text-white fs-6 fw-light" data-testid={"copyright"}>
              {copyrightText}
            </p>
          </Row>
        </Container>
      </div>
      {/* Large screens footer starts here */}
      {/* Test ids need to be modified to stop duplicates */}
      <div className="w-100 d-none d-lg-flex">
        <Container fluid className="bg-primary pt-3 d-flex" data-testid="footer-2">
          <Col className="d-flex justify-content-center my-4" sm={4}>
            <LinksList additional="1" />
          </Col>
          <Col sm={4} className="my-4">
            <Row className="d-flex justify-content-center align-items-center pt-1 pb-3 text-white">
              <IconContext.Provider value={{ size: "25px" }}>
                <a className="text-white footer-icon" href="https://vimeo.com/japanprayerguide">
                  <BsVimeo />
                </a>
                <a
                  className="text-white footer-icon"
                  href="https://www.amazon.com/BENEATH-SURFACE-WAYS-PRAY-JAPAN-ebook/dp/B099KSSY79"
                >
                  <FaAmazon />
                </a>
                <a className="text-white footer-icon" href="https://www.instagram.com/omf_japan/">
                  <BsInstagram />
                </a>
              </IconContext.Provider>
            </Row>
            <Row className="text-center py-3 px-5">
              <p className="text-white fs-6 fw-light" data-testid={"copyright-2"}>
                {copyrightText}
              </p>
            </Row>
          </Col>
          <Col sm={4} className="my-4">
            <Row>
              <LanguageSwitcher />
            </Row>
            <Row className="d-flex justify-content-center align-items-center pt-3 pb-2">
              {/* another temp inline-style for an image */}
              <Image style={{ maxHeight: "50px", width: "auto" }} src="/bts-crane-blue-logo-en.png" alt="logo"></Image>
            </Row>
            <Row className="text-center px-5">
              <p className="text-white fs-6 fw-light">{tagline}</p>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  )
}

function LinksList({ additional }: { additional: string }) {
  const { t } = useTranslation("common")

  const siteMapText = t("footer.title")
  const mapLink1Text = t("footer.link1")
  const mapLink2Text = t("footer.link2")
  const mapLink3Text = t("footer.link3")
  const mapLink4Text = t("footer.link4")
  const mapLink5Text = t("footer.link5")

  return (
    <div
      data-testid={"linksList" + additional}
      className="d-flex flex-column px-3 gap-0 text-white"
      style={{ maxWidth: "600px" }}
    >
      <p className="m-1 fs-5 fw-bold">{siteMapText}</p>
      <Link href="/" className="m-1 fs-6 fw-lighter text-white text-decoration-none">
        {mapLink1Text}
      </Link>
      <Link href="/topics/all" className="m-1 fs-6 fw-lighter text-white text-decoration-none">
        {mapLink2Text}
      </Link>
      <Link href="/booklet" className="m-1 fs-6 fw-lighter text-white text-decoration-none">
        {mapLink3Text}
      </Link>
      <Link href="/download" className="m-1 fs-6 fw-lighter text-white text-decoration-none">
        {mapLink4Text}
      </Link>
      <Link href="/about" className="m-1 fs-6 fw-lighter text-white text-decoration-none">
        {mapLink5Text}
      </Link>
    </div>
  )
}
