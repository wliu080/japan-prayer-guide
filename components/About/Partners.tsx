import React from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "next-i18next";

const Partners: React.FC = () => {
    const { t } = useTranslation("about");

    return (
        <section data-testid="partners-section" id="partners-section" className="text-center">
            <p className="fs-6 fw-bold pt-5">{t("partners")}</p>
            <div className="d-flex align-items-center justify-content-center gap-3 pb-5">
                <Image alt="omg logo" src="/omf.png"></Image>
                <Image alt="pioneers logo" src="/pioneers_logo_full.png"></Image>
            </div>
        </section>
    );
};

export default Partners;
