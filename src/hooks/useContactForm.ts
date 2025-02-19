// Este hook gerencia o estado e o envio do formulário de contato.

import { useState, useEffect, useCallback } from 'react'

// Tipo dos dados do formulário
type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

// Hook personalizado para gerenciar o formulário de contato
export const useContactForm = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Estado para controlar o status da requisição
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Função para atualizar os campos do formulário dinamicamente
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target
      setFormData((prev) => ({ ...prev, [id]: value }))
    },
    [] // Dependência vazia para evitar recriações desnecessárias
  )

  // Função para validar se todos os campos estão preenchidos
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '')
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Previne o comportamento padrão do formulário
    if (!isFormValid()) {
      setStatus('error') // Define erro se houver campos vazios
      return
    }
    setStatus('loading') // Define status de carregamento

    try {
      // Faz uma requisição para a API de contato
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success') // Define status de sucesso
        // Reseta os campos do formulário
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error') // Define erro se a resposta não for ok
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
      setStatus('error') // Define erro em caso de falha na requisição
    }
  }

  // Reseta o status para 'idle' após 5 segundos
  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 5000)
      return () => clearTimeout(timer) // Limpa o timer ao desmontar
    }
  }, [status])

  // Retorna os estados e funções para serem usados no formulário
  return { formData, status, handleChange, handleSubmit }
}
