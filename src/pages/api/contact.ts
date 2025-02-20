// Este código define um manipulador de API (handler) para envio de e-mails

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

// Função handler para processar requisições
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Permite apenas requisições do tipo POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  // Extrai os dados do corpo da requisição
  const { name, email, subject, message } = req.body

  // Verifica se todos os campos estão preenchidos
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' })
  }

  try {
    // Configuração do transportador SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Servidor SMTP
      port: Number(process.env.SMTP_PORT), // Porta do servidor SMTP
      secure: true, // Conexão segura (TLS)
      auth: {
        user: process.env.SMTP_USER, // Usuário SMTP
        pass: process.env.SMTP_PASS // Senha SMTP
      }
    })

    await transporter.verify() // Verifica credenciais SMTP

    // Configuração e envio do e-mail
    const info = await transporter.sendMail({
      from: `"Studio Chifrezz" <info@studiochifrezz.com>`, // Remetente
      to: 'info@studiochifrezz.com', // Destinatário
      subject: `Assunto: ${subject}`, // Assunto do e-mail
      text: `Nome: ${name}\n
      Email: ${email}\n\n
      Mensagem:
      ${message}` // Corpo do e-mail
    })

    console.log('Email enviado:', info.messageId) // Loga o ID da mensagem enviada
    res.status(200).json({ message: 'Email enviado com sucesso!' })
  } catch (error: any) {
    console.error('Erro ao enviar o email:', error.message || error) // Loga o erro

    // Tratamento de erros específicos
    if (error.code === 'EAUTH') {
      res.status(500).json({
        error: 'Falha na autenticação SMTP. Verifique o e-mail e a senha.'
      })
    } else if (error.code === 'ETIMEDOUT') {
      res.status(500).json({
        error:
          'Tempo de conexão esgotado. Verifique sua rede e as configurações do servidor SMTP.'
      })
    } else {
      res
        .status(500)
        .json({ error: 'Erro ao enviar o email. Verifique o console.' })
    }
  }
}
