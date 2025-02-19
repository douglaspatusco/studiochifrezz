// Este hook gerencia a validação e o envio do formulário de contato

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// Define o esquema de validação do formulário usando Yup
const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  subject: yup.string().required("O assunto é obrigatório"),
  message: yup.string().min(10, "A mensagem deve ter pelo menos 10 caracteres").required("A mensagem é obrigatória")
})

export const useContactFormValidation = () => {
  // Estado para armazenar o status do envio do formulário
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // Configuração do React Hook Form com validação via Yup
  const {
    register, // Registra os campos do formulário
    handleSubmit, // Gerencia o envio do formulário
    formState: { errors, isSubmitting } // Estado do formulário (erros e status de envio)
  } = useForm({
    resolver: yupResolver(schema) // Aplica o esquema de validação
  })

  // Função para lidar com o envio do formulário
  const onSubmit = async (data) => {
    setStatus("loading") // Define status como carregando

    try {
      // Faz a requisição para a API de contato
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Envia os dados do formulário como JSON
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar o formulário")
      }

      setStatus("success") // Define status como sucesso
    } catch (error) {
      setStatus("error") // Define status como erro
    }
  }

  // Retorna os métodos e estados para uso no formulário
  return {
    register, // Método para vincular inputs ao formulário
    handleSubmit: handleSubmit(onSubmit), // Método para submeter o formulário
    errors, // Objeto contendo erros de validação
    isSubmitting, // Indica se o formulário está sendo enviado
    status // Status atual do envio
  }
}
