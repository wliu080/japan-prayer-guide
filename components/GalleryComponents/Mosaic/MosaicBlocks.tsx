import { Col, Image, Row } from "react-bootstrap"

interface BlockProps {
    images: {
        src: string
        title: string
    }[]
    startIdx: number
    handleOpen: (__i__: number) => void
}

export const MosaicBlockOne = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <div className="mosaicImage mosaicGroup" key={startIdx} onClick={() => handleOpen(startIdx)}>
            <Image
                style={{ width: "100%" }}
                key={startIdx}
                src={images[startIdx].src}
                className="mosaicImage"
                alt="logo"
            />
            <div className="mosaicImageOverlay"></div>
        </div>
    )
}

export const MosaicBlockTwo = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} style={{ width: "100%" }} className="mosaicGroup">
            <div className="mosaicImage" key={startIdx} onClick={() => handleOpen(startIdx)}>
                <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                <div className="mosaicImageOverlay"></div>
            </div>
            <div className="mosaicImage" key={startIdx + 1} onClick={() => handleOpen(startIdx + 1)}>
                <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                <div className="mosaicImageOverlay"></div>
            </div>
        </Row>
    )
}

export const MosaicBlockThree = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} className="mosaicGroup">
            <div style={{ height: "100%" }} className="mosaicImage" key={startIdx} onClick={() => handleOpen(startIdx)}>
                <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                <div className="mosaicImageOverlay"></div>
            </div>
            <div
                style={{ height: "100%" }}
                className="mosaicImage"
                key={startIdx + 1}
                onClick={() => handleOpen(startIdx + 1)}
            >
                <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                <div className="mosaicImageOverlay"></div>
            </div>
        </Row>
    )
}

export const MosaicBlockFour = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} className="mosaicGroup">
            <Col xs={8} className="p-0 h-100">
                <div className="mosaicImage h-100" key={startIdx} onClick={() => handleOpen(startIdx)}>
                    <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
            <Col xs={4} className="p-0 h-100">
                <div
                    style={{ height: "100%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 1}
                    onClick={() => handleOpen(startIdx + 1)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
        </Row>
    )
}

export const MosaicBlockFive = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} className="mosaicGroup">
            <Col xs={4} className="p-0 h-100">
                <div
                    style={{ height: "100%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 1}
                    onClick={() => handleOpen(startIdx + 1)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
            <Col xs={8} className="p-0 h-100">
                <div className="mosaicImage h-100" key={startIdx} onClick={() => handleOpen(startIdx)}>
                    <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
        </Row>
    )
}

export const MosaicBlockSix = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} className="mosaicGroup">
            <Col xs={4} className="p-0" style={{ height: "100%" }}>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx}
                    onClick={() => handleOpen(startIdx)}
                >
                    <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 1}
                    onClick={() => handleOpen(startIdx + 1)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
            <Col xs={8} className="p-0 h-100">
                <div
                    style={{ height: "100%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 2}
                    onClick={() => handleOpen(startIdx + 2)}
                >
                    <Image key={startIdx + 2} src={images[startIdx + 2].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
        </Row>
    )
}

export const MosaicBlockSeven = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} className="mosaicGroup">
            <Col xs={8} className="p-0 h-100">
                <div
                    style={{ height: "100%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx}
                    onClick={() => handleOpen(startIdx)}
                >
                    <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
            <Col xs={4} className="p-0" style={{ height: "100%" }}>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 1}
                    onClick={() => handleOpen(startIdx + 1)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 2}
                    onClick={() => handleOpen(startIdx + 2)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 2].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
        </Row>
    )
}

export const MosaicBlockEight = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} className="mosaicGroup">
            <Col xs={6} className="p-0" style={{ height: "100%" }}>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx}
                    onClick={() => handleOpen(startIdx)}
                >
                    <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 1}
                    onClick={() => handleOpen(startIdx + 1)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
            <Col xs={6} className="p-0" style={{ height: "100%" }}>
                <div
                    style={{ height: "100%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 2}
                    onClick={() => handleOpen(startIdx + 2)}
                >
                    <Image key={startIdx + 2} src={images[startIdx + 2].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
        </Row>
    )
}

export const MosaicBlockNine = ({ images, startIdx, handleOpen }: BlockProps) => {
    return (
        <Row xs={2} className="mosaicGroup">
            <Col xs={6} className="p-0" style={{ height: "100%" }}>
                <div
                    style={{ height: "100%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx}
                    onClick={() => handleOpen(startIdx)}
                >
                    <Image key={startIdx} src={images[startIdx].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
            <Col xs={6} className="p-0" style={{ height: "100%" }}>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 1}
                    onClick={() => handleOpen(startIdx + 1)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 1].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
                <div
                    style={{ height: "50%", width: "100%" }}
                    className="mosaicImage"
                    key={startIdx + 2}
                    onClick={() => handleOpen(startIdx + 2)}
                >
                    <Image key={startIdx + 1} src={images[startIdx + 2].src} className="mosaicImage" alt="logo" />
                    <div className="mosaicImageOverlay"></div>
                </div>
            </Col>
        </Row>
    )
}
