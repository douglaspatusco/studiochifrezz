// Esse hook gerencia um modal de exibição de imagens.
// Permite abrir e fechar o modal, além de navegar entre imagens dentro dele.

import { useState } from 'react'

const useModal = (images: string[]) => {
  // Estado para controlar o modal e a imagem atual
  const [modal, setModal] = useState<{ isOpen: boolean; image: string; index: number }>({
    isOpen: false, // Controla se o modal está aberto
    image: '', // Armazena a URL da imagem atualmente exibida no modal
    index: 0 // Guarda o índice da imagem atual na lista de imagens
  })

  // Função para abrir o modal com uma imagem e o índice específicos
  const openModal = (image: string, index: number) => {
    setModal({ isOpen: true, image, index })
  }

  // Função para fechar o modal e resetar o estado para os valores iniciais
  const closeModal = () => {
    setModal({ isOpen: false, image: '', index: 0 })
  }

  // Função para navegar para a imagem anterior no modal
  const handlePreviousImage = () => {
    setModal((prev) => ({
      ...prev,
      image: images[(prev.index - 1 + images.length) % images.length], // Garante que, ao chegar no início da lista, ele volte para a última imagem, criando um efeito de looping
      index: (prev.index - 1 + images.length) % images.length
    }))
  }

  // Função para navegar para a próxima imagem no modal
  const handleNextImage = () => {
    setModal((prev) => ({
      ...prev,
      image: images[(prev.index + 1) % images.length], // Faz com que, ao chegar na última imagem, ele volte para a primeira, garantindo o loop infinito
      index: (prev.index + 1) % images.length
    }))
  }

  return {
    modal, // Estado atual do modal (aberto/fechado, imagem exibida, índice)
    openModal, // Função para abrir o modal com uma imagem específica
    closeModal, // Função para fechar o modal
    handlePreviousImage, // Função para navegar para a imagem anterior
    handleNextImage // Função para navegar para a próxima imagem
  }
}

export default useModal
