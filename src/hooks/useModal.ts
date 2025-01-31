// hooks/useModal.ts
import { useState } from 'react'

const useModal = (images: string[]) => {
  const [modal, setModal] = useState<{ isOpen: boolean; image: string; index: number }>({
    isOpen: false,
    image: '',
    index: 0
  })

  const openModal = (image: string, index: number) => {
    setModal({ isOpen: true, image, index })
  }

  const closeModal = () => {
    setModal({ isOpen: false, image: '', index: 0 })
  }

  const handlePreviousImage = () => {
    setModal((prev) => ({
      ...prev,
      image: images[(prev.index - 1 + images.length) % images.length],
      index: (prev.index - 1 + images.length) % images.length
    }))
  }

  const handleNextImage = () => {
    setModal((prev) => ({
      ...prev,
      image: images[(prev.index + 1) % images.length],
      index: (prev.index + 1) % images.length
    }))
  }

  return { modal, openModal, closeModal, handlePreviousImage, handleNextImage }
}

export default useModal
