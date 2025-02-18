import { useState, useEffect, useCallback } from "react"

const useCarousel = (images: { src: string }[]) => {
  const [x, setX] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const extendedImages = [...images, ...images, ...images] // Para efeito de loop

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setX((prev) => prev - 228)
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }, [isTransitioning, images.length])

  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setX((prev) => prev + 228)
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }, [isTransitioning, images.length])

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
  }

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
    setIsPaused(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (!isPaused && !isModalOpen) {
      const interval = setInterval(handleNext, 3000)
      return () => clearInterval(interval)
    }
  }, [handleNext, isPaused, isModalOpen])

  return {
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
  }
}

export default useCarousel
