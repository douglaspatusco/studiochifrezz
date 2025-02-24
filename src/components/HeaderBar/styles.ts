import { colors, screenSizes } from '@/styles/GlobalStyles'
import Link from 'next/link'
import styled from 'styled-components'

export const HeaderBarContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20vh;
  padding: 0.5em 4em;
  background-color: ${colors.roxoEscuro};
  z-index: 2;

  @media screen and (max-width: 768px) {
    padding: 0.5em 2em;
  }
`

export const Menu = styled.ul`
  display: flex;
  padding: 1em 0;
  gap: 1em;

  @media screen and (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0vh;
    right: 0;
    width: 50vw;
    height: 100vh;
    background-color: ${colors.roxoSombra};
    transform: translateX(100%);
    transition: 0.3s ease;
    z-index: 2;

    &.active {
      transform: translateX(0);
    }

    @keyframes navLinkFade {
      from {
        opacity: 0;
        transform: translateX(50px);
      }

      to {
        opacity: 1;
      }
    }

    .fade-in {
      animation: navLinkFade 1s ease;
    }

    .socia-medias {
      background-color: red;
    }
  }
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 2em;
    height: 100%;

  @media screen and (max-width: ${screenSizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    height: 100%;

    li {
      padding: 0.5em;
    }
  }
`

export const MenuItem = styled.li<{ $isHovered: boolean }>`
  color: ${colors.branco};
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
  opacity: ${({ $isHovered }) => ($isHovered ? 0.5 : 1)};

  &:hover {
    transform: scale(1.1);
  }
`

export const ItemLink = styled(Link)`
  padding: 0.25em;
  margin: 0.5em 0em;
  cursor: pointer;
`

export const Hamburguer = styled.div`
  width: 2em;
  margin: 1em;
  cursor: pointer;
  z-index: 2;

  &.active {
    .line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) translate(2px, -5px);
    }
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: ${colors.branco};
    margin-bottom: 4px;
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    display: none;
  }
`
