import React from 'react'
import StudioChifrezz from '@/components/StudioChifrezz'
import Image from 'next/image'

import { Container } from './styles'
import Link from 'next/link'

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
