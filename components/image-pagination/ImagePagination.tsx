import React, { useState, useCallback } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { Container } from "react-bootstrap"
import Image, { StaticImageData } from "next/image"

interface ImagePaginationProps {
  pages: {
    src: StaticImageData
    text: string
  }[]
  barDisplay?: boolean
}

const ImagePagination = ({ pages, barDisplay = true }: ImagePaginationProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onNextClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (activeIndex !== pages.length - 1) {
        setActiveIndex((activeIndex) => activeIndex + 1)
      }
    },
    [pages, activeIndex, setActiveIndex]
  )

  const onPrevClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (activeIndex !== 0) {
        setActiveIndex((activeIndex) => activeIndex - 1)
      }
    },
    [activeIndex, setActiveIndex]
  )

  const onMouseEnter = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
  }, [])
  const onMouseLeave = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
  }, [])

  return (
    <>
      <Container className="d-flex justify-content-center">
        <button onClick={onPrevClick} className="image-pagination-button">
          <RiArrowLeftSLine size={32} />
        </button>
        <Container className="image-pagination-images" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {pages.map((img, idx) => (
            <div className="image-pagination" style={activeIndex === idx ? { display: "block" } : { display: "none" }} key={`${img.src}_${idx}`}>
              <Image src={img.src} alt={img.text} loading="eager"/>
              {img.text && <span>{img.text}</span>}
            </div>
          ))}
        </Container>
        <button type="button" onClick={onNextClick} className="image-pagination-button">
          <RiArrowRightSLine size={32} />
        </button>
      </Container>
      {barDisplay && (
        <div className="d-flex text-center justify-content-center">
          {pages.map((img, idx) => (
            <div
              key={`${img.src}_${idx}`}
              className="bar-display"
              style={activeIndex === idx ? { backgroundColor: "#285ABD" } : { backgroundColor: "#D6DDE6" }}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ImagePagination
