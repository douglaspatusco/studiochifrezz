import { useContactForm } from '../../hooks/useContactForm'
import * as S from '../../styles/contact.styles'

export const ContactForm = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm()

  return (
    <S.Form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <S.Input id="name" type="text" placeholder="Nome" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <S.Input id="email" type="text" placeholder="Email" value={formData.email} onChange={handleChange} />

      <label htmlFor="subject">Assunto</label>
      <S.Input id="subject" type="text" placeholder="Assunto" value={formData.subject} onChange={handleChange} />

      <label htmlFor="message">Mensagem</label>
      <S.TextArea id="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} />

      <S.Button type="submit">ENVIAR</S.Button>
      {status === 'loading' && <p>Enviando...</p>}
      {status === 'success' && (
        <p>
          Email enviado com sucesso!
          <br />
          Entraremos em contato em breve.
        </p>
      )}
      {status === 'error' && <p>Erro ao enviar o email. Tente novamente.</p>}
    </S.Form>
  )
}
