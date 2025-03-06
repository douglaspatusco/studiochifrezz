import { colors, screenSizes } from "@/styles/GlobalStyles"
import Image from "next/image"
import styled from "styled-components"

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  h1 {
    margin-bottom: 1em;
  }
`

export const NewsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  width: 100%;
`

export const NewsCard = styled.div`
  width: 14em;
  height: 28em;
  min-width: 14em;
  background: ${colors.roxoClaro};
  border-radius: 0.75em;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  opacity: 1;
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  max-height: 500px;

  &.hidden {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${screenSizes.mobileL}) {
    width: 90%;
  }

  @media (max-width: ${screenSizes.mobileS}) {
    width: 90%;
  }
`

export const NewsImage = styled(Image)`
  width: 100%;
  height: 10em;
  object-fit: cover;
`

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1em;
`

export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NewsTitle = styled.h3`
  font-size: 1.25em;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5em;
`

export const NewsDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.75em;
`

export const NewsDate = styled.span`
  display: block;
  font-size: 0.8em;
  color: #888;
  margin-bottom: 0.5em;
`

export const NewsTag = styled(NewsDate)`
`

export const NewsLink = styled.a`
  display: inline-block;
  padding: 0.5em 0.75em;
  background: ${colors.roxoEscuro};
  color: white;
  text-decoration: none;
  font-size: 0.9em;
  text-align: center;
  transition: background 0.2s;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  &:hover {
    background: ${colors.roxoPastel};
  }
`

export const ShowMoreButton = styled.button`
  background-color: ${colors.roxoEscuro};
  color: white;
  padding: 0.625em 1.25em;
  border: none;
  border-radius: 0.375em;
  font-size: 1em;
  cursor: pointer;
  display: block;
  width: fit-content;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${colors.roxoPastel};
  }
`
