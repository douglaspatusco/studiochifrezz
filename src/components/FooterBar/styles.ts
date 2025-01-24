import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  height: auto;
  padding: 1em;

  background-color: ${colors.roxoEscuro};

  color: #fff;

  img {
    width: 4em;
    height: 4em;
  }

  svg {
    width: 2em;
    height: 2em;
  }
`
