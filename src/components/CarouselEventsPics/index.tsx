import { useRef, useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Modal from "../Modal"

import { images } from "../../data/eventsPics"

import { CarouselContainer, CarouselTrack, ImageWrapper, NavigationButton } from "./styles"

const ITEM_WIDTH = 219
const CLONE_COUNT = 5 // Número de imagens clonadas para criar o efeito de loop

const Carousel = () => {
  const [x, setX] = useState(-ITEM_WIDTH * CLONE_COUNT) // Começa deslocado para evitar flash no início
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const extendedImages = [
    ...images.slice(-CLONE_COUNT), // Clona as últimas imagens para o início
    ...images,
    ...images.slice(0, CLONE_COUNT), // Clona as primeiras imagens para o final
  ]

  const handleTransitionEnd = () => {
    if (currentImageIndex >= images.length) {
      setIsTransitioning(false)
      setCurrentImageIndex(0)
      setX(-ITEM_WIDTH * CLONE_COUNT)
    } else if (currentImageIndex < 0) {
      setIsTransitioning(false)
      setCurrentImageIndex(images.length - 1)
      setX(-ITEM_WIDTH * (images.length - 1 + CLONE_COUNT))
    } else {
      setIsTransitioning(true)
    }
  }

  const handleNext = useCallback(() => {
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => prev + 1)
    setX((prev) => prev - ITEM_WIDTH)
  }, [])

  const handlePrev = useCallback(() => {
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => prev - 1)
    setX((prev) => prev + ITEM_WIDTH)
  }, [])

  useEffect(() => {
    if (isPaused || isModalOpen) return

    const interval = setInterval(() => {
      handleNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [handleNext, isPaused, isModalOpen])

  const openModal = useCallback((index) => {
    const correctedIndex = (index - CLONE_COUNT + images.length) % images.length
    setCurrentImageIndex(correctedIndex)
    setIsModalOpen(true)
    setIsPaused(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setIsPaused(false)
  }, [])

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
          ref={carouselRef}
          style={{
            transform: `translateX(${x}px)`,
            transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <ImageWrapper key={index} onClick={() => openModal(index)}>
              <img src={image?.src} alt={`Imagem ${index + 1}`} draggable="false" />
            </ImageWrapper>
          ))}
        </CarouselTrack>
      </CarouselContainer>
      {isModalOpen && images[currentImageIndex] ? (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          handlePrevious={currentImageIndex > 0 ? handlePrev : () => setCurrentImageIndex(images.length - 1)}
          handleNext={currentImageIndex < images.length - 1 ? handleNext : () => setCurrentImageIndex(0)}
        >
          <img src={images[currentImageIndex]?.src} alt={`Imagem ${currentImageIndex + 1}`} />
        </Modal>
      ) : null}
    </>
  )
}

export default Carousel
