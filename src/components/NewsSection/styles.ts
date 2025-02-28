import { colors, screenSizes } from "@/styles/GlobalStyles"
import Image from "next/image"
import styled from "styled-components"

export const NewsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`

export const NewsCard = styled.div`
  width: 20em;
  min-width: 15em;
  background: ${colors.roxoClaro};
  border-radius: 0.75em;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  @media (max-width: ${screenSizes.mobileS}) {
    width: 100%;
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

export const NewsTitle = styled.h3`
  font-size: 1.25em;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
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

export const NewsLink = styled.a`
  display: inline-block;
  padding: 8px 12px;
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
