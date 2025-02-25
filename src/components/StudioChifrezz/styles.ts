import { styled } from 'styled-components'
import { colors, screenSizes } from '@/styles/GlobalStyles'

export const Title = styled.div`
  display: flex;
  color: ${colors.branco};
  font-size: 1.5em;
  letter-spacing: 4px;
  font-weight: bold;
  text-align: center;

  div .words {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${screenSizes.mobile}) {
    font-size: 1em;
  }
`

export const FirstLetter = styled.span`
  font-size: 1.25em;
`
