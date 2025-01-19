import { useState } from 'react';
import Image from 'next/image'

import StudioChifrezz from '@/components/StudioChifrezz'

import { Bar, LogoAndName, Menu, MenuItem,  ItemLink } from './styles'

const HeaderBar = () => {
  const [hovered, setHovered] = useState<number | null>(null)

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
        <MenuItem isHovered={hovered !== null && hovered !== 0}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}>
          <ItemLink href={'/'} >
            INÍCIO
          </ItemLink>
        </MenuItem>
        <MenuItem isHovered={hovered !== null && hovered !== 1}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}>
          <ItemLink href={'/projects'}>
            PROJETOS
          </ItemLink>
        </MenuItem>
        <MenuItem isHovered={hovered !== null && hovered !== 2}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}>
          <ItemLink href={'/about'}>
            SOBRE
          </ItemLink>
        </MenuItem>
        <MenuItem isHovered={hovered !== null && hovered !== 3}
        onMouseEnter={() => setHovered(3)}
        onMouseLeave={() => setHovered(null)}>
          <ItemLink href={'/contact'}>
            CONTATO
          </ItemLink>
        </MenuItem>
      </Menu>
    </Bar>
  )
}

export default HeaderBar
