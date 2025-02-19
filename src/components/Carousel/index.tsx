import { ChevronLeft, ChevronRight } from "lucide-react"
import Modal from "../Modal"
import { images } from "../../data/eventsPics"
import useCarousel from "../../hooks/useCarousel"

import { CarouselContainer, CarouselTrack, ImageWrapper, NavigationButton } from "./styles"

const Carousel = () => {
  const {
    x,
    isTransitioning,
    isModalOpen,
    currentImageIndex,
    extendedImages,
    handleNext,
    handlePrev,
    handleTransitionEnd,
    openModal,
    closeModal,
    setIsPaused,
  } = useCarousel(images)

  return (
    <>
      <CarouselContainer onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <NavigationButton className="prev" onClick={handlePrev} aria-label="Imagem anterior">
          <ChevronLeft />
        </NavigationButton>
        <NavigationButton className="next" onClick={handleNext} aria-label="Próxima imagem">
          <ChevronRight />
        </NavigationButton>
        <CarouselTrack
          style={{
            transform: `translateX(${x}px)`,
            transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <ImageWrapper key={index} onClick={() => openModal(index % images.length)}>
              <img
              src={image?.src}
              alt={`Imagem ${index + 1} | ${image.eventName}`}
              title={image.eventName}
              draggable="false"
            />
            </ImageWrapper>
          ))}
        </CarouselTrack>
      </CarouselContainer>
      {isModalOpen && images[currentImageIndex] ? (
        <Modal
          isOpen={isModalOpen}
          closeModal={() => {
            closeModal()
            setIsPaused(false)
          }}
          handlePrevious={handlePrev}
          handleNext={handleNext}
        >
          <img
          src={images[currentImageIndex]?.src}
          alt={`Imagem ${currentImageIndex + 1}`} />
        </Modal>
      ) : null}
    </>
  )
}

export default Carousel
