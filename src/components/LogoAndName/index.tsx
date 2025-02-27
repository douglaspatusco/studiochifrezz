import React from 'react'
import StudioChifrezz from '@/components/StudioChifrezz'
import Image from 'next/image'

import { Container } from './styles'

const LogoAndName = () => {
  return (
    <Container>
      <Image
        src={'/favicon.ico'}
        alt="Studio Chifrezz Logotype"
        width={100}
        height={100}
        priority={true}
      />
      <StudioChifrezz />
    </Container>
  )
}

export default LogoAndName
