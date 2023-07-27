import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import { ToggleHeader } from "../components/toggleHeader"
import { PurchaseButtons } from "../components/purchase/PurchaseButtons"
import { Container } from "react-bootstrap"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BookImage from "../public/front-cover-sm-424x600 1.svg"
import SampleBookPageImage from "../public/sample book page.svg"
import TranslationIcon from "../public/translationIcon.svg"
import Footer from "../components/footer"

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["purchase", "common"])),
      // Will be passed to the page component as props
      // About used in content, common used in header
    },
  }
}

const Purchase: React.FC = () => {
  const { t } = useTranslation("purchase")

  return (
    <div>
      <Head>
        <title>{t("webpageTitle")}</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToggleHeader />
      <main id="purchase">
        <div className="book-description">
          <div className="book-image">
            <Image className="book-front-cover" src={BookImage} alt={t("bookImageAlt")} />
          </div>
          <div className="book-text">
            <h1>{t("heading")}</h1>
            <p className="book-subtext">{t("subtext")}</p>
            <p className="book-subtitle">{t("subtitle")}</p>
            <h3>{t("purchase")}: </h3>
            <div className="purchase-links">
              <PurchaseButtons />
              <Link href="https://amazon.com" target="_blank">
                {t("order")}
              </Link>
            </div>
          </div>
        </div>
        <Container id="prayer-sample" className="py-5">
          <div id="prayer-landing-image" className="w-100 p-3">
            temporary image placeholder
          </div>
          <Container className="page-container py-3">
            <Image src={SampleBookPageImage} alt={t("samplePageImageAlt")} />
          </Container>
        </Container>
        <section className="purchase-section">
          <Container className="text-center">
            <div className="purchase-copy-header">{t("purchaseCopy")}</div>
            <PurchaseButtons />
            <Link href="https://amazon.com" target="_blank">
              {t("order")}
            </Link>

            <div className="language-availability">
              <span>
                <Image src={TranslationIcon} alt={t("translationIconAlt")} />
                {t("languageAvailability.header")}
              </span>
              <p>{t("languageAvailability.text")}</p>
            </div>
          </Container>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Purchase
