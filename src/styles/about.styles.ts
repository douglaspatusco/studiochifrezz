import { screenSizes } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${screenSizes.desktopL};
  width: ${screenSizes.laptop};
  height: auto;
  padding-bottom: 4em;
`

export const StudioDescription = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 20em;
  position: relative;

  h2 {
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
  }

  div.chars {
    padding: 1em;

    img {
      width: auto;
      height: 12em;

      &.image1 {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 2em;
        padding-top: 2em;
      }

      &.image2 {
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 2em;
        padding-top: 2em;
      }

      &.image3 {
        position: absolute;
        bottom: 0;
        left: 0;
        padding-left: 2em;
        padding-bottom: 2em;
      }

      &.image4 {
        position: absolute;
        bottom: 0;
        right: 0;
        padding-right: 2em;
        padding-bottom: 2em;
      }
    }
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

a {
    display: inline-block;
    min-width: 16em;
    border-radius: 50%;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      border-radius: 50%;
      width: 100%;
      height: auto;
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
