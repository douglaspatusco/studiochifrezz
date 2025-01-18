import StudioChifrezz from '@/components/StudioChifrezz'

import { Bar, LogoAndName } from './styles'
import Image from 'next/image'

const HeaderBar = () => {
  return (
    <Bar>
      <LogoAndName>
        <Image
          src={'/favicon.ico'}
          alt="Studio Chifrezz Logotype"
          width={100}
          height={100}
        />
        <StudioChifrezz />
      </LogoAndName>
    </Bar>
  )
}

export default HeaderBar
