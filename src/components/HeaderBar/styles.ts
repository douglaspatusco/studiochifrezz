import { colors } from '@/styles/GlobalStyles'
import Link from 'next/link'
import styled from 'styled-components'

export const Bar = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 0.5em 4em;

  background-color: ${colors.lavandaSuave};
  z-index: 1;
`

export const Menu = styled.ul`
  display: flex;
  gap: 2em;

`

export const MenuItem = styled.li<{ isHovered: boolean }>`
  color: ${colors.branco};
  font-size: 18px;
  font-weight: bold;
  transition: .3s;
  opacity: ${({ isHovered }) => (isHovered ? 0.5 : 1)};

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`

export const ItemLink = styled(Link)`
  padding: 0.25em;
  margin: 0.5em 0em;
  cursor: pointer;
`
