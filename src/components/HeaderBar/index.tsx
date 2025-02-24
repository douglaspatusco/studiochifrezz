import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import useScrollOpacity from '@/hooks/useScrollOpacity'
import LogoAndName from '../LogoAndName'
import SwitchLanguage from '../SwitchLanguage'

import { Hamburguer, HeaderBarContainer, ItemLink, Menu, MenuItem, Navigation } from './styles'
import SocialMedias from '../SocialMedias'

const routes = [
  { path: '/', key: 'home' },
  { path: '/projects', key: 'projects' },
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' }
]

const HeaderBar = () => {
  const [hovered, setHovered] = useState<number | null>(null)
  const opacity = useScrollOpacity(200)
  const { t } = useTranslation('common')

  const handleMouseEnter = useCallback((index: number) => {
    setHovered(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(null)
  }, [])

  const headerStyle = useMemo(
    () => ({
      opacity,
      pointerEvents: (opacity === 0
        ? 'none'
        : 'auto') as React.CSSProperties['pointerEvents']
    }),
    [opacity]
  )

  const [classActive, setClassActive] = useState('')

  const toggleClassActive = () => {
    setClassActive(classActive === '' ? 'active' : '')
  }

  return (
    <HeaderBarContainer style={headerStyle}>
      <SwitchLanguage className='outOfMenu' />
      <LogoAndName />
      <Menu className={classActive}>
        <Navigation>
          {routes.map((route, index) => (
          <MenuItem
            key={route.key}
            $isHovered={hovered !== null && hovered !== index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={hovered === index}
            className={classActive ? 'fade-in' : ''}
          >
            <Link href={route.path} passHref legacyBehavior>
              <ItemLink href={route.path} aria-label={t(route.key)} onClick={toggleClassActive}>
                {t(route.key).toUpperCase()}
              </ItemLink>
            </Link>
          </MenuItem>
        ))}
        </Navigation>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
          <SwitchLanguage className={`inMenu ${classActive ? 'fade-in' : ''}`} />
          <SocialMedias className={`inMenu ${classActive ? 'fade-in' : ''}`} />
        </div>
      </Menu>
      <Hamburguer
        onClick={toggleClassActive}
        className={`menu-hamburguer ${classActive}`}
      >
        <div className={`line ${classActive}`} />
        <div className={`line ${classActive}`} />
        <div className={`line ${classActive}`} />
      </Hamburguer>
    </HeaderBarContainer>
  )
}

export default HeaderBar
