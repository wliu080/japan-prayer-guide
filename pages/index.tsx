import Head from "next/head"
import { ToggleHeader } from "../components/toggleHeader"
import { Button, Container } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getSchedule, getFeaturedTopic } from "../services/featuredTopicSelector"
import Footer from "../components/footer"

export const getStaticProps = async ({ locale }: { locale: string }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    }
}

const Home: React.FC = () => {
    const { t } = useTranslation("common")

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
                    <span>{getFeaturedTopic(getSchedule())}</span>
                    {/* Reuse topic prayer point component */}
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
