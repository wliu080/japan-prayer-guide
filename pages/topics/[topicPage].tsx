import Head from "next/head"
import { getTopicPageIds } from "../../services/staticTopicLoader"
import { GetStaticProps, GetStaticPaths } from "next"
import { Container, Image } from "react-bootstrap"
import { ToggleHeader } from "../../components/ToggleHeader"
import TopicDownloadables from "../../components/topic/TopicDownloadables/TopicDownloadables"
import Footer from "../../components/Footer"
import { Trans, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"
import PrayerPoints, { PrayerDisplayStyle } from "../../components/common/PrayerPoints/PrayerPoints"
import CollapseBlock from "../../components/topic/CollapseBlock"
import { PhotosWrapper } from "../../components/GalleryComponents/PhotosWrapper/PhotosWrapper"
import PrayerResponse from "../../components/topic/PrayerResponse/PrayerResponse"
import { StickyNav, Tab } from "../../components/topic/StickyNav/StickyNav"
import RelatedContent from "../../components/topic/RelatedContent/RelatedContent"
import { ReferencesSection } from "../../components/topic/References/References"

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

    let textAsterisk: string[] = t("textBodyAsterisk", { returnObjects: true })
    textAsterisk = Array.isArray(textAsterisk) ? textAsterisk : []

    const navTabs: Tab[] = topicCommon("nav", { returnObjects: true })

    const galleryLabel: string = topicCommon("galleryLabel")
    const factsLabel: string = topicCommon("factsLabel")
    const galleryClickInstructions: string = topicCommon("galleryClickInstructions")
    const galleryImageText: string = topicCommon("galleryImageText")

    const images: any[] = t("photos", { returnObjects: true })
    const galleryType: string = t("galleryType")
    const blockOrder: number[] = t("blockOrder", { returnObjects: true })
    const uncropped: any[] = t("uncroppedPhotos", { returnObjects: true })

    const heroPhoto: string = t("heroPhoto")
    const heroFocus: string = t("heroFocus")

    const infographicDesktop: string = t("infographic.desktop")
    const infographicTablet: string = t("infographic.tablet")
    const infographicMobile: string = t("infographic.mobile")

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
                <div className="w-100 mx-0 px-0 position-relative hero-section">
                    <Image
                        src={heroPhoto}
                        alt="topic hero image"
                        className="hero-photo"
                        style={{ objectPosition: heroFocus }}
                    />
                    <Container className="d-flex flex-column align-items-start justify-content-end h-100 py-5 px-0">
                        <h1 className="text-white px-3 hero-title">{t("title")}</h1>
                        <PrayerPoints topicTrans={t} displayStyle={PrayerDisplayStyle.TopicTop} />
                    </Container>
                </div>

                {/* Topic Nav Component */}
                <StickyNav tabs={navTabs} />

                <Container className="main-section-container">
                    {/* Placeholder for a quote */}
                    <Container
                        id="about-topic"
                        className="d-flex flex-column justify-content-center align-items-center py-4 mt-4"
                    >
                        <p className="text-primary-blue quote text-center">
                            <Trans t={t} i18nKey="quote.content" />
                        </p>
                        <p className="text-primary-blue fs-5 text-center">
                            <Trans t={t} i18nKey="quote.source" />
                        </p>
                    </Container>

                    {/* Placeholder text */}
                    <Container className="main-content mt-0">
                        {textContent.map((text: string, idx: number) => (
                            <p key={idx + text}>
                                <Trans components={{ url: <JsonLink /> }}> {text} </Trans>
                            </p>
                        ))}
                    </Container>
                    <Container className="fs-5">
                        {textAsterisk.map((text: string, idx: number) => (
                            <p key={idx + text}>
                                <Trans components={{ url: <JsonLink /> }}> {text} </Trans>
                            </p>
                        ))}
                    </Container>

                    {/* Images */}
                    <CollapseBlock title={galleryLabel} startOpened={true} galleryType={galleryType}>
                        <PhotosWrapper
                            images={images}
                            type={galleryType}
                            blocks={blockOrder}
                            subTitle={galleryClickInstructions}
                            galleryTitle={galleryLabel}
                            imageText={galleryImageText}
                            uncropped={uncropped}
                        />
                    </CollapseBlock>

                    {/* Infographics Placeholder */}
                    <CollapseBlock title={factsLabel} startOpened={true} galleryType={"infographic"}>
                        <Container className="mt-3 d-flex justify-content-center">
                            <Image className="d-none d-xl-block" src={infographicDesktop} alt="infographic" />
                            <Image className="d-none d-md-block d-xl-none" src={infographicTablet} alt="infographic" />
                            <Image className="d-block d-md-none" src={infographicMobile} alt="infographic" />
                        </Container>
                    </CollapseBlock>
                    <Container className="">
                        <ReferencesSection />
                    </Container>
                    <hr />
                    <Container className={"bottom-spacing"}></Container>
                </Container>

                <Container fluid className="bg-grey-2 px-0">
                    <Container className="main-section-container px-0">
                        {/* Responding in Prayer */}
                        <PrayerResponse topicTrans={t} />
                    </Container>
                </Container>

                <Container className="main-section-container px-0">
                    {/* Downloads and Related */}
                    <TopicDownloadables topicTrans={t} />
                    <Container>
                        <hr />
                    </Container>
                    <RelatedContent topicTrans={t} />
                    <Container>
                        <hr />
                    </Container>
                </Container>
                {/* Footer */}
                <Footer />
            </main>
        </>
    )
}
