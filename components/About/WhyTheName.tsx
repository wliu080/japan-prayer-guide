import React from "react";
import { useTranslation } from "next-i18next";
import { Container } from "react-bootstrap";
import { useWindowSize } from "../helper";

const WhyTheName:React.FC = () => {
    
    const { t } = useTranslation("about")
    const {width, height} = useWindowSize()
    const contentArray = t("content.why.content").split("/n")

    return (
        <section id="why-the-name-section" className="position-relative">
            <Container id="why-the-name" className="py-4">
                <div id="about-landing-image" className="w-100 mx-0 px-0 my-4">
                        temporary image placeholder
                </div>
                <Container className="why-content mt-5">
                    <h4 className="my-3">{t("content.why.title")}</h4>
                    {contentArray.map((e:string) => 
                        <p key={e} className="fs-6">{e}</p>
                    )}
                </Container>
                {width > 700 && <div className="why-bar mt-5"></div>}
            </Container>
        </section>
    )
}

export default WhyTheName