import { useEffect, useState } from "react"
import { Image as BootstrapImage, ImageProps } from "react-bootstrap"

interface BlurImageProps extends ImageProps {
    lowSrc: string
    highSrc: string
}

export const BlurImage = ({ lowSrc, highSrc, alt, ...rest }: BlurImageProps) => {
    const [src, setSrc] = useState(lowSrc)

    useEffect(() => {
        setSrc(lowSrc)

        const img = new Image()
        img.src = highSrc

        img.onload = () => {
            setSrc(highSrc)
        }
    }, [lowSrc, highSrc])

    return <BootstrapImage alt={alt} src={src} {...rest} />
}
