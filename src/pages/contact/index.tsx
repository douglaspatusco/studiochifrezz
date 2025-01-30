import Head from 'next/head'
import { useState } from 'react'

import * as S from '../../styles/contact.styles'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
      setStatus('error')
    }
  };

  return (
    <>
      <Head>
        <title>Studio Chifrezz | Contato</title>
      </Head>
      <S.Container>
        <S.TalkWithUs>
          <h1>
            <span>C</span>ONTATO
          </h1>
          <div>
            <p>Ficou com alguma dúvida?</p>
            <p>Fale com a gente!</p>
          </div>
        </S.TalkWithUs>
        <S.Form onSubmit={handleSubmit}>
          <>
            <label htmlFor="name" />
            <S.Input id="name" type="text" placeholder="Nome" value={formData.name} onChange={handleChange} />
          </>
          <>
            <label htmlFor="email" />
            <S.Input id="email" type="text" placeholder="Email" value={formData.email} onChange={handleChange} />
          </>
          <>
            <label htmlFor="subject" />
            <S.Input id="subject" type="text" placeholder="Assunto" value={formData.subject} onChange={handleChange} />
          </>
          <>
            <label htmlFor="message" />
            <S.TextArea id="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} />
          </>
          <S.Button type="submit">ENVIAR</S.Button>
          {status === 'loading' && <p>Enviando...</p>}
          {status === 'success' && <p>Email enviado com sucesso!<br />Entraremos em contato em breve.</p>}
          {status === 'error' && <p>Erro ao enviar o email. Tente novamente.</p>}
        </S.Form>
      </S.Container>
    </>
  )
}

export default Contact
