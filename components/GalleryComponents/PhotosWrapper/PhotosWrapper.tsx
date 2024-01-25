import { Mosaic } from "../Mosaic/Mosaic"
import { NestedModal } from "../NestedModal/NestedModal"

interface PhotosWrapperProps {
    type: string
    images: {
        src: string
        title: string
    }[]
    blocks?: number[]
}

export const PhotosWrapper = ({ type = "gallery", images = [], blocks = [] }: PhotosWrapperProps) => {
    if (type === "mosaic") {
        return <Mosaic images={images} blocks={blocks} />
    }
    if (type === "gallery") {
        return <NestedModal images={images} />
    }
    return <></>
}
