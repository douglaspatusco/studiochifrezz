import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;

  max-width: max-content;

`

export const Item = styled.li<{ isHovered: boolean }>`
  transition: .3s;
  opacity: ${({ isHovered }) => (isHovered ? 0.5 : 1)};

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`
