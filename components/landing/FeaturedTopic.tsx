import React from "react"
import { Container, Card } from "react-bootstrap"
import { FaPrayingHands } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import Button from "react-bootstrap/Button"
import { useTranslation } from "next-i18next"

interface Props {
  title: string
  prayerPoints: string[]
  featuredImg?: string
}

export default function FeaturedTopic({ title, prayerPoints, featuredImg }: Props) {

  const { t } = useTranslation("common")

  const subtitle: string = t("prayerSummary.subtitle")
  const read: string = t("prayerSummary.read")
  const view: string = t("prayerSummary.view")

  const redirect = (location:string) => {
    window.location.replace(location)
  }

  return (
    <Container className="d-flex justify-content-center">
      <Card className="my-4 shadow d-lg-flex flex-lg-row">
        {/* temporary height for image, before we finalize images */}
        <Card.Img variant="top" src={featuredImg} className="home-feature-img"/>
        <Card.Body className="p-4" style={{ maxWidth: "600px" }}>
          <Card.Text className="featuredTopicTitle px-2 pb-2 fs-2 fw-bold border-bottom border-grey">{title}</Card.Text>
          <Card.Text className="featuredTopicTitle d-flex align-items-center gap-2 text-secondary-5 fw-bold fs-3">
            <IconContext.Provider value={{ size: "20px" }}>
              <FaPrayingHands></FaPrayingHands>
            </IconContext.Provider>
            {subtitle}
          </Card.Text>
          <ul className="bullet-points">
            {prayerPoints.map((point: string, idx: number) => (
              <li key={idx + point} className="my-3">
                {point}
              </li>
            ))}
          </ul>
          <Button className="w-100 mt-0 text-secondary-5 border-secondary-5 bg-white fw-bold" variant="primary">
            {read}
          </Button>
          <Card.Text
            className="mt-3 w-100 mx-auto text-center text-decoration-underline text-secondary-5 fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => redirect('topics/all')}
          >
            {view}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
