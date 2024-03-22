import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Slide from "@mui/material/Slide"

import LightBox from "../LightBox/LightBox"
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
            <Modal
                open={lightBox}
                onClose={() => {
                    setLightBox(false)
                }}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Slide direction="up" in={lightBox} mountOnEnter unmountOnExit>
                    <Box className="galleryBox">
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
        </div>
    )
}
