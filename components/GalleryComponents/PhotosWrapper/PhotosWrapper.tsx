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
}

export const PhotosWrapper = ({ type = "gallery", images = [], blocks = [], subTitle = "" }: PhotosWrapperProps) => {
    if (type === "mosaic") {
        return <Mosaic images={images} blocks={blocks} />
    }
    if (type === "gallery") {
        console.log(subTitle)
        return <NestedModal images={images} subTitle={subTitle} />
    }
    return <></>
}
