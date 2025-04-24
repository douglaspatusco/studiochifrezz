// Este hook controla um carrossel de imagens automático.
// Ele gerencia a posição do carrossel (x),
// movimenta as imagens automaticamente e garante um loop infinito sem saltos visíveis.

import { useState, useEffect, useCallback } from 'react'

const useCarouselInfinite = (images: { src: string; eventName: string }[]) => {
  const [x, setX] = useState(0) // Estado para controlar a posição do carrossel (deslocamento em pixels)
  const [isTransitioning, setIsTransitioning] = useState(true) // Controle da transição
  const [isPaused, setIsPaused] = useState(false) // Estado para controlar a pausa do autoplay

  const extendedImages = [...images, ...images, ...images]
  const totalWidth = images.length * 228 // Largura total do carrossel
  const transitionWidth = totalWidth * 2 // Ponto onde o reset ocorre

  // Função para avançar para a próxima imagem automaticamente
  const handleNext = useCallback(() => {
  setX((prev) => {
    const nextX = prev - 228

    if (Math.abs(nextX) >= transitionWidth) {
      setIsTransitioning(true) // mantém a transição para o último passo visível

      // Após o último item visível, fazemos o salto sem transição
      setTimeout(() => {
        setIsTransitioning(false) // desativa transição
        setX(-totalWidth) // reseta a posição pro meio
      }, 500) // tempo ligeiramente menor que o intervalo de 5s (igual à duração da transição de 5s)

      return nextX
    }

    setIsTransitioning(true)
    return nextX
  })
}, [totalWidth, transitionWidth])

  // Efeito para o autoplay do carrossel
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    const startInterval = () => {
      if (!isPaused && !interval) {
        interval = setInterval(handleNext, 5000) // Avança a imagem a cada 5 segundos
      }
    }

    const stopInterval = () => {
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }

    // Lógica para pausar quando a aba não está visível
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval()
      } else {
        startInterval()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    startInterval()

    return () => {
      stopInterval()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [handleNext])

  // Funções para pausar e retomar o autoplay ao passar o mouse
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return {
    x, // Posição do carrossel
    extendedImages, // Lista de imagens duplicada para looping infinito
    isTransitioning, // Controle da transição
    handleMouseEnter,
    handleMouseLeave,
    setIsPaused
  }
}

export default useCarouselInfinite
