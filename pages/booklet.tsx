import Head from "next/head"
import Link from "next/link"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { Container, Row, Col, Button } from "react-bootstrap"
import BootstrapImage from "react-bootstrap/Image"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import ImagePagination from "../components/image-pagination/ImagePagination"
import OrderBook from "../components/common/OrderBook"
import { OrderRegionType } from "."
import BookPageImageEN1 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 1.jpg"
import BookPageImageEN2 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 2.jpg"
import BookPageImageEN3 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 3.jpg"
import BookPageImageEN4 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 4.jpg"
import BookPageImageEN5 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 5.jpg"
import BookPageImageEN6 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 6.jpg"
import BookPageImageEN7 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 7.jpg"
import BookPageImageEN8 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 8.jpg"
import BookPageImageEN9 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 9.jpg"
import BookPageImageEN10 from "../public/photos/booklet/pagination/en/en_Book_mweb-Slider 10.jpg"
import BookPageImageJA1 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 1.jpg"
import BookPageImageJA2 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 2.jpg"
import BookPageImageJA3 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 3.jpg"
import BookPageImageJA4 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 4.jpg"
import BookPageImageJA5 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 5.jpg"
import BookPageImageJA6 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 6.jpg"
import BookPageImageJA7 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 7.jpg"
import BookPageImageJA8 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 8.jpg"
import BookPageImageJA9 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 9.jpg"
import BookPageImageJA10 from "../public/photos/booklet/pagination/ja/ja_Book_mweb-Slider 10.jpg"
import { StaticImageData } from "next/image"

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["booklet", "common"])),
      // Will be passed to the page component as props
      // About used in content, common used in header
    },
  }
}

interface PaginationSrcType {
  src: StaticImageData
  text: string
}

const enImages: PaginationSrcType[] = [
  { src: BookPageImageEN1, text: "" },
  { src: BookPageImageEN2, text: "" },
  { src: BookPageImageEN3, text: "" },
  { src: BookPageImageEN4, text: "" },
  { src: BookPageImageEN5, text: "" },
  { src: BookPageImageEN6, text: "" },
  { src: BookPageImageEN7, text: "" },
  { src: BookPageImageEN8, text: "" },
  { src: BookPageImageEN9, text: "" },
  { src: BookPageImageEN10, text: "" },
]
const jaImages: PaginationSrcType[] = [
  { src: BookPageImageJA1, text: "" },
  { src: BookPageImageJA2, text: "" },
  { src: BookPageImageJA3, text: "" },
  { src: BookPageImageJA4, text: "" },
  { src: BookPageImageJA5, text: "" },
  { src: BookPageImageJA6, text: "" },
  { src: BookPageImageJA7, text: "" },
  { src: BookPageImageJA8, text: "" },
  { src: BookPageImageJA9, text: "" },
  { src: BookPageImageJA10, text: "" },
]

const Booklet: React.FC = () => {
  const { t, i18n } = useTranslation("booklet")
  const { t: commonTranslation } = useTranslation("common")
  const introTextParagraphs: string[] = t("introText", { returnObjects: true })

  const orderTitle: string = commonTranslation("order.title")
  const orderBlurb: string = commonTranslation("order.blurb")
  const orderRegions: OrderRegionType[] = commonTranslation("order.regions", { returnObjects: true })
  const orderEBook: string = commonTranslation("order.prompt")
  const orderJapan: string = commonTranslation("order.japan")
  const orderWarning: string = commonTranslation("order.warning")
  const orderBooklet: string = commonTranslation("order.form")

  return (
    <div>
      <Head>
        <title>{t("webpageTitle")}</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToggleHeader />
      <main id="booklet">
        <div className="w-100 book-description position-relative">
          <Container>
            <Row xs={1} sm={1} md={1} xl={2}>
              <Col className="align-items-center">
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
                  <h1>
                    <i>{t("heading")}</i>
                  </h1>
                  <p className="book-subheading">
                    <i>{t("subheading")}</i>
                  </p>
                  {introTextParagraphs.map((text: string, idx: number) => (
                    <p key={idx + text} className="book-introText">
                      {text}
                    </p>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container id="prayer-sample" className="py-5">
          <Container className="page-container py-3">
            <ImagePagination pages={i18n.language === "en" ? enImages : jaImages} />
          </Container>
        </Container>
        <Container>
          <BootstrapImage className="w-100 px-10" src="/photos/booklet/BOOK_GIF_JP 4.png" />
        </Container>

        <OrderBook
          title={orderTitle}
          blurb={orderBlurb}
          orderRegionsMap={orderRegions}
          orderPrompt={orderEBook}
          orderJapan={orderJapan}
          orderWarning={orderWarning}
          orderBooklet={orderBooklet}
          language={i18n.language}
        />
        <section className="redirect-section d-flex align-items-center" style={{ height: "25rem;" }}>
          <Container className="text-center">
            <h1>{t("prayerRedirectHeading")}</h1>
            <Link href="/topics/all" locale={i18n.language}>
              <Button className="text-white">{t("prayerRedirectButtonText")}</Button>
            </Link>
          </Container>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Booklet
