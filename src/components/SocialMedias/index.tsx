import React, { useState } from 'react'
import { Item, List } from './styles'
import { SocialMediaIconInstagram, SocialMediaIconLinkedIn, SocialMediaIconVimeo, SocialMediaIconYouTube } from '../SocialMediaIcon'

const SocialMedias = () => {
  const [socialMediaHovered, setSocialMediaHovered] = useState<number | null>(
    null
  )

  return (
    <List>
      <Item
        isHovered={socialMediaHovered !== null && socialMediaHovered !== 0}
        onMouseEnter={() => setSocialMediaHovered(0)}
        onMouseLeave={() => setSocialMediaHovered(null)}
      >
        <a
          href="https://www.youtube.com/@studiochifrezz"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaIconYouTube />
        </a>
      </Item>
      <Item
        isHovered={socialMediaHovered !== null && socialMediaHovered !== 1}
        onMouseEnter={() => setSocialMediaHovered(1)}
        onMouseLeave={() => setSocialMediaHovered(null)}
      >
        <a
          href="https://instagram.com/studiochifrezz/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaIconInstagram />
        </a>
      </Item>
      <Item
        isHovered={socialMediaHovered !== null && socialMediaHovered !== 2}
        onMouseEnter={() => setSocialMediaHovered(2)}
        onMouseLeave={() => setSocialMediaHovered(null)}
      >
        <a
          href="https://www.linkedin.com/company/studiochifrezz/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaIconLinkedIn />
        </a>
      </Item>
      <Item
        isHovered={socialMediaHovered !== null && socialMediaHovered !== 3}
        onMouseEnter={() => setSocialMediaHovered(3)}
        onMouseLeave={() => setSocialMediaHovered(null)}
      >
        <a
          href="https://vimeo.com/studiochifrezz"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaIconVimeo />
        </a>
      </Item>
    </List>
  )
}

export default SocialMedias
