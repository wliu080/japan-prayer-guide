import React from "react"
import { useTranslation } from "next-i18next"
import { Container } from "react-bootstrap"

const WhyTheName: React.FC = () => {
  const { t } = useTranslation("about")
  const nameExplanations: string[] = t("why.content", { returnObjects: true })
  const nameMap: string[] = Array.isArray(nameExplanations) ? nameExplanations : []

  return (
    <section id="why-the-name-section" data-testid="why-the-name-section" className="position-relative">
      <Container id="why-the-name" className="py-4">
        <div id="about-landing-image" className="w-100 mx-0 px-0 my-4">
          temporary image placeholder
        </div>
        <Container className="why-content mt-5">
          <h4 className="my-3">{t("why.title")}</h4>
          {nameMap.map((text: string, idx: number) => (
            <p key={idx + text} className="fs-6">
              {text}
            </p>
          ))}
        </Container>
        <div className="why-bar mt-5"></div>
      </Container>
    </section>
  )
}

export default WhyTheName
