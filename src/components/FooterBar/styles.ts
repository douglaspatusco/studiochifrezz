import { colors, screenSizes } from '@/styles/GlobalStyles'
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

  p {
    font-size: 14px;
  }

  @media screen and (max-width: ${screenSizes.mobile}) {

    img {
      width: 5em;
      height: 5em;
    }

    p {
      width: 160px;
      font-size: 0.75em;
      text-align: center;
    }
  }
`
