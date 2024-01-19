import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Slide from "@mui/material/Slide"

import LightBox from "../LightBox"
import {
    MosaicBlockFive,
    MosaicBlockFour,
    MosaicBlockOne,
    MosaicBlockSeven,
    MosaicBlockSix,
    MosaicBlockTwo,
    MosaicBlockEight,
    MosaicBlockNine,
    MosaicBlockThree,
} from "./MosaicBlocks"

const style = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    overflow: "auto",
}

const blockMap: any = {
    1: {
        component: MosaicBlockOne,
        numImgs: 1,
    },
    2: {
        component: MosaicBlockTwo,
        numImgs: 2,
    },
    3: {
        component: MosaicBlockThree,
        numImgs: 2,
    },
    4: {
        component: MosaicBlockFour,
        numImgs: 2,
    },
    5: {
        component: MosaicBlockFive,
        numImgs: 2,
    },
    6: {
        component: MosaicBlockSix,
        numImgs: 3,
    },
    7: {
        component: MosaicBlockSeven,
        numImgs: 3,
    },
    8: {
        component: MosaicBlockEight,
        numImgs: 3,
    },
    9: {
        component: MosaicBlockNine,
        numImgs: 3,
    },
}

interface MosaicProps {
    images: {
        src: string
        title: string
    }[]
    blocks: number[]
}

export const Mosaic = ({ images, blocks }: MosaicProps) => {
    const [lightBox, setLightBox] = React.useState(false)
    const [index, setImage] = React.useState(0)

    const handleOpen = (__i__: number) => {
        setImage(__i__)
        setLightBox(true)
    }

    // const sampleBlockOrder = [6, 7]

    // const images = [
    //     { src: "/images/0.png", title: "scrambled it to make a type specimen book" },
    //     { src: "/images/1.png", title: "now use Lorem Ipsum as their default model text" },
    //     { src: "/images/2.png", title: "Various versions have evolved over the years" },
    //     { src: "/images/3.png", title: "Lorem Ipsum available" },
    //     { src: "/images/4.png", title: "you need to be sure there" },
    //     { src: "/images/5.png", title: "making this the first true generator on the Internet" },
    //     { src: "/images/3.png", title: "look even slightly believable" },
    //     { src: "/images/2.png", title: "Various versions have evolved" },
    //     { src: "/images/4.png", title: "Ipsum as their default model tex" },
    //     { src: "/images/0.png", title: "scrambled it to make a type" },
    //     { src: "/images/5.png", title: "making this the first true" },
    //     { src: "/images/1.png", title: "Various versions have evolved" },
    //     { src: "/images/3.png", title: "making this the first true" },
    //     { src: "/images/0.png", title: "scrambled it to make a type" },
    //     { src: "/images/1.png", title: "Various versions have evolved" },
    //     { src: "/images/2.png", title: "Ipsum as their default model tex" },
    //     { src: "/images/4.png", title: "making this the first true" },
    //     { src: "/images/5.png", title: "scrambled it to make a type" },
    // ]

    let idx = 0
    const calculatedStarts = []
    for (let i = 0; i < blocks.length; i++) {
        if (i == 0) {
            calculatedStarts.push(idx)
        } else {
            idx = index + blockMap[blocks[i]].numImgs
            calculatedStarts.push(idx)
        }
    }

    return (
        <div>
            <div className="container" style={{ marginTop: "50px" }}>
                {calculatedStarts.map((num, idx) => {
                    const MosaicComponent = blockMap[blocks[idx]].component ?? MosaicBlockOne
                    return <MosaicComponent key={idx} images={images} startIdx={num} handleOpen={handleOpen} />
                })}
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
                                setGallery={() => {}}
                            />
                        </Box>
                    </Slide>
                </Modal>
            </React.Fragment>
        </div>
    )
}
