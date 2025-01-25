import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' })
  }

  try {
    // Configuração do transporte para o GoDaddy
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net', // Host do GoDaddy
      port: 465, // Porta SSL
      secure: true, // Conexão segura
      auth: {
        user: 'info@studiochifrezz.com',
        pass: 'Qu@rtzz0!',
      },
    })

    // Verificar conexão SMTP antes de enviar o e-mail
    await transporter.verify()

    // Enviando o e-mail
    const info = await transporter.sendMail({
      from: `"Studio Chifrezz" <info@studiochifrezz.com>`,
      to: 'info@studiochifrezz.com',
      subject: `Assunto: ${subject}`,
      text:
      `Nome: ${name}\n
      Email: ${email}\n\n
      Mensagem:
      ${message}`,
    })

    console.log('Email enviado:', info.messageId);
    res.status(200).json({ message: 'Email enviado com sucesso!' })
  } catch (error: any) {
    console.error('Erro ao enviar o email:', error.message || error)

    // Tratar erros específicos de autenticação
    if (error.code === 'EAUTH') {
      res.status(500).json({
        error: 'Falha na autenticação SMTP. Verifique o e-mail e a senha.',
      });
    } else if (error.code === 'ETIMEDOUT') {
      res.status(500).json({
        error: 'Tempo de conexão esgotado. Verifique sua rede e as configurações do servidor SMTP.',
      });
    } else {
      res.status(500).json({ error: 'Erro ao enviar o email. Verifique o console.' })
    }
  }
}
