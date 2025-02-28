import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StudioChifrezz from '@/components/StudioChifrezz'

import { Container } from './styles'

const LogoAndName = () => {
  return (
    <Container>
      <Link href='/'>
        <Image
        src={'/favicon.ico'}
        alt="Studio Chifrezz Logotype"
        width={100}
        height={100}
        priority={true}
      />
      </Link>
      <StudioChifrezz />
    </Container>
  )
}

export default LogoAndName
