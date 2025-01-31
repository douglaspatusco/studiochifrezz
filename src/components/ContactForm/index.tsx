import { useContactFormSec } from '../../hooks/useContactFormSec'
import * as S from '../../styles/contact.styles'

export const ContactForm = () => {
  const { register, handleSubmit, errors, isSubmitting, status } = useContactFormSec()

  return (
    <S.Form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <S.Input id="name" type="text" placeholder="Nome" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <S.Input id="email" type="text" placeholder="Email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="subject">Assunto</label>
      <S.Input id="subject" type="text" placeholder="Assunto" {...register("subject")} />
      {errors.subject && <p>{errors.subject.message}</p>}

      <label htmlFor="message">Mensagem</label>
      <S.TextArea id="message" placeholder="Mensagem" {...register("message")} />
      {errors.message && <p>{errors.message.message}</p>}

      <S.Button type="submit" disabled={isSubmitting}>ENVIAR</S.Button>

      {status === "loading" && <p>Enviando...</p>}
      {status === "success" && (
        <p>
          Email enviado com sucesso!
          <br />
          Entraremos em contato em breve.
        </p>
      )}
      {status === "error" && <p>Erro ao enviar o email. Tente novamente.</p>}
    </S.Form>
  )
}
