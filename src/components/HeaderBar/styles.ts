import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Bar = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0.5em 4em;

  height: 8em;
  background-color: ${colors.lavandaSuave};
`

export const LogoAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 4em;
    height: 4em;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1em;

  li {
    color: ${colors.branco};
    font-size: 18px;
    font-weight: bold;
  }
`
