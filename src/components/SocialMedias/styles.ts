import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;

  max-width: max-content;

  &.inMenu {
  display: none;

    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  &.outOfMenu {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const Item = styled.li<{ $isHovered: boolean }>`
  transition: 0.3s;
  opacity: ${({ $isHovered }) => ($isHovered ? 0.5 : 1)};

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

    img {
    width: 4em;
    height: 4em;
  }

  svg {
    width: 2em;
    height: 2em;
  }
`
