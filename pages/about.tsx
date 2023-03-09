import Head from "next/head";
import { ToggleHeader } from "../components/toggleHeader";
import { Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/footer"
import Row from "react-bootstrap/Row";
import BibleVerse from "../components/About/BibleVerse";

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"])),
      // Will be passed to the page component as props
    },
  };
}

export default function About() {
  const { t } = useTranslation("about");

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
        <div id="about-landing-image" className="w-100 mx-0 px-0">
            temporary image placeholder
        </div>
        <Container id="who-are-we" className="text-center">
            <h1>{t("content.who.title")}</h1>
            <p className="py-3">{t("content.who.content")[0]}</p>
        </Container>
        <section id="mission-vision-section" className="position-relative">
            <Container id="mission-vision" className="p-5">
                <div id="about-landing-image" className="w-100 p-3">
                    temporary image placeholder
                </div>
                <Container className="d-flex flex-wrap justify-content-center align-items-center p-4">
                    <Row md={2} sm={1}>
                        <Container className="">
                            <h4>{t("content.mission.title")}</h4>
                            {t("content.mission.content").map((e) => 
                                <p className="fs-6">{e}</p>
                            )}
                        </Container>
                        <Container className="">
                            <h4>{t("content.vision.title")}</h4>
                            {t("content.vision.content").map((e) => 
                                <p className="fs-6">{e}</p>
                            )}
                        </Container>
                    </Row>
                </Container>
                <BibleVerse verse={t("content.bible.content")[0]} chapter={t("content.bible.title")}/>
            </Container>
        </section>
        <Footer/>
      </main>
    </div>
  );
}