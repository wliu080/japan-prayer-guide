import Head from "next/head"
import { ToggleHeader } from "../components/toggleHeader"
import { Button, Carousel, CarouselItem, Container, Image } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getSchedule, getFeaturedTopic } from "../services/featuredTopicSelector"
import Footer from "../components/footer"
import FeaturedTopic from "../components/landing/FeaturedTopic"
import PrayForJapan from "../components/landing/PrayForJapan"

export const getStaticProps = async ({ locale }: { locale: string }) => {
  // const featuredTopicRef: string = "topics/" + getFeaturedTopic(getSchedule())
  const featuredTopicRef: string = "topics/church-leadership"

  return {
    props: {
      featuredTopicRef,
      ...(await serverSideTranslations(locale, ["common", "home", featuredTopicRef])),
      // Will be passed to the page component as props
    },
  }
}

const Home = ({ featuredTopicRef }: { featuredTopicRef: string }) => {
  const { t } = useTranslation("common")
  const { t: homePageTranslation } = useTranslation("home")
  const { t: featuredTranslation } = useTranslation(featuredTopicRef)

  const webpageTitle: string = homePageTranslation("webpageTitle")
  const heroHeading: string = homePageTranslation("heroHeading")
  const heroSubheading: string = homePageTranslation("heroSubheading")
  const heroViewTopicsBtn: string = homePageTranslation("viewTopics")
  const mainBlurb: string = homePageTranslation("mainBlurb")

  const invitationTitle: string = homePageTranslation("invitationTitle")
  const invitationBlurb: string = homePageTranslation("invitationBlurb")

  const bibleVerse: string = homePageTranslation("bibleVerse")
  const bibleRef: string = homePageTranslation("bibleRef")

  const wePray: string = homePageTranslation("wePray")
  const callToAction: string = homePageTranslation("callToAction")

  // const whyJapanHeading: string = homePageTranslation("whyJapanHeading")
  // const whyJapanText: string = homePageTranslation("whyJapanText")
  // const prayerCTAHeading: string = homePageTranslation("prayerCTAHeading")
  // const prayerCTATextMap: string[] = homePageTranslation("prayerCTAText", { returnObjects: true })

  const featuredTopicTitle: string = homePageTranslation("featuredTopicTitle")
  // const featuredTopicSubtitle: string = homePageTranslation("featuredTopicSubtitle")

  const purchaseTitle: string = homePageTranslation("purchaseTitle")
  const purchaseBlurb: string = homePageTranslation("purchaseBlurb")
  const learnMore: string = homePageTranslation("learnMore")

  const orderTitle: string = homePageTranslation("orderTitle")
  const orderBlurb: string = homePageTranslation("orderBlurb")
  const orderRegions: string[] = homePageTranslation("orderRegions", { returnObjects: true })
  const orderEnglish: string = homePageTranslation("orderEnglish")
  const orderJapan: string = homePageTranslation("orderJapan")

  const prayerPoints: string[] = featuredTranslation("prayerSummary", { returnObjects: true })
  const prayerTitle: string = featuredTranslation("title")

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
        <div id="heroBannerSection" className="w-100 bg-secondary position-relative">
          <Image alt="home page hero" src="/photos/home/hp_hero.png" className="home-hero"/>
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
          <p className="px-3 text-primary text-center">{mainBlurb}</p>
        </Container>

        {/* Invitation to prayer */}
        <div className="home-invitation d-flex flex-column align-items-center w-100 position-relative">
          <Container>
            <h1 className="text-center mt-5">{invitationTitle}</h1>
            <p className="text-center mt-4">{invitationBlurb}</p>
          </Container>
          <Carousel controls={false} fade={true} interval={3000} className="w-100 d-flex flex-column justify-content-center align-items-center">
            <CarouselItem className="w-100 d-flex justify-content-center">
              <Image className="home-carousel-image" alt="hero image 1" src="/photos/home/hp_slider-1.png"/>
            </CarouselItem>
            <CarouselItem className="w-100 d-flex justify-content-center">
              <Image className="home-carousel-image" alt="hero image 2" src="/photos/home/hp_slider-2.png"/>
            </CarouselItem>
            <CarouselItem className="w-100 d-flex justify-content-center">
              <Image className="home-carousel-image" alt="hero image 3" src="/photos/home/hp_slider-3.png"/>
            </CarouselItem>
          </Carousel>
        </div>

        {/* Bible Verse */}
        <Container className="home-verse-container d-flex flex-column w-100 px-4">
          <h2 className="w-100 text-center text-primary">{bibleVerse}</h2>
          <h3 className="w-100 text-center text-primary mt-3 pb-4">{bibleRef}</h3>
        </Container>

        <Container className="home-call-to-action d-flex flex-column align-items-center justify-content-center">
          <p className="w-100 text-center">
            {wePray} <strong>{callToAction}</strong>
          </p>
        </Container>

        {/* Featured topic */}
        <Container fluid id="featuredTopicSection" className="py-5 bg-secondary-2">
          <Container className="d-flex flex-column align-items-center justify-content-center">
            <h3 className="aleo">{featuredTopicTitle}</h3>
            {/* <h4>{featuredTopicSubtitle}</h4> */}
          </Container>
          <FeaturedTopic featuredImg="/photos/topic-nav/church/church-leadership.png" title={prayerTitle} prayerPoints={prayerPoints} />
        </Container>

        {/* Purchase snippet */}
        <Container className="home-purchase-section p-5 d-flex align-items-center justify-content-center flex-column flex-sm-row">
          <Image alt="book-cover" src="/photos/home/hp_cover.png"/>
          <div className="w-100 d-flex flex-column align-items-center purchase-text-container mx-5">
            <h1 className="text-center aleo mt-5">{purchaseTitle}</h1>
            <p className="text-center my-3">{purchaseBlurb}</p>
            <p className="fw-bold my-3 text-secondary-5 text-decoration-underline">{learnMore}</p>
          </div>
        </Container>

        {/* Order snippet */}
        <Container className="d-flex align-items-center w-100 mt-2 mb-5">
          <Container className="home-order-section bg-grey-2 d-flex flex-column align-items-center">
            <h1 className="aleo text-grey-7 my-4 fw-bold text-center">{orderTitle}</h1>
            <h2 className="text-primary fs-5 text-center fw-bold mb-2">{orderBlurb}</h2>
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-2">
              {orderRegions.map((region) =>
                <div className="fs-6 bg-secondary-5 text-white text-center region" key={region}>{region}</div>
              )}
            </div>
            <h3 className="fs-5 text-secondary-5 fw-bold text-decoration-underline">{orderEnglish}</h3>
            <h3 className="mb-3 fs-5 text-secondary-5 fw-bold text-decoration-underline">{orderJapan}</h3>
          </Container>
        </Container>

        {/* <PrayForJapan
          whyJapanHeading={whyJapanHeading}
          whyJapanText={whyJapanText}
          prayerCTAHeading={prayerCTAHeading}
          prayerCTATextMap={prayerCTATextMap}
        /> */}

        {/* Downloads snippet */}

        {/* About snippet */}

        <Footer />
      </main>
    </div>
  )
}

export default Home
