// Este hook controla a transição entre imagens de um carrossel,
// permitindo avançar,retroceder e abrir uma imagem em um modal.
// Além disso, ele implementa um efeito de loop no carrossel
// e um autoplay automático.

import { useState, useEffect, useCallback } from "react"

const useCarousel = (images: { src: string, eventName: string }[]) => {
  const [x, setX] = useState(0) // Estado para controlar a posição do carrossel (deslocamento em pixels)
  const [isTransitioning, setIsTransitioning] = useState(false) // Estado para evitar múltiplas transições ao mesmo tempo
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar se o modal está aberto
  const [currentImageIndex, setCurrentImageIndex] = useState(0) // Estado para armazenar o índice da imagem atual
  const [isPaused, setIsPaused] = useState(false) // Estado para pausar o autoplay

  // Criação de uma lista de imagens estendida para simular looping infinito
  const extendedImages = [...images, ...images, ...images]

  // Função para avançar para a próxima imagem
  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setX((prev) => prev - 228) // Move o carrossel para a esquerda
      setCurrentImageIndex((prev) => (prev + 1) % images.length) // Atualiza o índice da imagem
    }
  }, [isTransitioning, images.length])

  // Função para retroceder para a imagem anterior
  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setX((prev) => prev + 228) // Move o carrossel para a direita
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length) // Atualiza o índice da imagem
    }
  }, [isTransitioning, images.length])

  // Função chamada ao final da transição para liberar novas interações
  const handleTransitionEnd = () => {
    setIsTransitioning(false)
  }

  // Função para abrir o modal de exibição da imagem
  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
    setIsPaused(true) // Pausa o autoplay quando o modal está aberto
  }

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Efeito para o autoplay do carrossel
  useEffect(() => {
    if (!isPaused && !isModalOpen) {
      const interval = setInterval(handleNext, 3000) // Avança a imagem a cada 3 segundos
      return () => clearInterval(interval) // Limpa o intervalo quando necessário
    }
  }, [handleNext, isPaused, isModalOpen])

  return {
    x, // Posição do carrossel
    isTransitioning, // Indica se o carrossel está em transição
    isModalOpen, // Indica se o modal está aberto
    currentImageIndex, // Índice da imagem atual
    extendedImages, // Lista de imagens duplicada para looping infinito
    handleNext, // Função para avançar a imagem
    handlePrev, // Função para retroceder a imagem
    handleTransitionEnd, // Função chamada ao fim da transição
    openModal, // Função para abrir o modal
    closeModal, // Função para fechar o modal
    setIsPaused, // Função para pausar ou retomar o autoplay
  }
}

export default useCarousel
