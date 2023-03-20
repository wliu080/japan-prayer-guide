import Head from "next/head";
import { getTopicPageIds, getTopicMetadata } from "../../services/staticTopicLoader";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Stack } from "react-bootstrap";
import { ToggleHeader } from "../../components/toggleHeader";
import TopicPrayerPoints from "../../components/topic/TopicPrayerPoints";
import PrayerSummary from "../../components/topic/PrayerSummary";
import TopicDownloadables from "../../components/topic/TopicDownloadables";
import Footer from "../../components/footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTopicPageIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }:any) => {
  if (!params) {
    return {
      props: {},
    };
  }
  const topicMetadata = await getTopicMetadata(params.topicPage as String);
  

  return {
    props: {
      topicMetadata,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default function TopicPage({
  topicMetadata,
}: {
  topicMetadata: {
    title: string;
    summary: string[];
    audio: {
      src: string;
      timestamps: number[];
    };
    markdownSections: string[];
    tags: string[];
  };
}) {

  const placeholderLinks = [
    "/", "/", "/", "/", "/"
  ]

  return (
    <>
    <Head>
        <title>Beneath the Surface</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <ToggleHeader />
        <br/>
        <br/>
        <TopicPrayerPoints prayerPoints={topicMetadata.summary}/>
        <br/>
        <br/>
        <PrayerSummary prayerPoints={topicMetadata.summary}/>
        <br/>
        <br/>
        <TopicDownloadables links={placeholderLinks}/>
        <Footer/>
    </main>
    </>
  );
}