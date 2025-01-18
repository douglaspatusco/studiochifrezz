import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Bar = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

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
