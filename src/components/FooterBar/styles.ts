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

  @media (max-width: ${screenSizes.mobileL}) {
    img {
      width: 5em;
      height: 5em;
    }

    p {
      font-size: 0.75em;
      text-align: center;
    }
  }

  @media (max-width: ${screenSizes.mobileS}) {
    p {
      width: 190px;
    }
  }
`
