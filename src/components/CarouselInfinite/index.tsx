import useCarouselInfinite from '../../hooks/useCarouselInfinite'

import { CarouselContainer, CarouselTrack } from './styles'

interface awardsPics {
  src: string
  eventName: string
}
interface CarouselInfiniteProps {
  images: awardsPics[]
}

const CarouselInfinite: React.FC<CarouselInfiniteProps> = ({ images }) => {
  const { x, extendedImages, handleMouseEnter, handleMouseLeave } =
    useCarouselInfinite(images)

  return (
    <CarouselContainer>
      <CarouselTrack
        $x={x}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image?.src}
            alt={`Imagem ${index + 1} | ${image.eventName || ''}`}
            title={image.eventName}
            draggable="false"
          />
        ))}
      </CarouselTrack>
    </CarouselContainer>
  )
}

export default CarouselInfinite
