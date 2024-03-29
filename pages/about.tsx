import Head from "next/head"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { Container, Image } from "react-bootstrap"
import { useTranslation, Trans } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import Link from "next/link"

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["about", "common"])),
            // Will be passed to the page component as props
            // About used in content, common used in header
        },
    }
}

const About: React.FC = () => {
    const { t } = useTranslation("about")

    const introBlurb: string[] = t("introBlurb", { returnObjects: true })
    const contextBlurb: string[] = t("contextBlurb", { returnObjects: true })

    return (
        <div>
            <Head>
                <title>{t("webpageTitle")}</title>
                <meta name="description" content="Japan prayer guide" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main id="about">
                <ToggleHeader />

                {/* Hero Section */}
                <div
                    id="about-landing-image"
                    className="w-100 mx-0 d-flex align-items-center justify-content-center flex-column position-relative"
                >
                    <Image
                        alt="about hero image"
                        src="/photos/about/about_hero.jpg"
                        className="position-absolute top-0"
                    />
                    <h2 className="px-4 px-md-5 px-lg-4 text-white w-100">
                        <Trans t={t} i18nKey="heroSubheader" />
                    </h2>
                    <h1 className="px-4 px-md-5 px-lg-4 text-white w-100" style={{ whiteSpace: "pre-line" }}>
                        <Trans t={t} i18nKey="heroHeader" />
                    </h1>
                </div>

                {/* Growing interest section */}
                <Container id="who-are-we" className="w-100 d-flex flex-column align-items-center px-4 px-md-4">
                    <h1 className="text-primary about-h1-header text-center">
                        <Trans t={t} i18nKey="introTitle" />
                    </h1>
                    <Image className="mt-4 about-main-image" alt="about img 1" src="/photos/about/about_01.png" />
                    <Container className="px-0">
                        <div className="w-100 mt-4 pt-3"></div>
                        {introBlurb.map((text, idx) => (
                            <p key={idx + text} className="common-p about-body-text">
                                <Trans>{text}</Trans>
                            </p>
                        ))}
                    </Container>
                </Container>

                {/* Beneath section */}
                <div className="bg-secondary-2 w-100 pb-4 pb-md-5 pt-5 d-flex align-items-center flex-column px-4 px-md-4">
                    <Container className="about-beneath-surface align-items-center">
                        <h1 className="mt-2 mb-4 pb-2 text-primary about-h1-header text-center">
                            <Trans t={t} i18nKey="contextTitle" />
                        </h1>
                        <Container className="d-flex flex-column flex-md-row gap-3 gap-xl-4 about-images justify-content-center px-4">
                            <Image alt="about img 2" src="/photos/about/about_02.png" className="about-image" />
                            <Image alt="about img 3" src="/photos/about/about_03.png" className="about-image" />
                        </Container>
                        <div className="w-100 mt-4 pt-3"></div>
                        <Container className="about-beneath-surface-text">
                            {contextBlurb.map((text, idx) => (
                                <p key={"context-blurb-" + idx} className="common-p about-body-text">
                                    <Trans>{text}</Trans>
                                </p>
                            ))}
                        </Container>
                    </Container>
                </div>

                {/* Verse section */}
                <div className="w-100 py-5 px-4 bg-grey-7">
                    <Container className="w-100 about-verse">
                        <h2 className="common-p text-white text-center fst-italic mt-3">
                            <Trans t={t} i18nKey="bible.content" />
                        </h2>
                        <h3 className="text-white text-center about-passage-location mt-4 mb-2">
                            <Trans t={t} i18nKey="bible.passageLocation" />
                        </h3>
                    </Container>
                </div>

                {/* Invitation to prayer */}
                <Container className="w-100 about-invite px-4">
                    <div className="d-flex mt-2 flex-column align-items-center border-grey-4 border-bottom">
                        <h1 className="mt-5 about-h1-header text-black text-center">
                            <Trans t={t} i18nKey="inviteTitle" />
                        </h1>
                        <Container className="px-0">
                            <p className="mt-4 mb-5 common-p about-body-text">
                                <Trans t={t} i18nKey="inviteBlurb" />{" "}
                                <strong>
                                    <Trans t={t} i18nKey="callToAction" />
                                </strong>
                            </p>
                        </Container>
                    </div>
                </Container>

                {/* Logos */}
                <Container className="about-logos-container w-100 d-flex justify-content-center align-items-center my-5">
                    <div className="ms-2">
                        <Link href="https://omf.org/east-asia/japan/">
                            <Image className="omf-logo" alt="omf logo" src="/photos/about/about_omf.png" />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="https://www.pioneersjapan.org/">
                            <Image className="pioneers-logo" alt="omf logo" src="/photos/about/about_pioneers.png" />
                        </Link>
                    </div>
                </Container>

                <Footer />
            </main>
        </div>
    )
}

export default About
