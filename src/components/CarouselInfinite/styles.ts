import { colors, screenSizes } from '@/styles/GlobalStyles'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;

  background-color: ${colors.roxoQuaseBranco};
  padding: 2em;

  @media (max-width: ${screenSizes.tablet}) {
    p {
      width: 75%;
      text-align: center;
    }
  }

  @media (max-width: ${screenSizes.mobileL}) {
    p {
      width: 100%;
    }
  }
`
export const CarouselTrack = styled(motion.div)<{ $x: number }>`
  display: flex;
  gap: 1em;

  transform: ${({ $x }) => `translateX(${$x}px)`};
  transition: transform 5s linear;

  img {
    width: 14em;
    height: auto;
    flex-shrink: 0;
    border-radius: 0.5em;
    overflow: hidden;

    @media (max-width: ${screenSizes.tablet}) {
      width: 11em;
    }

    @media (max-width: ${screenSizes.mobileL}) {
      width: 10em;
    }
  }

  img:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-out;
  }
`
