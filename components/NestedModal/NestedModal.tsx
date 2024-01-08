import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Slide from "@mui/material/Slide"

import Backdrop from "@mui/material/Backdrop"
import Gallery from "../../components/Gallery"
import { Image, Row } from "react-bootstrap"

const style = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    // pt: 2,
    // px: 4,
    // pb: 3,
    // p: 4,
    overflow: "auto",
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const [lightBox, setLightBox] = React.useState(false)
    const [index, setImage] = React.useState(0)

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
        { src: "/images/5.png", title: "scrambled it to make a type" },
    ]

    return (
        <div>
            <div className="container" style={{ marginTop: "50px" }}>
                <Row className="galleryContainer" xl={4} sm={2} md={2}>
                    {images.splice(0, 4).map((item, index) => {
                        if (index !== 3) {
                            return (
                                <div className="galleryImage" key={index} onClick={handleOpen}>
                                    <Image key={index} src={item.src} className="galleryImage" alt="logo" />
                                    <div className="galleryImageOverlay"></div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="galleryImage" key={index} onClick={handleOpen}>
                                    <Image key={index} src={item.src} className="galleryImage" alt="logo" />
                                    <div className="galleryMoreOverlay">
                                        <div className="galleryMoreNumber">{`+${images.length - 4}`}</div>
                                        <div className="galleryMoreText">photos</div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </Row>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                    <Box sx={{ ...style, width: "100%" }}>
                        <Gallery
                            images={images}
                            setGallery={setOpen}
                            index={index}
                            setImage={setImage}
                            lightBox={lightBox}
                            setLightBox={setLightBox}
                        />
                    </Box>
                </Slide>
            </Modal>
        </div>
    )
}
