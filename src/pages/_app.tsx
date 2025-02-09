import type { AppProps } from 'next/app'
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from '../../next-i18next.config'; // Ajuste o caminho se necessário


import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

import GlobalStyles from '@/styles/GlobalStyles'
import { Content } from '../styles/home.styles'
import 'aos/dist/aos.css'

function App({ Component, pageProps }: AppProps) {
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

export default appWithTranslation(App, nextI18NextConfig);
