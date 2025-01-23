import { useEffect, useState } from 'react';

import { HeaderBarContainer, Menu, MenuItem,  ItemLink } from './styles'
import LogoAndName from '../LogoAndName';

const HeaderBar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 200; // Ajuste conforme necessário
      const newOpacity = Math.max(0, 1 - scrollTop / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderBarContainer style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}>
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
    </HeaderBarContainer>
  )
}

export default HeaderBar

