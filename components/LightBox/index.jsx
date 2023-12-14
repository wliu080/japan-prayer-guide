import React from "react"
import styles from "./lightbox.module.scss"
import { Left, Cross, LeftArrow, RightArrow } from "../icons"
import { Image } from "react-bootstrap"

const LightBox = ({ index, setImage, images, lightBox, setLightBox, setGallery }) => {
    const handleSwitch = (type) => {
        if (type === "inc" && index + 1 !== images.length) {
            setImage(index + 1)
        }
        if (type === "dec" && index !== 0) {
            setImage(index - 1)
        }
    }

    const handleClose = () => {
        setGallery(false)
        setLightBox(!lightBox)
    }

    return (
        <div className={styles.lightbox}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span onClick={() => setLightBox(!lightBox)} className={styles.headLeft}>
                        <span style={{ marginTop: "6px" }}>
                            <Left />
                        </span>
                    </span>
                    <span>
                        {index + 1}/{images.length}
                    </span>
                    <span onClick={handleClose} className={styles.headRight}>
                        <Cross />
                    </span>
                </div>
                <div className={styles.body}>
                    <div className={styles.auto + " " + styles.leftArrow}>
                        {index !== 0 && (
                            <span className={styles.arrow} onClick={() => handleSwitch("dec")}>
                                <LeftArrow />
                            </span>
                        )}
                    </div>
                    <div className={styles.box}>
                        <Image src={images[index].src} alt="light box" />
                        <h1>{images[index].title}</h1>
                    </div>
                    <div className={styles.auto + " " + styles.rightArrow}>
                        {index + 1 !== images.length && (
                            <span className={styles.arrow} onClick={() => handleSwitch("inc")}>
                                <RightArrow />
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LightBox
