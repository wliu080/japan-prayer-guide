import Head from "next/head"
import { ToggleHeader } from "../components/toggleHeader"
import { Button, Container } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getSchedule, getFeaturedTopic } from "../services/featuredTopicSelector"
import Footer from "../components/footer"
import PrayerSummary from "../components/topic/PrayerSummary"

export const getStaticProps = async ({ locale }: { locale: string }) => {
    const featuredTopicRef: string = "topics/" + getFeaturedTopic(getSchedule())

    return {
        props: {
            featuredTopicRef,
            ...(await serverSideTranslations(locale, ["common", featuredTopicRef])),
            // Will be passed to the page component as props
        },
    }
}

const Home = ({ featuredTopicRef }: { featuredTopicRef: string }) => {
    const { t } = useTranslation("common")
    const { t: featuredTranslation } = useTranslation(featuredTopicRef)

    const summaryPoints: string[] = featuredTranslation("summary.content", { returnObjects: true })
    const summaryTitle: string = featuredTranslation("title")

    return (
        <div>
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content="Japan prayer guide" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <ToggleHeader />

                {/* Hero banner? section */}
                <Container fluid id="heroBannerSection" className="w-100 bg-secondary" style={{ height: "400px" }}>
                    temporary image placeholder
                    <Container className="d-flex flex-column align-items-center justify-content-center h-100 py-4">
                        <h1 className="text-white">{t("home.heroHeading")}</h1>
                        <Button href="/about" className="text-white">
                            {t("home.viewTopics")}
                        </Button>
                    </Container>
                </Container>

                <Container id="mainBlurbSection" className="bg-white">
                    <div className="px-3">{t("home.mainBlurb")}</div>
                </Container>

                {/* Why Japan component */}

                {/* Featured topic component - has to potentially be pulled from a schedule that Sarah can edit */}
                <Container id="featuredTopicSection" className="bg-warning">
                    <Container className="d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-white">{t("home.featuredTopicTitle")}</h3>
                        <h4 className="text-white">{t("home.featuredTopicSubtitle")}</h4>
                    </Container>
                    <PrayerSummary prayerPoints={summaryPoints} title={summaryTitle} />
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
