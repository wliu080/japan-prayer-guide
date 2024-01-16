import Head from "next/head"
import { getTopicPageIds } from "../../services/staticTopicLoader"
import { GetStaticProps, GetStaticPaths } from "next"
import { Container } from "react-bootstrap"
import { ToggleHeader } from "../../components/toggleHeader"
import TopicDownloadables from "../../components/topic/TopicDownloadables"
import RelatedContent from "../../components/topic/RelatedContent"
import Footer from "../../components/footer"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Feedback from "../../components/topic/Feedback"
import { TopicNav } from "../../components/topic/TopicNav"
import React from "react"
import NestedModal from "../../components/NestedModal/NestedModal"
import PrayerPoints, { PrayerDisplayStyle } from "../../components/common/PrayerPoints"
import CollapseBlock from "../../components/topic/CollapseBlock"

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getTopicPageIds()

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }: any) => {
    if (!params) {
        return {
            props: {},
        }
    }

    // const topicId: string = params.topicPage
    const localeRef: string = "topics/" + params.topicPage

    return {
        props: {
            localeRef,
            ...(await serverSideTranslations(locale, ["common", "topic-pages", localeRef])),
        },
    }
}

export default function TopicPage({ localeRef }: { localeRef: string }) {
    const { t } = useTranslation(localeRef)
    const { t: topicCommon } = useTranslation("topic-pages")

    // Objects holding translations
    let textContent: string[] = t("textBody", { returnObjects: true })
    textContent = Array.isArray(textContent) ? textContent : []

    const quoteContent: string = t("quote.content")
    const quoteSource: string = t("quote.source")

    const pageTitle: string = t("title")

    const galleryLabel: string = topicCommon("galleryLabel")
    const factsLabel: string = topicCommon("factsLabel")

    // States
    const [selected, setSelected] = React.useState<string>("About")

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Japan prayer guide" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* Header Component */}
                <ToggleHeader />

                {/* Component to Hold image, as well as title and Prayer Summary */}
                <div id="placeholder-image" className="w-100 mx-0 px-0 position-relative" style={{ height: "700px" }}>
                    temporary image placeholder
                    <Container className="d-flex flex-column align-items-start justify-content-end h-100 py-5">
                        <h1 className="fs-1 text-white px-3">{t("title")}</h1>
                        <PrayerPoints topicTrans={t} displayStyle={PrayerDisplayStyle.TopicTop} />
                    </Container>
                </div>

                {/* Topic Nav Component */}
                <TopicNav selected={selected} setSelected={setSelected} topicTrans={t} />

                {/* Placeholder for a quote */}
                <Container className="d-flex flex-column justify-content-center align-items-center py-4 my-4">
                    <h1 className="text-secondary fs-1 text-center">{quoteContent}</h1>
                    <h2 className="text-secondary fs-6 text-center">{quoteSource}</h2>
                </Container>

                {/* Placeholder text */}
                <Container className="py-5">
                    {textContent.map((text: string, idx: number) => (
                        <p key={idx + text}>{text}</p>
                    ))}
                </Container>

                {/* Images */}
                <CollapseBlock title={galleryLabel}>
                    <NestedModal />
                    {/* Image Grid
                        <ImageGroup /> */}
                </CollapseBlock>

                {/* Infographics Placeholder */}
                <CollapseBlock title={factsLabel}>
                    <Container>
                        <div id="placeholder-image" className="w-100">
                            Infographics Placeholder
                        </div>
                        {/* Placeholder Image */}
                        <div id="placeholder-image" className="w-100 my-5">
                            Placeholder
                        </div>
                    </Container>
                </CollapseBlock>

                {/* Prayer Points */}
                <PrayerPoints topicTrans={t} displayStyle={PrayerDisplayStyle.TopicBottom} />
                <br />

                {/* Give us Feedback */}
                <Feedback />

                {/* Downloads and Related */}
                <TopicDownloadables topicTrans={t} />
                <RelatedContent topicTrans={t} />

                {/* Footer */}
                <Footer />
            </main>
        </>
    )
}
