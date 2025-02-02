import Head from 'next/head'
import { ContactForm } from '../../components/ContactForm'

import { useTranslation } from 'react-i18next'

import capitalizeFirstLetter from '@/services/capitalizaFirstLetter'

import * as S from '../../styles/contact.styles'
import { Title } from '@/components/CapitalizeFirstLetter'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Studio Chifrezz | {t(capitalizeFirstLetter("contact"))}</title>
      </Head>
      <S.Container>
        <S.TalkWithUs>
          <Title text={t("contact")} />
          <div>
            <p>{t("form-questions")}</p>
            <p>{t("form-talkToUs")}</p>
          </div>
        </S.TalkWithUs>
        <ContactForm />
      </S.Container>
    </>
  )
}

export default Contact
