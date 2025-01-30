import Head from 'next/head'
import * as S from '../../styles/contact.styles'
import { ContactForm } from '../../components/ContactForm'

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
        <ContactForm />
      </S.Container>
    </>
  )
}

export default Contact
