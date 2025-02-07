import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import SocialMedias from '../SocialMedias'

import { Footer } from './styles'

const FooterBar = () => {
  const { t } = useTranslation("common")

  return (
    <Footer>
      <Image
        src={'/favicon.ico'}
        alt="Studio Chifrezz Logotype"
        width={100}
        height={100}
      />
      <SocialMedias />
      <p>
        Copyright &copy; 2025 - {t("copy")} Studio Chifrezz
      </p>
    </Footer>
  )
}

export default FooterBar
