import Head from "next/head"
import { getTopicPageIds } from "../../services/staticTopicLoader"
import { GetStaticProps, GetStaticPaths } from "next"
import { Container } from "react-bootstrap"
import { ToggleHeader } from "../../components/toggleHeader"
import TopicDownloadables from "../../components/topic/TopicDownloadables"
import RelatedContent from "../../components/topic/RelatedContent"
import Footer from "../../components/footer"
import { Trans, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"
import PrayerPoints, { PrayerDisplayStyle } from "../../components/common/PrayerPoints"
import CollapseBlock from "../../components/topic/CollapseBlock"
import { PhotosWrapper } from "../../components/GalleryComponents/PhotosWrapper/PhotosWrapper"
import { StickyNav, Tab } from "../../components/topic/StickyNav"
import PrayerResponse from "../../components/topic/PrayerResponse"

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

const JsonLink = ({ children = "" }: { children?: string }) => {
    const url = children
    const onClick = () => window.open(url, "_blank")
    return (
        <a href={url} onClick={onClick}>
            {url}
        </a>
    )
}

export default function TopicPage({ localeRef }: { localeRef: string }) {
    const { t } = useTranslation(localeRef)
    const { t: topicCommon } = useTranslation("topic-pages")

    // Objects holding translations
    let textContent: string[] = t("textBody", { returnObjects: true })
    textContent = Array.isArray(textContent) ? textContent : []

    const navTabs: Tab[] = topicCommon("nav", { returnObjects: true })

    const galleryLabel: string = topicCommon("galleryLabel")
    const factsLabel: string = topicCommon("factsLabel")

    const images: any[] = t("photos", { returnObjects: true })
    const galleryType: string = t("galleryType")
    const blockOrder: number[] = t("blockOrder", { returnObjects: true })

    return (
        <>
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content="Japan prayer guide" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* Header Component */}
                <ToggleHeader hideShadow={true} />

                {/* Component to Hold image, as well as title and Prayer Summary */}
                <div id="placeholder-image" className="w-100 mx-0 px-0 position-relative" style={{ height: "700px" }}>
                    temporary image placeholder
                    <Container className="d-flex flex-column align-items-start justify-content-end h-100 py-5">
                        <h1 className="fs-1 text-white px-3">{t("title")}</h1>
                        <PrayerPoints topicTrans={t} displayStyle={PrayerDisplayStyle.TopicTop} />
                    </Container>
                </div>

                {/* Topic Nav Component */}
                <StickyNav tabs={navTabs} />

                {/* Placeholder for a quote */}
                <Container
                    id="about-topic"
                    className="d-flex flex-column justify-content-center align-items-center py-4 my-4"
                >
                    <h1 className="text-secondary fs-1 text-center">
                        <Trans t={t} i18nKey="quote.content" />
                    </h1>
                    <h2 className="text-secondary fs-6 text-center">
                        <Trans t={t} i18nKey="quote.source" />
                    </h2>
                </Container>

                {/* Placeholder text */}
                <Container className="main-content">
                    {textContent.map((text: string, idx: number) => (
                        <p key={idx + text}>
                            <Trans components={{ url: <JsonLink /> }}> {text} </Trans>
                        </p>
                    ))}
                </Container>

                {/* Images */}
                <CollapseBlock title={galleryLabel}>
                    <PhotosWrapper images={images} type={galleryType} blocks={blockOrder} />
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

                {/* Responding in Prayer */}
                <PrayerResponse topicTrans={t} />

                <br />

                {/* Downloads and Related */}
                <TopicDownloadables topicTrans={t} />
                <RelatedContent topicTrans={t} />

                {/* Footer */}
                <Footer />
            </main>
        </>
    )
}
