import Head from "next/head"
import { getTopicPageIds } from "../../services/staticTopicLoader"
import { GetStaticProps, GetStaticPaths } from "next"
import { Container } from "react-bootstrap"
import { ToggleHeader } from "../../components/toggleHeader"
import TopicDownloadables from "../../components/topic/TopicDownloadables"
import RelatedContent from "../../components/topic/RelatedContent"
import Footer from "../../components/footer"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Feedback from "../../components/topic/Feedback"
import ImageGroup from "../../components/topic/ImageGroup"
import { TopicNav } from "../../components/topic/TopicNav"
import React from "react"
import PrayerPoints from "../../components/common/PrayerPoints"
import Gallery from '../../components/Gallery';
import { images } from '../../lib/data';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTopicPageIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }: any) => {
  if (!params) {
    return {
      props: {},
    }
  }

  // const topicId: string = params.topicPage
  const localeRef: string = "topics/" + params.topicPage

  return {
    props: {
      localeRef,
      ...(await serverSideTranslations(locale, ["common", localeRef])),
    },
  }
}

export default function TopicPage({ localeRef }: { localeRef: string }) {
  const { t } = useTranslation(localeRef)
  const { t: common } = useTranslation("common")

  // Objects holding translations
  const summaryPoints: string[] = t("prayerSummary", { returnObjects: true })

  const bodyContent1: string[] = t("mainBody.content1", { returnObjects: true })
  const bodyContent2: string[] = t("mainBody.content2", { returnObjects: true })
  const bodyContent3: string[] = t("mainBody.content3", { returnObjects: true })

  const quoteContent: string = t("quote.content")
  const quoteSource: string = t("quote.source")

  const feedbackTitle: string = common("feedback.title")
  const feedbackButton: string = common("feedback.button")

  const downloadsTitle: string = t("downloads.title")
  const downloadsLabels: string[] = t("downloads.labels", { returnObjects: true })
  const downloadsLinks: string[] = t("downloads.links", { returnObjects: true })
  const downloadsHeaders: string[] = t("downloads.headers", { returnObjects: true })

  const relatedTitle: string = t("related.title")
  const relatedLabels: string[] = t("related.labels", { returnObjects: true })
  const relatedLinks: string[] = t("related.links", { returnObjects: true })

  const navLabels: string[] = t("topicNav.labels", { returnObjects: true })

  const pageTitle: string = t("title")

  // States
  const [selected, setSelected] = React.useState<string>("About")

  const[modal, setModal] = useState(false);
  const[lightBox, setLightBox] = useState(false);
  const [index, setImage] = useState(0);
 
  const images = [
    { src: "/images/0.png", title: "scrambled it to make a type specimen book" }, 
    { src: "/images/1.png", title: "now use Lorem Ipsum as their default model text" }, 
    { src: "/images/2.png", title: "Various versions have evolved over the years" }, 
    { src: "/images/3.png", title: "Lorem Ipsum available" }, 
    { src: "/images/4.png", title: "you need to be sure there" }, 
    { src: "/images/5.png", title: "making this the first true generator on the Internet" }, 
    { src: "/images/3.png", title: "look even slightly believable" }, 
    { src: "/images/2.png", title: "Various versions have evolved" }, 
    { src: "/images/4.png", title: "Ipsum as their default model tex" }, 
    { src: "/images/0.png", title: "scrambled it to make a type" }, 
    { src: "/images/5.png", title: "making this the first true" }, 
    { src: "/images/1.png", title: "Various versions have evolved" }, 
    { src: "/images/3.png", title: "making this the first true" }, 
    { src: "/images/0.png", title: "scrambled it to make a type" }, 
    { src: "/images/1.png", title: "Various versions have evolved" }, 
    { src: "/images/2.png", title: "Ipsum as their default model tex" }, 
    { src: "/images/4.png", title: "making this the first true" }, 
    { src: "/images/5.png", title: "scrambled it to make a type" }
]

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Japan prayer guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header Component */}
        <ToggleHeader />

        {/* Component to Hold image, as well as title and Prayer Summary */}
        <div id="placeholder-image" className="w-100 mx-0 px-0 position-relative" style={{ height: "700px" }}>
          temporary image placeholder
          <Container className="d-flex flex-column align-items-start justify-content-end h-100 py-5">
            <h1 className="fs-1 text-white px-3">{t("title")}</h1>
            <PrayerPoints prayerPoints={summaryPoints} />
          </Container>
        </div>

        {/* Topic Nav Component */}
        <TopicNav selected={selected} setSelected={setSelected} labels={navLabels} />

      {modal? <Gallery 
        images={images}
        modal={modal}
        setModal={setModal}
        index={index}
        setImage={setImage}
        lightBox={lightBox}
        setLightBox={setLightBox}
      />: (
        <div className="body mt-5">
          <div className="container">
            <div className="gallery">
            {
                images.splice(0, 4).map((item, index)=><img 
                key={index}
                src={item.src} 
                style={{width: '100%', cursor: 'pointer', marginBottom: 10}}
                onClick={()=>setModal(true)}
                alt="logo" 
            />)
            }
            </div>
          </div>
        </div>
        
      )}

        {/* Video/Reel Placeholder */}
        <Container className="py-5" id="topic-about">
          <div id="placeholder-image" className="w-100">
            Video Placeholder
          </div>
        </Container>

        {/* Placeholder text */}
        <Container className="py-5">
          {bodyContent1.map((text: string, idx: number) => (
            <p key={idx + text}>{text}</p>
          ))}
        </Container>

        {/* Image Grid */}
        <ImageGroup />

        {/* Placeholder text */}
        <Container className="py-5">
          {bodyContent2.map((text: string, idx: number) => (
            <p key={idx + text}>{text}</p>
          ))}
        </Container>

        {/* Infographics Placeholder */}
        <Container>
          <div id="placeholder-image" className="w-100">
            Infographics Placeholder
          </div>
        </Container>

        {/* Placeholder for a quote */}
        <Container className="d-flex flex-column justify-content-center align-items-center py-4 my-4">
          <h1 className="text-secondary fs-1 text-center">{quoteContent}</h1>
          <h2 className="text-secondary fs-6 text-center">{quoteSource}</h2>
        </Container>

        {/* Placeholder Image */}
        <div id="placeholder-image" className="w-100 my-5">
          Placeholder
        </div>

        {/* Placeholder text */}
        <Container className="py-5">
          {bodyContent3.map((text: string, idx: number) => (
            <p key={idx + text}>{text}</p>
          ))}
        </Container>

        {/* Prayer Points */}
        <PrayerPoints prayerPoints={summaryPoints} showImg={true} showSubtitle={true} />
        <br />

        {/* Give us Feedback */}
        <Feedback title={feedbackTitle} button={feedbackButton} />

        {/* Downloads and Related */}
        <TopicDownloadables
          links={downloadsLinks}
          labels={downloadsLabels}
          title={downloadsTitle}
          headers={downloadsHeaders}
        />
        <RelatedContent topics={relatedLabels} links={relatedLinks} title={relatedTitle} />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
