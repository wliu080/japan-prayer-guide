import Head from "next/head";
import { ToggleHeader } from "../components/toggleHeader";
import { Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/footer"
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ToggleHeader />
        <Container id="landingbody" style={{ paddingTop: "50px" }}>
          <p>{t("placeholder")}</p>
        </Container>
        <Container>
          <p>{t("placeholder")}</p>
        </Container>
        <Container>
          <p>{t("placeholder")}</p>
        </Container>
        <Footer/>
      </main>
    </div>
  );
}
