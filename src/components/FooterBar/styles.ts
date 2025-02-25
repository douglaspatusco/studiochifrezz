import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 1em;
  background-color: ${colors.roxoEscuro};
  color: #fff;

  @media screen and (max-width: 768px) {

    img {
      width: 5em;
      height: 5em;
    }

    p {
      font-size: 0.8em;
    }
  }
`
