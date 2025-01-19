import { useState } from 'react';

import { Bar, Menu, MenuItem,  ItemLink } from './styles'
import LogoAndName from '../LogoAndName';

const HeaderBar = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <Bar>
      <LogoAndName />
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
