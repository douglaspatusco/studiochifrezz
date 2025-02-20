import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`
export const CarouselTrack = styled(motion.div)<{ $x: number }>`
  display: flex;
  gap: 16px;

  transform: ${({ $x }) => `translateX(${$x}px)`};
  transition: transform 5s linear;

  img {
    width: 212px;
    height: auto;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
  }
`
