import Head from "next/head"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { Button, Container, Image } from "react-bootstrap"
import { useTranslation, Trans } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import Link from "next/link"

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["resources", "common"])),
      // Will be passed to the page component as props
      // About used in content, common used in header
    },
  }
}

const Downloads: React.FC = () => {
  const { t } = useTranslation("resources")

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

        <Container className="w-100 d-flex flex-column align-items-center justify-content-center gap-4 sorryContainer text-center">
            <Image
                alt={"We're sorry"}
                src="/sorry.png"
                height="250"
            />
            <div className="text-center sorryTitle">
              {t("title")}
            </div>
            <div className="text-center sorryMsg">
              {t("message")}
            </div>
            <Link href={"/"}>
              <Button className="text-secondary-5 border-secondary-5 bg-white">
                {t("back")}
              </Button>
            </Link>
        </Container>

        <Footer />
      </main>
    </div>
  )
}

export default Downloads
