import Head from "next/head"
import { ToggleHeader } from "../components/toggleHeader"
import { Button, Container } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getSchedule, getFeaturedTopic } from "../services/featuredTopicSelector"
import Footer from "../components/footer"
import FeaturedTopic from "../components/landing/FeaturedTopic"
import PrayForJapan from "../components/landing/PrayForJapan"

export const getStaticProps = async ({ locale }: { locale: string }) => {
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
  const { t } = useTranslation("common")
  const { t: homePageTranslation } = useTranslation("home")
  const { t: featuredTranslation } = useTranslation(featuredTopicRef)

  const heroHeading: string = homePageTranslation("heroHeading")
  const heroViewTopicsBtn: string = homePageTranslation("viewTopics")
  const mainBlurb: string = homePageTranslation("mainBlurb")

  const whyJapanHeading: string = homePageTranslation("whyJapanHeading")
  const whyJapanText: string = homePageTranslation("whyJapanText")
  const prayerCTAHeading: string = homePageTranslation("prayerCTAHeading")
  const prayerCTATextMap: string[] = homePageTranslation("prayerCTAText", { returnObjects: true })

  const featuredTopicTitle: string = homePageTranslation("featuredTopicTitle")
  const featuredTopicSubtitle: string = homePageTranslation("featuredTopicSubtitle")

  const prayerPoints: string[] = featuredTranslation("summary.content", { returnObjects: true })
  const prayerTitle: string = featuredTranslation("title")
  const prayerSub: string = featuredTranslation("prayerPoints.subtitle")

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="home">
        <ToggleHeader />

        {/* Hero banner? section */}
        <Container fluid id="heroBannerSection" className="w-100 bg-secondary" style={{ height: "400px" }}>
          temporary image placeholder
          <Container className="d-flex flex-column align-items-center justify-content-center h-100 py-4">
            <h1 className="text-white">{heroHeading}</h1>
            <Button href="/about" className="text-white">
              {heroViewTopicsBtn}
            </Button>
          </Container>
        </Container>

        <Container fluid id="mainBlurbSection" className="p-5">
          <p className="px-3">{mainBlurb}</p>
        </Container>

        <PrayForJapan
          whyJapanHeading={whyJapanHeading}
          whyJapanText={whyJapanText}
          prayerCTAHeading={prayerCTAHeading}
          prayerCTATextMap={prayerCTATextMap}
        />

        {/* Featured topic */}
        <Container fluid id="featuredTopicSection" className="py-5 bg-warning">
          <Container className="d-flex flex-column align-items-center justify-content-center text-white">
            <h3>{featuredTopicTitle}</h3>
            <h4>{featuredTopicSubtitle}</h4>
          </Container>
          <FeaturedTopic title={prayerTitle} prayerPoints={prayerPoints} subtitle={prayerSub} />
        </Container>

        {/* Downloads snippet */}

        {/* Purchase snippet */}

        {/* About snippet */}

        <Footer />
      </main>
    </div>
  )
}

export default Home
