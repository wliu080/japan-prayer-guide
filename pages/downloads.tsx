import Head from "next/head"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { Container, Image } from "react-bootstrap"
import { useTranslation, Trans } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["downloads", "common"])),
      // Will be passed to the page component as props
      // About used in content, common used in header
    },
  }
}

const Downloads: React.FC = () => {
  const { t } = useTranslation("downloads")

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

        <Container className="w-100 d-flex flex-column align-items-center justify-content-center sorryMsg gap-4 text-center">
            <Image
                alt={"We're sorry"}
                src="/sorry.png"
                height="300"
            />
            {t("message")}
        </Container>

        <Footer />
      </main>
    </div>
  )
}

export default Downloads