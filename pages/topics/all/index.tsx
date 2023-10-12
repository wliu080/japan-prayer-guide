import Head from "next/head"
import { ToggleHeader } from "../../../components/toggleHeader"
import { useTranslation } from "next-i18next"
import { Container } from "react-bootstrap"
import { TopicOverviewNav } from "../../../components/topic-overview/TopicOverviewNav"
import React from "react"
import Footer from "../../../components/footer"
import { TopicOverviewSection } from "../../../components/topic-overview/TopicOverviewSection"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Image from "react-bootstrap/Image"

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["topic-overview", "common"])),
            // Will be passed to the page component as props
            // About used in content, common used in header
        },
    }
}

export default function Overview() {
    const { t } = useTranslation("topic-overview")

    // States
    const [selected, setSelected] = React.useState<string>("culture")

    const cultureTopics: string[] = t("cultureTopics", { returnObjects: true })
    const churchTopics: string[] = t("churchTopics", { returnObjects: true })

    const cultureLinks: string[] = t("cultureLinks", { returnObjects: true })
    const churchLinks: string[] = t("churchLinks", { returnObjects: true })

    const title1 = t("topHeading")
    const title2 = t("botHeading")

    const webpageTitle = t("webpageTitle")
    const heading = t("heading")
    const heroSubtext: string[] = t("pageSubtitle", { returnObjects: true })

    return (
        <>
            <Head>
                <title>{webpageTitle}</title>
                <meta name="description" content="Japan prayer guide" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* Header component */}
                <ToggleHeader />

                {/* Hero Banner */}
                <div
                    className="w-100 mx-0 px-0 position-relative d-flex flex-column align-items-center justify-content-center"
                    style={{ height: "490px" }}
                >
                    <Image
                        src={"/photos/topic-nav/TOPNAV_HERO.jpg"}
                        alt={"Topic-nav hero image"}
                        className="w-100 h-100 topic-nav-hero position-absolute"
                    />
                    <Container className="d-flex flex-column align-items-center justify-content-center h-100 topics-header-container">
                        <h1 className="text-black px-3 pb-2 topic-nav-hero-title">{heading}</h1>
                        {heroSubtext.map((text) => (
                            <p
                                key={text}
                                style={{ whiteSpace: "pre-line" }}
                                className="text-black text-center topic-nav-hero-subtitle coming-soon"
                            >
                                {text}
                            </p>
                        ))}
                    </Container>
                </div>

                {/* Overview Nav Component */}
                <TopicOverviewNav selected={selected} setSelected={setSelected} />

                {/* Culture and Society Section */}
                <TopicOverviewSection title={title1} section={"culture"} labels={cultureTopics} links={cultureLinks} />

                {/* Church and Missions Section */}
                <TopicOverviewSection title={title2} section={"church"} labels={churchTopics} links={churchLinks} />

                <Footer />
            </main>
        </>
    )
}
