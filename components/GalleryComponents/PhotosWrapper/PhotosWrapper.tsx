import Gallery from "../Gallery"
import { Mosaic } from "../Mosaic/Mosaic"
import { NestedModal } from "../NestedModal/NestedModal"

interface PhotosWrapperProps {
    type: string
    images: {
        src: string
        title: string
    }[]
    blocks?: number[]
    subTitle?: string
    galleryTitle?: string
    imageText?: string
}

export const PhotosWrapper = ({
    type = "gallery",
    images = [],
    blocks = [],
    subTitle = "",
    galleryTitle = "",
    imageText = "",
}: PhotosWrapperProps) => {
    if (type === "mosaic") {
        return <Mosaic images={images} blocks={blocks} />
    }
    if (type === "gallery") {
        return <NestedModal images={images} subTitle={subTitle} galleryTitle={galleryTitle} imageText={imageText} />
    }
    return <></>
}
