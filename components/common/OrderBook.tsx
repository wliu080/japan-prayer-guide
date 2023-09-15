import Link from "next/link"
import { Container, Image } from "react-bootstrap"
import { IconContext } from "react-icons"
import { RiInformationLine } from "react-icons/ri"
import { OrderRegionType } from "../../pages"

interface OrderBookProps {
  title: string
  blurb: string
  orderRegionsMap: OrderRegionType[]
  orderPrompt: string
  orderJapan: string
  orderWarning: string
  orderBooklet: string
  language: string
}

export default function OrderBook({
  title,
  blurb,
  orderRegionsMap,
  orderPrompt,
  orderJapan,
  orderWarning,
  orderBooklet,
  language
}: OrderBookProps) {

  function ENSection() {
    return (
      <Container className="home-order-section bg-grey-2 d-flex flex-column align-items-center px-4 mt-4">
        <Image alt="order-icon" src="/photos/home/hp_order_en.png" className="d-block d-md-none mt-3" />
        <div className="position-relative w-100 d-flex align-items-center flex-column">
          <h1 className="w-auto bg-grey-2 p-3 text-grey-7 mt-md-3 mb-1 position-relative">{title}</h1>
          <div className="w-100 bg-grey-7 horizontal-bar position-relative"></div>
        </div>
        <h2 className="text-primary fs-5 fw-bold mb-2">{blurb}</h2>
        <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-2">
          {orderRegionsMap.map((region) => (
            <Link
              className="fs-6 bg-secondary-5 text-white text-center region text-decoration-none"
              href={region.url}
              key={region.text}
            >
              {region.text}
            </Link>
          ))}
        </div>
        <Link
          className="fs-5 text-secondary-5 fw-bold text-decoration-underline mb-4"
          href="https://www.amazon.com/dp/B099KSSY79"
        >
          {orderPrompt}
        </Link>
      </Container>
    )
  }

  function JASection() {
    return (
      <Container className="home-order-section bg-grey-2 d-flex flex-column align-items-center mt-4">
        <Image alt="order-icon" src="/photos/home/hp_order_ja.png" className="d-block d-md-none mt-3" />
        <div className="position-relative w-100 d-flex align-items-center flex-column">
          <h1 className="w-auto bg-grey-2 p-3 text-grey-7 mt-md-3 mb-1 position-relative">{orderJapan}</h1>
          <div className="w-100 bg-grey-7 horizontal-bar position-relative"></div>
        </div>
        <h2 className="text-black fs-6 fst-italic mb-2 d-flex align-items-center gap-1">
          <IconContext.Provider value={{ size: "16px" }}>
            <RiInformationLine />
          </IconContext.Provider>
          {orderWarning}
        </h2>
        <Link
          className="bg-grey-2 text-secondary-5 border-secondary-5 fw-bold fs-5 mb-4 p-2 text-decoration-none border rounded"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf03r2GXDfFa17f5ICL_HTy_NuQOpaJcmNgRyFQN10ghgEYqQ/viewform"
        >
          {orderBooklet}
        </Link>
      </Container>
    )
  }

  return (
    <Container className="d-flex flex-column align-items-center w-100 mt-2 mb-5 no-max-container">
      {language === 'en' ?
        <>
          {ENSection()}
          {JASection()}
        </>
        :
        <>
          {JASection()}
          {ENSection()}
        </>
      }
    </Container>
  )
}
