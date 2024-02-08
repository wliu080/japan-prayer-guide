import { Carousel, CarouselItem, Image } from "react-bootstrap"

interface CarouselProps {
    images: {
        src: string
        title: string
    }[]
}

export const ImageCarousel = ({ images }: CarouselProps) => {
    return (
        <div className="home-invitation d-flex flex-column align-items-center position-relative w-100">
            <div className="home-invite-inner mb-0 mb-md-5">
                <Carousel
                    controls={true}
                    fade={true}
                    interval={3000}
                    className="w-100 d-flex flex-column justify-content-center align-items-center mt-5"
                >
                    {images.map((img, index) => (
                        <CarouselItem className="w-100 d-flex justify-content-center" key={index}>
                            <Image className="home-carousel-image" alt={"hero image" + index} src={img.src} />
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
