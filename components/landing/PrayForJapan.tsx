import { Container } from "react-bootstrap"

interface Props {
  whyJapanHeading: string
  whyJapanText: string
  prayerCTAHeading: string
  prayerCTATextMap: string[]
}

// Note that the CTA image protrudes into the Why Japan container
export default function PrayForJapan({ whyJapanHeading, whyJapanText, prayerCTAHeading, prayerCTATextMap }: Props) {
  return (
    <section id="prayForJapanSection" className="position-relative">
      <Container fluid id="whyJapanSection" className="p-5 bg-warning offset-pad-bottom">
        <Container className="d-flex flex-column align-items-center justify-content-center">
          <h3>{whyJapanHeading}</h3>
          <p>{whyJapanText}</p>
        </Container>
      </Container>
      <Container fluid id="prayerCTA" className="px-5 bg-info offset-remove-bottom">
        <div id="placeholder-image" className="mb-4 p-3 h-xs-50 h-lg-100 offset-relative-top">
          temporary image placeholder
        </div>
        <Container
          id="prayerCTAText"
          className="d-flex flex-column align-items-center justify-content-center offset-relative-top"
        >
          <h4>{prayerCTAHeading}</h4>
          {prayerCTATextMap.map((text: string, idx: number) => (
            <p key={idx + text}>{text}</p>
          ))}
        </Container>
      </Container>
    </section>
  )
}
