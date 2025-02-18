import Head from 'next/head'
import { ContactForm } from '../../components/ContactForm'

import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import capitalizeFirstLetter from '@/services/capitalizaFirstLetter'

import * as S from '../../styles/contact.styles'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{`Studio Chifrezz | ${t(capitalizeFirstLetter("contact"))}`}</title>
      </Head>
      <S.Container>
        <S.TalkWithUs>
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "pt", ["common", "projects"])),
    },
  }
}
