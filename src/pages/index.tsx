import React from 'react'
import Head from 'next/head'

import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSwitcher from "../components/LanguageSwitcher";

export const getStaticProps: GetStaticProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "pt", ["common"])),
    },
  };
};


import { Container, Video } from '../styles/styles'

export const Home = () => {
  const srcVideo = '/videos/hornzz-teaser-1920X600.mp4#t=13'
  const { t } = useTranslation("common"); // Pegamos as traduções do arquivo "common.json"

  return (
    <>
      <Head>
        <title>Studio Chifrezz</title>
        <meta name="Studio Chifrezz" content="Animation Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <Container>
        <Video>
          <video
            loop
            muted
            autoPlay
            controls={false} // Desativa os controles, se necessário
          >
            <source src={srcVideo} type="video/mp4" />
            Seu navegador não suporta o formato de vídeo.
          </video>
        </Video>
        <div style={{paddingTop: "20em"}}>
          <h1>{t("hello")}</h1>
          <LanguageSwitcher /> {/* Botão para trocar idioma */}
        </div>
      </Container>
    </>
  )
}

export default Home
