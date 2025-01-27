import type { AppProps } from 'next/app'
import 'aos/dist/aos.css';

import GlobalStyles from '@/styles/GlobalStyles'
import { Content } from './styles'
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

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
