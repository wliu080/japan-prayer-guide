import Head from "next/head"
import { ToggleHeader } from "../components/toggleHeader"
import { Button, Container } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getSchedule, getFeaturedTopic } from "../services/featuredTopicSelector"
import Footer from "../components/footer"
import FeaturedTopic from "../components/landing/FeaturedTopic"

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

        <Container fluid id="mainBlurbSection" className="bg-white p-5 w-75">
          <p className="px-3">{mainBlurb}</p>
        </Container>

        {/* Why Japan component - nb the CTA image intrudes into this section */}
        <Container fluid id="whyJapanSection" className="p-5 bg-light">
          <Container className="d-flex flex-column align-items-center justify-content-center">
            <h3>{whyJapanHeading}</h3>
            <p>{whyJapanText}</p>
          </Container>
        </Container>
        <Container fluid id="prayerCTA" className="px-5 bg-info">
          <div id="placeholder-image" className="mb-4 p-3 offset-into-above">
            temporary image placeholder
          </div>
          <Container
            id="prayerCTAText"
            className="d-flex flex-column align-items-center justify-content-center offset-into-above"
          >
            <h4>{prayerCTAHeading}</h4>
            {prayerCTATextMap.map((text: string, idx: number) => (
              <p>{text}</p>
            ))}
          </Container>
        </Container>

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
