import * as React from "react"
import LightBox from "../LightBox"
import { Left } from "../icons"
import { useEffect } from "react"
import Modal from "@mui/material/Modal"
import Slide from "@mui/material/Slide"
import Box from "@mui/material/Box"
import { Image, Row } from "react-bootstrap"

interface GalleryProps {
    index: number
    setImage: React.Dispatch<React.SetStateAction<number>>
    images: {
        src: string
        title: string
    }[]
    setGallery: React.Dispatch<React.SetStateAction<boolean>>
    setLightBox: React.Dispatch<React.SetStateAction<boolean>>
    lightBox: boolean
}

const style = {
    position: "absolute" as "absolute",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    padding: 0,
}

function Gallery({ index, setImage, images, setGallery, lightBox, setLightBox }: GalleryProps) {
    useEffect(() => {}, [lightBox])

    const handleLightBox = (__i__: number) => {
        setImage(__i__)
        setLightBox(true)
    }

    return (
        <div className="image-gallery">
            <div className="header">
                <span className="cursor-pointer" onClick={() => setGallery(false)}>
                    <Left />
                </span>
            </div>

            <div className="gallery-container">
                <div className="center">
                    <Row xl={4} md={2} sm={2}>
                        {images.map((item, index) => {
                            return (
                                <div className="galleryImage" key={index} onClick={() => handleLightBox(index)}>
                                    <Image key={index} src={item.src} className="galleryImage" alt="logo" />
                                    <div className="galleryImageOverlay"></div>
                                </div>
                            )
                        })}
                    </Row>
                </div>
            </div>
            <React.Fragment>
                <Modal
                    open={lightBox}
                    onClose={() => {
                        setLightBox(false)
                    }}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Slide direction="up" in={lightBox} mountOnEnter unmountOnExit>
                        <Box sx={{ ...style }}>
                            <LightBox
                                index={index}
                                setImage={setImage}
                                images={images}
                                lightBox={lightBox}
                                setLightBox={setLightBox}
                            />
                        </Box>
                    </Slide>
                </Modal>
            </React.Fragment>
        </div>
    )
}

export default Gallery
