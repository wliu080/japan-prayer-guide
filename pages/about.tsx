import Head from "next/head"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { Container, Image } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import MissionVision from "../components/About/MissionVision"
import WhyTheName from "../components/About/WhyTheName"
import MeetOurTeam from "../components/About/MeetOurTeam"
import Partners from "../components/About/Partners"

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

  const heroHeader: string = t("heroHeader")
  const heroSubheader: string = t("heroSubheader")

  const introTitle: string = t("introTitle")
  const introBlurb: string[] = t("introBlurb", {returnObjects: true})

  const contextTitle: string = t("contextTitle")
  const contextBlurb: string[] = t("contextBlurb", {returnObjects: true})

  const biblePassageLocation: string = t("bible.passageLocation")
  const bibleContent: string = t("bible.content")

  const inviteTitle: string = t("inviteTitle")
  const inviteBlurb: string = t("inviteBlurb")
  const callToAction: string = t("callToAction")

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
        <div id="about-landing-image" className="w-100 mx-0 d-flex align-items-center justify-content-center flex-column position-relative">
          <Image alt="about hero image" src="/photos/about/about_hero.png" className="position-absolute top-0"/>
          <h2 className="px-4 fw-bold text-white w-100">{heroSubheader}</h2>
          <h1 className="px-4 fw-bold text-white w-100">{heroHeader}</h1>
        </div>

        {/* Growing interest section */}
        <Container id="who-are-we" className="w-100 d-flex flex-column align-items-center">
          <h1 className="text-primary about-h1-header text-center">{introTitle}</h1>
          <Image className="mt-3" alt="about img 1" src="/photos/about/about_01.png"/>
          <div className="w-100 mt-5"></div>
          {introBlurb.map((text, idx) =>
            <p key={idx + text} className="about-body-text">{text}</p>
          )}
        </Container>

        {/* Beneath section */}
        <div className="bg-secondary-2 w-100 py-5 d-flex align-items-center flex-column">
          <Container className="about-beneath-surface">
            <h1 className="mb-5 text-primary about-h1-header text-center">{contextTitle}</h1>
            <Container className="d-flex flex-column flex-md-row gap-3 about-images justify-content-between">
              <Image alt="about img 2" src="/photos/about/about_01.png" className=""/>
              <Image alt="about img 3" src="/photos/about/about_02.png" className=""/>
            </Container>
          </Container>
          <div className="mt-5"></div>
          {contextBlurb.map((text, idx) =>
            <p key={idx + text} className="about-body-text px-3">{text}</p>
          )}
        </div>

        {/* Verse section */}
        <div className="w-100 pb-3 pt-5 px-3 bg-grey-7">
          <Container className="w-100 py-5 about-verse">
            <p className="text-white text-center fst-italic">{bibleContent}</p>
            <p className="text-white text-center about-passage-location mt-3">{biblePassageLocation}</p>
          </Container>
        </div>

        {/* Invitation to prayer */}
        <Container className="w-100 about-invite px-4">
          <div className="d-flex flex-column align-items-center border-grey-4 border-bottom">
            <h1 className="mt-5 about-h1-header text-black text-center">{inviteTitle}</h1>
            <p className=" mt-4 mb-5 about-body-text">{inviteBlurb} <strong>{callToAction}</strong></p>
          </div>
        </Container>

        {/* Logos */}
        <Container className="w-100 d-flex gap-5 justify-content-center align-items-center my-5">
          <Image className="about-logo" alt="omf logo" src="/photos/about/about_omf.png"/>
          <Image className="about-logo" alt="omf logo" src="/photos/about/about_pioneers.png"/>
        </Container>

        {/* <MissionVision />
        <WhyTheName />
        <MeetOurTeam />
        <Partners /> */}
        <Footer />
      </main>
    </div>
  )
}

export default About
