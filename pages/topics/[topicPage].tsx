import Head from "next/head";
import { getTopicPageIds, getTopicMetadata } from "../../services/staticTopicLoader";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Stack } from "react-bootstrap";
import { ToggleHeader } from "../../components/toggleHeader";
import TopicPrayerPoints from "../../components/topic/TopicPrayerPoints";
import PrayerSummary from "../../components/topic/PrayerSummary";
import TopicDownloadables from "../../components/topic/TopicDownloadables";
import RelatedContent from "../../components/topic/RelatedContent";
import Footer from "../../components/footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DidYouKnow from "../../components/topic/DidYouKnow";
import Feedback from "../../components/topic/Feedback";
import ImageGroup from "../../components/topic/ImageGrid";
import { TopicNav } from "../../components/topic/TopicNav";
import React from "react";

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

  const [selected, setSelected] = React.useState<string>('About')

  const placeholderLinks = [
    "/", "/", "/", "/", "/"
  ]

  // Assume for now something like 6 related topics
  const placeholderRelated = [
    "Ancestor Veneration", "Workplace Pressure", "Other Topics", "Other Topics 2", "Other Topics 3", "Other Topics 4"
  ]

  const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'

  return (
    <>
    <Head>
        <title>Beneath the Surface</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        {/* Header Component */}
        <ToggleHeader />

        {/* Component to Hold image, as well as title and Prayer Summary */}
        <div id="about-landing-image" className="w-100 mx-0 px-0 position-relative" style={{height: '700px'}}>
            temporary image placeholder
            <Container className="d-flex flex-column align-items-start justify-content-end h-100 py-5">
              <h1 className="fs-1 text-white px-3">
                Ancestor Veneration
              </h1>
              <PrayerSummary
                prayerPoints={topicMetadata.summary}
              />
            </Container>
        </div>

        {/* Topic Nav Component */}
        <TopicNav selected={selected} setSelected={setSelected}/>

        {/* Video/Reel Placeholder */}
        <Container className="py-5">
          <div id="about-landing-image" className="w-100">Video Placeholder</div>
        </Container>
        
        {/* Placeholder text */}
        <Container className="py-5">
          <p>{sampleText}</p>
          <p>{sampleText}</p>
        </Container>

        {/* Image Grid */}
        <ImageGroup/>

        {/* Placeholder text */}
        <Container className="py-5">
          <p>{sampleText}</p>
          <p>{sampleText}</p>
          <p>{sampleText}</p>
        </Container>

        {/* Infographics Placeholder */}
        <Container>
          <div id="about-landing-image" className="w-100">Infographics Placeholder</div>
        </Container>

        {/* Placeholder for a quote */}
        <Container className="d-flex flex-column justify-content-center align-items-center py-4 my-4">
          <h1 className="text-secondary fs-1 text-center">{sampleText}</h1>
          <h2 className="text-secondary fs-6 text-center">-Bible verse or quote</h2>
        </Container>

        {/* Placeholder Image */}
        <div id="about-landing-image" className="w-100 my-5">Placeholder</div>

        <DidYouKnow text={sampleText}/>

         {/* Placeholder text */}
         <Container className="py-5">
          <p>{sampleText}</p>
        </Container>

        <TopicPrayerPoints prayerPoints={topicMetadata.summary}/>
        <br/>
        <Feedback/>
        <TopicDownloadables links={placeholderLinks}/>
        <RelatedContent topics={placeholderRelated}/>
        <Footer/>
    </main>
    </>
  );
}