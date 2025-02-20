import styled from 'styled-components'

interface TitleProps {
  text: string
}

const StyledTitle = styled.h1`
  font-size: 3em;
  font-weight: 400;

  span {
    font-size: 1.5em;
  }
`

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <StyledTitle>
      <span>{text.charAt(0)}</span>
      {text.slice(1)}
    </StyledTitle>
  )
}
