// Esse hook ajusta a opacidade com base no deslocamento da rolagem da página.

import { useEffect, useState } from 'react'

const useScrollOpacity = (maxScroll: number = 200) => {
  // Estado que armazena a opacidade, iniciando em 1 (totalmente visível)
  const [opacity, setOpacity] = useState<number>(1)

  useEffect(() => {
    // Função que será chamada ao rolar a página
    const handleScroll = () => {
      const scrollTop = window.scrollY // Obtém a posição do scroll vertical
      const newOpacity = Math.max(0, 1 - scrollTop / maxScroll) // Calcula a nova opacidade com base no scroll
      setOpacity(newOpacity) // Atualiza o estado com a nova opacidade
    }

    window.addEventListener('scroll', handleScroll) // Adiciona o evento de scroll

    return () => {
      window.removeEventListener('scroll', handleScroll) // Remove o evento ao desmontar o componente evitando vazamento de memória
    }
  }, [maxScroll]) // O efeito é reexecutado apenas se maxScroll mudar

  return opacity // Retorna o valor atualizado da opacidade
}

export default useScrollOpacity
