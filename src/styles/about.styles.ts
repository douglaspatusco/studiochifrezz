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

export const CharsContainer = styled.div`
`

export const CharsImages = styled.img<{position: string}>`
  width: auto;
  height: 12em;
  position: absolute;

  ${({ position }) =>
    position === "top-left" && "top: 0; left: 0; padding-left: 2em; padding-top: 2em;"}
  ${({ position }) =>
    position === "top-right" && "top: 0; right: 0; padding-right: 2em; padding-top: 2em;"}
  ${({ position }) =>
    position === "bottom-left" && "bottom: 0; left: 0; padding-left: 2em; padding-bottom: 2em;"}
  ${({ position }) =>
    position === "bottom-right" && "bottom: 0; right: 0; padding-right: 2em; padding-bottom: 2em;"}
`

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  position: relative;

  h2 {
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
    width: 640px;
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
