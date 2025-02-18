import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Modal from "../Modal"

import { CarouselContainer, CarouselTrack, ImageWrapper, NavigationButton } from './styles'

interface EventPics {
  src: string
  eventName: string
}

const images: EventPics[] = [
  {
    src: "/images/festivals/annecy2023/annecy2023-1.jpg",
    eventName: "Annecy 2023"
  },
  {
    src: "/images/festivals/annecy2023/annecy2023-2.jpeg",
    eventName: "Annecy 2023"
  },
  {
    src: "/images/festivals/annecy2023/annecy2023-3.jpeg",
    eventName: "Annecy 2023"
  },
  {
    src: "/images/festivals/annecy2024/annecy2024-1.png",
    eventName: "Annecy 2024"
  },
  {
    src: "/images/festivals/annecy2024/annecy2024-2.png",
    eventName: "Annecy 2024"
  },
  {
    src: "/images/festivals/decola2023/decola2023-1.jpeg",
    eventName: "Decola 2023"
  },
  {
    src: "/images/festivals/decola2023/decola2023-2.jpeg",
    eventName: "Decola 2023"
  },
  {
    src: "/images/festivals/max2023/max2023-1.jpeg",
    eventName: "Max 2023"
  },
  {
    src: "/images/festivals/max2023/max2023-2.jpeg",
    eventName: "Max 2023"
  },
  {
    src: "/images/festivals/max2023/max2023-3.jpeg",
    eventName: "Max 2023"
  },
  {
    src: "/images/festivals/max2023/max2023-4.jpeg",
    eventName: "Max 2023"
  },
  {
    src: "/images/festivals/quirino2023/quirino2023-1.jpeg",
    eventName: "Prêmios Quirino 2023"
  },
  {
    src: "/images/festivals/quirino2023/quirino2023-2.jpeg",
    eventName: "Prêmios Quirino 2023"
  },
  {
    src: "/images/festivals/quirino2023/quirino2023-3.jpeg",
    eventName: "Prêmios Quirino 2023"
  },
  {
    src: "/images/festivals/quirino2023/quirino2023-4.jpeg",
    eventName: "Prêmios Quirino 2023"
  },
  {
    src: "/images/festivals/ventanasur2023/ventanasur2023-1.jpeg",
    eventName: "Ventana Sur 2023"
  },
  {
    src: "/images/festivals/ventanasur2023/ventanasur2023-2.jpeg",
    eventName: "Ventana Sur 2023"
  },
  {
    src: "/images/festivals/ventanasur2023/ventanasur2023-3.jpeg",
    eventName: "Ventana Sur 2023"
  },
  {
    src: "/images/festivals/ventanasur2023/ventanasur2023-4.jpeg",
    eventName: "Ventana Sur 2023"
  },
  {
    src: "/images/festivals/ventanasur2023/ventanasur2023-5.jpeg",
    eventName: "Ventana Sur 2023"
  },
  {
    src: "/images/festivals/ventanasur2023/ventanasur2023-6.jpeg",
    eventName: "Ventana Sur 2023"
  }
]

const Carousel = () => {
  const [x, setX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [])

  const handlePrev = () => {
    setX((prev) => Math.min(prev + 219, 0))
  }

  const handleNext = () => {
    setX((prev) => Math.max(prev - 219, - width))
  }

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImageIndex(null)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : prevIndex
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex !== null && prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    )
  }

  return (
    <>
      <CarouselContainer>
        <NavigationButton className="prev" onClick={handlePrev}>
          <ChevronLeft />
        </NavigationButton>
        <NavigationButton className="next" onClick={handleNext}>
          <ChevronRight />
        </NavigationButton>
        <CarouselTrack ref={carouselRef} drag="x" dragConstraints={{ left: -width, right: 0 }} animate={{ x }}>
          {images.map((image, index) => (
            <ImageWrapper key={index} onClick={() => openModal(index)}>
              <img src={image.src} alt={`Imagem ${index}`} draggable="false" />
            </ImageWrapper>
          ))}
        </CarouselTrack>
      </CarouselContainer>
      {isModalOpen && currentImageIndex !== null && (
        <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        handlePrevious={currentImageIndex > 0 ? handlePrevious : undefined}
        handleNext={currentImageIndex < images.length - 1 ? handleNextImage : undefined}
        >
          <img src={images[currentImageIndex].src} alt={`Imagem ${currentImageIndex}`} />
        </Modal>
      )}
    </>
  )
}

export default Carousel
