// Esse hook faz uma requisição para a API /api/apiProjects e retorna os dados, um estado de carregamento e possíveis erros.

import { useState, useEffect } from 'react'

// Interface para definir o formato dos dados retornados pelo hook
interface UseFetchProjectsProps {
  data: Project[] // Array de projetos
  loading: boolean // Indica se a requisição está em andamento
  error: string | null // Armazena a mensagem de erro, se houver
}

const useFetchProjects = (): UseFetchProjectsProps => {
  const [data, setData] = useState<Project[]>([]) // Estado para armazenar os projetos retornados pela API
  const [loading, setLoading] = useState<boolean>(true) // Estado para indicar se os dados ainda estão sendo carregados
  const [error, setError] = useState<string | null>(null) // Estado para armazenar mensagens de erro, caso ocorram

  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/apiProjects') // Requisição para a API
        if (!response.ok) {
          throw new Error('Failed to fetch data') // Lança erro se a resposta não for bem-sucedida
        }
        const result = await response.json() // Converte a resposta para JSON
        setData(result) // Atualiza o estado com os dados recebidos
      } catch (err: unknown) {
        // Captura e trata erros da requisição
        if (err instanceof Error) {
          setError(err.message) // Define a mensagem de erro
        } else {
          setError(String(err)) // Garante que o erro seja armazenado como string
        }
      } finally {
        setLoading(false) // Marca o fim do carregamento, independente do resultado
      }
    }

    fetchData() // Chama a função de busca ao montar o componente
  }, []) // Executa o efeito apenas uma vez ao montar o componente

  return { data, loading, error } // Retorna os dados, estado de carregamento e erro
}

export default useFetchProjects
