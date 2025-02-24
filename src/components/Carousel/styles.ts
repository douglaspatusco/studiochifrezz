import { screenSizes } from '@/styles/GlobalStyles'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1360px;
  overflow: hidden;

  @media screen and (max-width: ${screenSizes.desktopL}) {
    max-width: 900px;
  }

  @media screen and (max-width: ${screenSizes.laptop}) {
    max-width: 640px;
  }
`

export const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 16px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

export const ImageWrapper = styled(motion.div)`
  width: 212px;
  height: 212px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${screenSizes.laptop}) {
    width: 203px;
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  &.prev {
    left: 8px;
  }

  &.next {
    right: 16px;
  }
`
