import Head from "next/head"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { Container, Image } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["about", "common"])),
            // Will be passed to the page component as props
            // About used in content, common used in header
        },
    }
}

const FormTesting: React.FC = () => {
    const { t } = useTranslation("about")

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
                    <h2 className="px-4 px-md-5 px-lg-4 text-white w-100">This is just to test the form</h2>
                    <h1 className="px-4 px-md-5 px-lg-4 text-white w-100" style={{ whiteSpace: "pre-line" }}></h1>
                </div>

                {/* Growing interest section */}
                <Container id="who-are-we" className="w-100 d-flex flex-column align-items-center px-4 px-md-4">
                    <h1 className="text-primary about-h1-header text-center">Share your reflections with us!</h1>
                    <form action="https://formbold.com/s/3Zgzd" method="POST" className="d-flex flex-column gap-4 w-75">
                        <textarea
                            name="message"
                            placeholder="write your encouragement or reflections here with us"
                            className="w-100"
                            style={{ height: "100px" }}
                        ></textarea>
                        <input type="email" placeholder="your email" name="email" />
                        <button type="submit" className="bg-primary-blue text-white border-0">
                            Send Message
                        </button>
                    </form>
                </Container>

                <Footer />
            </main>
        </div>
    )
}

export default FormTesting
