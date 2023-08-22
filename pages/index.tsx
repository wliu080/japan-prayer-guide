import Head from "next/head"
import { ToggleHeader } from "../components/toggleHeader"
import { Button, Carousel, CarouselItem, Col, Container, Image, Row } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getSchedule, getFeaturedTopic } from "../services/featuredTopicSelector"
import Footer from "../components/footer"
import FeaturedTopic from "../components/landing/FeaturedTopic"
import { IconContext } from "react-icons"
import { RiMic2Fill, RiSlideshowLine, RiDonutChartFill, RiImageFill, RiFile3Line } from "react-icons/ri"
import { FaPrayingHands } from "react-icons/fa"
import DownloadLinkCard from "../components/landing/DownloadLinkCard"
import { ReactNode } from "react"

export const getStaticProps = async ({ locale }: { locale: string }) => {
  // schedule is from featured-topics.json
  const featuredTopicRef: string = "topics/" + getFeaturedTopic(getSchedule())

  return {
    props: {
      featuredTopicRef,
      ...(await serverSideTranslations(locale, ["common", "home", featuredTopicRef])),
      // Will be passed to the page component as props
    },
  }
}

const Home = ({ featuredTopicRef }: { featuredTopicRef: string }) => {
  const { t: homePageTranslation } = useTranslation("home")
  const { t: featuredTranslation } = useTranslation(featuredTopicRef)

  const webpageTitle: string = homePageTranslation("webpageTitle")
  const heroHeading: string = homePageTranslation("heroHeading")
  const heroSubheading: string = homePageTranslation("heroSubheading")
  const heroViewTopicsBtn: string = homePageTranslation("titleButton")
  const introText1: string = homePageTranslation("introText1")

  const introText2Subheading: string = homePageTranslation("introText2Subheading")
  const introText2a: string = homePageTranslation("introText2a")

  const bibleVerse: string = homePageTranslation("bibleVerse")
  const bibleRef: string = homePageTranslation("bibleRef")

  const introText2b: string = homePageTranslation("introText2b")
  const callToAction: string = homePageTranslation("introText2bCallToAction")

  const featuredTopicTitle: string = homePageTranslation("featuredTopicTitle")

  const purchaseTitle: string = homePageTranslation("purchaseTitle")
  const purchaseBlurb: string = homePageTranslation("purchaseBlurb")

  const orderTitle: string = homePageTranslation("orderTitle")
  const orderBlurb: string = homePageTranslation("orderBlurb")
  const orderRegions: string[] = homePageTranslation("orderRegions", { returnObjects: true })
  const orderEnglish: string = homePageTranslation("orderEnglish")
  const orderJapan: string = homePageTranslation("orderJapan")
  const preview: string = homePageTranslation("preview")

  const downloadTitle: string = homePageTranslation("downloadTitle")
  const downloadBlurb: string = homePageTranslation("downloadBlurb")
  const downloadList: string[] = homePageTranslation("downloadList", { returnObjects: true })
  const comingSoon: string = homePageTranslation("comingSoon")

  const prayerPoints: string[] = featuredTranslation("prayerSummary", { returnObjects: true })
  const prayerTitle: string = featuredTranslation("title")

  const learnBlurb: string = homePageTranslation("learnBlurb")
  const learnMoreAbout: string = homePageTranslation("learnMoreAbout")

  const iconList: ReactNode[] = [
    <RiMic2Fill key={0} />,
    <RiSlideshowLine key={1} />,
    <RiDonutChartFill key={2} />,
    <RiImageFill key={3} />,
    <RiFile3Line key={4} />,
    <FaPrayingHands key={5} />,
  ]

  return (
    <div>
      <Head>
        <title>{webpageTitle}</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="home">
        <ToggleHeader />

        {/* Hero banner section */}
        <div id="heroBannerSection" className="w-100 bg-secondary position-relative text-center">
          <Image alt="home page hero" src="/photos/home/hp_hero.png" className="home-hero" />
          <div className="home-hero-text-group d-flex flex-column align-items-start justify-content-center px-lg-5 px-md-4 px-3 position-absolute">
            <h2 className="text-white">{heroSubheading}</h2>
            <h1 className="text-white">{heroHeading}</h1>
            <Button href="/topics/all" className="text-white my-3 bg-secondary-5 border-secondary-5">
              {heroViewTopicsBtn}
            </Button>
          </div>
        </div>

        {/* Main blurb */}
        <Container fluid id="mainBlurbSection" className="py-1 home-main-blurb d-flex align-items-center">
          <p className="px-3 text-primary" dangerouslySetInnerHTML={{ __html: introText1 }}></p>
        </Container>

        {/* Invitation to prayer */}
        <div className="home-invitation d-flex flex-column align-items-center w-100 position-relative">
          <Container>
            <h1 className="text-center mt-5">{introText2Subheading}</h1>
            <p className="mt-4">{introText2a}</p>
          </Container>
          <Carousel
            controls={true}
            fade={true}
            interval={3000}
            className="w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <CarouselItem className="w-100 d-flex justify-content-center">
              <Image className="home-carousel-image" alt="hero image 1" src="/photos/home/hp_slider-1.png" />
            </CarouselItem>
            <CarouselItem className="w-100 d-flex justify-content-center">
              <Image className="home-carousel-image" alt="hero image 2" src="/photos/home/hp_slider-2.png" />
            </CarouselItem>
            <CarouselItem className="w-100 d-flex justify-content-center">
              <Image className="home-carousel-image" alt="hero image 3" src="/photos/home/hp_slider-3.png" />
            </CarouselItem>
          </Carousel>
        </div>

        {/* Bible Verse */}
        <Container className="home-verse-container d-flex flex-column w-100 mx-0 px-0">
          <div className="w-100" style={{ height: "90px" }}></div>
          <div className="d-flex flex-column w-100 bg-grey-7 px-4">
            <h2 className="w-100 text-white text-center mt-5">{bibleVerse}</h2>
            <h3 className="w-100 text-white mt-3 pb-4 text-center">{bibleRef}</h3>
          </div>
        </Container>

        <Container className="home-call-to-action d-flex flex-column align-items-center justify-content-center px-4">
          <p className="w-100">
            {introText2b} <strong>{callToAction}</strong>
          </p>
        </Container>

        {/* Featured topic */}
        <Container fluid id="featuredTopicSection" className="py-5 bg-secondary-2">
          <Container className="d-flex flex-column align-items-center justify-content-center">
            <h3>{featuredTopicTitle}</h3>
          </Container>
          <FeaturedTopic
            featuredImg="/photos/topic-nav/church/church-leadership.png"
            title={prayerTitle}
            prayerPoints={prayerPoints}
          />
        </Container>

        {/* Purchase snippet */}
        <Container className="home-purchase-section p-5 d-flex align-items-center justify-content-center flex-column flex-sm-row">
          <Image alt="book-cover" src="/photos/home/hp_cover.png" />
          <div className="w-100 d-flex flex-column purchase-text-container mx-5">
            <h1 className="mt-5">{purchaseTitle}</h1>
            <p className="my-3">{purchaseBlurb}</p>
          </div>
        </Container>

        {/* Order snippet */}
        <Container className="d-flex flex-column align-items-center w-100 mt-2 mb-5">
          <Container className="home-order-section bg-grey-2 d-flex flex-column align-items-center">
            <h1 className="text-grey-7 my-4 fw-bold">{orderTitle}</h1>
            <h2 className="text-primary fs-5 fw-bold mb-2">{orderBlurb}</h2>
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-2">
              {orderRegions.map((region) => (
                <div className="fs-6 bg-secondary-5 text-white text-center region" key={region}>
                  {region}
                </div>
              ))}
            </div>
            <h3 className="fs-5 text-secondary-5 fw-bold text-decoration-underline mb-3">{orderEnglish}</h3>
          </Container>
          <h3 className="my-3 fs-5 text-secondary-5 fw-bold text-decoration-underline">{orderJapan}</h3>
          <Button className="bg-white text-secondary-5 border-secondary-5 fw-bold fs-5">{preview}</Button>
        </Container>

        {/* Downloads snippet */}
        <div
          className="bg-secondary-2 w-100 d-flex align-items-center flex-column justify-content-center p-4"
          style={{ height: "auto" }}
        >
          {/* Placeholder for future image */}
          <div
            className="mt-5"
            style={{ backgroundColor: "#BCC3CF", width: "100%", maxWidth: "442px", aspectRatio: 1.8 }}
          ></div>
          <h1 className="mt-4 w-100 text-center home-common-h1">{downloadTitle}</h1>
          <h2 className="fw-normal w-100 text-center home-common-blurb">{downloadBlurb}</h2>
          <Container className="d-none d-xl-block">
            <IconContext.Provider value={{ size: "30px" }}>
              <Row lg={6} className="w-100 my-4">
                {downloadList.map((downloadText, idx) => (
                  <Col key={idx + downloadText}>
                    <DownloadLinkCard downloadText={downloadText}>{iconList[idx]}</DownloadLinkCard>
                  </Col>
                ))}
              </Row>
            </IconContext.Provider>
          </Container>

          <Button className="bg-grey-4 text-white px-3 text-center border-0 mb-5">{comingSoon}</Button>
        </div>

        {/* Beneath the Surface initiative - About snippet */}
        <div className="w-100 bg-grey-7 p-5 d-flex flex-column align-items-center">
          <div className="d-flex gap-3 align-items-center justify-content-center w-100">
            <Image alt="BTS Crane" src="/photos/home/hp_crane.png" />
            <Image alt="BTS Crane" src="/photos/home/hp_logo.png" />
          </div>
          <div className="home-common-blurb text-center text-white my-3 w-100">{learnBlurb}</div>
          <Button className="fs-5 text-nowrap border-white px-4 py-2 text-white text-center bg-grey-7 mt-4">
            {learnMoreAbout}
          </Button>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default Home
