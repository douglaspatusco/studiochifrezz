import type { AppProps } from 'next/app'

import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

import GlobalStyles from '@/styles/GlobalStyles'
import { Content } from '../styles/styles'
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <HeaderBar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <FooterBar />
    </>
  )
}
