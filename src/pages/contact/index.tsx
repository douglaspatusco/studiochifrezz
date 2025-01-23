import Head from 'next/head'
import * as S from './styles'

const Contact = () => {
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
        <S.Form action="">
          <>
            <label htmlFor="name" />
            <S.Input id="name" type="text" placeholder="Nome" />
          </>
          <>
            <label htmlFor="email" />
            <S.Input id="email" type="text" placeholder="Email" />
          </>
          <>
            <label htmlFor="subject" />
            <S.Input id="subject" type="text" placeholder="Assunto" />
          </>
          <>
            <label htmlFor="message" />
            <S.TextArea id="message" placeholder="Mensagem" />
          </>
          <S.Button>ENVIAR</S.Button>
        </S.Form>
      </S.Container>
    </>
  )
}

export default Contact
