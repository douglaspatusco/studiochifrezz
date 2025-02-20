import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import FooterBar from '.'

describe('FooterBar', () => {
  it('renders Logotype', () => {
    render(<FooterBar />)
    const logoImage = screen.getByAltText('Studio Chifrezz Logotype')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', '/favicon.ico')
  })

  it('renders Social Media component', () => {
    render(<FooterBar />)
    const socialMedias = screen.getByRole('list', { name: /social-medias/i })
    expect(socialMedias).toBeInTheDocument()
  })

  it('renders Copyright', () => {
    render(<FooterBar />)
    const copyrightText = screen.getByText(
      /Copyright © 2025 - Todos os Direitos Reservados à Studio Chifrezz/i
    )
    expect(copyrightText).toBeInTheDocument()
  })
})
