import styled from "styled-components";
import Image from "next/image";


export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 1em;
  }
`

export const ProjectList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4em;
  width: 64em;
  margin: 2em 0;
`

export const Card = styled.li`
  cursor: pointer;

  &:hover {
    opacity: 10%;
    transition: .5s;
  }
`

export const Picture = styled(Image)`
  width: 16em;
  height: auto;
  border-radius: 0.5em;
`
