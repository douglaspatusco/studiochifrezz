import useCarouselInfinite from "../../hooks/useCarouselInfinite"
import { awardsImages } from "../../data/awardsImages"

import { CarouselContainer, CarouselTrack } from "./styles"

const CarouselInfinite = () => {
  const { x, extendedImages, handleMouseEnter, handleMouseLeave } = useCarouselInfinite(awardsImages)

  return (
    <CarouselContainer>
      <CarouselTrack $x={x} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {extendedImages.map((image, index) => (
          <img key={index}
            src={image?.src}
            alt={`Imagem ${index + 1} | ${image.eventName || ""}`}
            title={image.eventName}
            draggable="false"
          />
        ))}
      </CarouselTrack>
    </CarouselContainer>
  )
}

export default CarouselInfinite
