import React from "react";
import { Image } from "react-bootstrap";

const Partners:React.FC = () => {
    return (
        <section id="partners-section" className="text-center">
            <p className="fs-6 fw-bold pt-5">Our missionary organization partners</p>
            <div className="d-flex align-items-center justify-content-center gap-3 pb-5">
                <Image alt="omg logo" src="/omf.png"></Image>
                <Image alt="pioneers logo" src="/pioneers_logo_full.png"></Image>
            </div>
        </section>
    )
}

export default Partners