import React from 'react'
import Image from 'next/image'

import SocialMedias from '../SocialMedias'
import { Footer } from './styles'

const FooterBar = () => {
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
        Copyright &copy;2025 - Todos os Direitos Reservados à Studio Chifrezz
      </p>
    </Footer>
  )
}

export default FooterBar
