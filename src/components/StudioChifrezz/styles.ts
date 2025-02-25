import { styled } from 'styled-components'
import { colors } from '@/styles/GlobalStyles'

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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const FirstLetter = styled.span`
  font-size: 1.25em;
`
