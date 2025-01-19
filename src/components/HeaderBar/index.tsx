import StudioChifrezz from '@/components/StudioChifrezz'

import { Bar, LogoAndName, Menu } from './styles'
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
      <Menu>
        <li>INÍCIO</li>
        <li>PROJETOS</li>
        <li>SOBRE</li>
        <li>CONTATO</li>
      </Menu>
    </Bar>
  )
}

export default HeaderBar
