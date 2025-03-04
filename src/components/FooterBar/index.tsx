import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import SocialMedias from '../SocialMedias'

import { Footer } from './styles'

const FooterBar = () => {
  const { t } = useTranslation('common')
  const currentYear = new Date().getFullYear()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault() // Evita recarregar a página
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Footer>
      <Link href={'/'} onClick={handleLogoClick}>
        <Image src={'/images/logo-branco.png'} alt="Studio Chifrezz Logotype" width={96} height={96} />
      </Link>
      <SocialMedias />
      <p>Copyright &copy; {currentYear} - {t('copy')} Studio Chifrezz</p>
    </Footer>
  )
}

export default FooterBar
