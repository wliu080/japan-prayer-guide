import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { PurchaseButtons } from "../components/purchase/PurchaseButtons"
import { Container, Row, Col } from "react-bootstrap"
import BootstrapImage from "react-bootstrap/Image"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import SampleBookPageImage from "../public/sample book page.svg"
import SampleBookPageImage2 from "../public/photos/booklet/Book - Slider 1 JP 3.png"
import TranslationIcon from "../public/translationIcon.svg"
import Footer from "../components/footer"
import ImagePagination from "../components/image-pagination/ImagePagination"

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["booklet", "common"])),
      // Will be passed to the page component as props
      // About used in content, common used in header
    },
  }
}

const Booklet: React.FC = () => {
  const { t } = useTranslation("booklet")

  return (
    <div>
      <Head>
        <title>{t("webpageTitle")}</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToggleHeader />
      <main id="purchase">
        <div className="w-100 book-description position-relative">
          <Container>
            <Row md={1} lg={2}>
              <Col>
                <div className="book-image">
                  <BootstrapImage
                    className="book-front-cover"
                    src="/photos/booklet/Book - Cover EN 2.png"
                    alt={t("bookImageAlt")!}
                  />
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <div className="book-text">
                  <h1 className="display-1"><i>{t("heading")}</i></h1>
                  <p className="book-subtext"><i>{t("subtext")}</i></p>
                  <p className="book-subtitle">{t("subtitle")}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container id="prayer-sample" className="py-5">
          <Container className="page-container py-3">
            <ImagePagination
              pages={[
                { src: SampleBookPageImage, text: t('samplePageImageAlt') },
                { src: SampleBookPageImage2, text: "" },
                { src: "", text: "" },
              ]}
            />
          </Container>
        </Container>
        <Container>
          <BootstrapImage
            className="w-100 px-10"
            src="/photos/booklet/BOOK_GIF_JP 4.png"
          />
        </Container>
          <Container className="purchase-section text-center">
            <div className="purchase-copy-header">{t("purchaseCopy")}</div>
            <PurchaseButtons />
            <Link href="https://amazon.com" target="_blank">
              {t("order")}
            </Link>

            <div className="language-availability">
              <span>
                <Image src={TranslationIcon} alt={t("languageAvailability.translationIconAlt")} />
                {t("languageAvailability.header")}
              </span>
              <p>{t("languageAvailability.text")}</p>
            </div>
          </Container>
        <Footer />
      </main>
    </div>
  )
}

export default Booklet
