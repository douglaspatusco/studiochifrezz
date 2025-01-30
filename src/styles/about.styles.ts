import { screenSizes } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8em;
  max-width: ${screenSizes.desktopL};
  width: ${screenSizes.laptop};
  height: 200vh;
  padding: 4em 0;
`

export const StudioDescription = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: 100%;

  h2 {
    font-weight: 400;
    text-align: justify;
    line-height: 1.5;
  }
`

export const Us = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
`

export const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  text-align: justify;

  img {
    min-width: 16em;
    border-radius: 50%;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`

export const MemberReverse = styled(Member)`
  flex-direction: row-reverse;
  align-items: center;

  div {
    align-items: flex-end;
  }
`
