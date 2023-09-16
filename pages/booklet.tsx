import Head from "next/head"
import Link from "next/link"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { Container, Row, Col, Button } from "react-bootstrap"
import BootstrapImage from "react-bootstrap/Image"
import { useTranslation, Trans } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import ImagePagination from "../components/image-pagination/ImagePagination"
import OrderBook from "../components/common/OrderBook"
import { GrCircleInformation } from "react-icons/gr"
import { IconContext } from "react-icons"
import {
  RiInformationLine,
} from "react-icons/ri"
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

interface OrderRegionType {
  text: string
  url: string
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
  const { t: bookletTranslation } = useTranslation("booklet")
  const introTextParagraphs: string[] = t("introText", { returnObjects: true })

  const orderTitle: string = bookletTranslation("orderTitle")
  const orderBlurb: string = bookletTranslation("orderBlurb")
  const orderRegions: OrderRegionType[] = bookletTranslation("orderRegions", { returnObjects: true })
  const orderEBook: string = bookletTranslation("orderEBook")
  const orderJapan: string = bookletTranslation("orderJapan")
  const orderWarning: string = bookletTranslation("orderWarning")
  const orderBooklet: string = bookletTranslation("orderBooklet")

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
                    src={`/photos/home/hp_cover-${i18n.language}.jpg`}
                    alt={t("bookImageAlt")!}
                  />
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <div className="book-text">
                  <h1>
                    <Trans components={{ italic: <i /> }}>{t("heading")}</Trans>
                  </h1>
                  <p className="book-subheading">
                    <Trans components={{ italic: <i /> }}>{t("subheading")}</Trans>
                  </p>
                  {introTextParagraphs.map((text: string, idx: number) => (
                    <p key={idx + text} className="book-introText">
                      <Trans components={{ italic: <i /> }}>{text}</Trans>
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
        <Container className="booklet-gif mb-5">
          <BootstrapImage className="w-100 px-10" src={`/photos/booklet/BOOK_GIF-${i18n.language}.gif`} />
        </Container>

        {/* Order snippet */}
        <Container className="d-flex flex-column align-items-center w-100 mt-2 mb-5 no-max-container pt-3">
          <Container className="home-order-section bg-grey-2 d-flex flex-column align-items-center">
            {/* <Image alt="order-icon" src="/photos/home/hp_order_ja.png" className="d-block d-md-none mt-3"/> */}
            <div className="position-relative w-100 d-flex align-items-center flex-column">
              <h1 className="w-auto bg-grey-2 p-3 text-grey-7 mt-3 mb-1 position-relative">{orderJapan}</h1>
              <div className="w-100 bg-grey-7 horizontal-bar position-relative"></div>
            </div>
            <Link
              className="fs-5 japan-order bg-grey-2 text-secondary-5 border-secondary-5 text-center fw-bold fs-5 mb-1 p-2 text-decoration-none border rounded"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf03r2GXDfFa17f5ICL_HTy_NuQOpaJcmNgRyFQN10ghgEYqQ/viewform"
            >
              {orderBooklet}
            </Link>
            <h2 className="text-black fs-5 fst-italic mb-2 d-flex align-items-center gap-1 mb-4">
              <IconContext.Provider value={{ size: "16px" }}>
                <RiInformationLine />
              </IconContext.Provider>
              {orderWarning}
            </h2>
          </Container>
          <Container className="home-order-section bg-grey-2 d-flex flex-column align-items-center px-4 mt-4">
            {/* <Image alt="order-icon" src="/photos/home/hp_order_en.png" className="d-block d-md-none mt-3"/> */}
            <div className="position-relative w-100 d-flex align-items-center flex-column">
              <h1 className="w-auto bg-grey-2 p-3 text-grey-7 mt-3 mb-1 position-relative">{orderTitle}</h1>
              <div className="w-100 bg-grey-7 horizontal-bar position-relative"></div>
            </div>
            <h2 className="text-primary fs-4 fw-bold mb-2 mt-1">{orderBlurb}</h2>
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-2">
              {orderRegions.map((region) => (
                <Link
                  className="fs-5 fw-bold bg-secondary-5 text-white text-center region text-decoration-none"
                  href={region.url}
                  key={region.text}
                >
                  {region.text}
                </Link>
              ))}
            </div>
            <Link
              className="fs-4 text-secondary-5 fw-bold text-decoration-underline mb-4"
              href="https://www.amazon.com/dp/B099KSSY79"
            >
              {orderEBook}
            </Link>
          </Container>
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
