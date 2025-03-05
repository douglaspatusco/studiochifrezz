import { screenSizes } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

export const Container = styled.div`

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 4em;
      height: 4em;
    }
  }


  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: row;
    gap: 2em;
  }

  @media (max-width: ${screenSizes.mobileL}) {
    flex-direction: column;
    gap: 0;

    img {
      width: 3em;
      height: 3em;
    }
  }
`
