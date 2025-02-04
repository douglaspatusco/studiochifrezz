import React from 'react'
import Head from 'next/head'

import { GetServerSideProps } from "next"
import { useTranslation } from "next-i18next"

import { Container, Video } from '../styles/styles'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const Home = () => {
  const srcVideo = '/videos/hornzz-teaser-1920X600.mp4'
  const { t } = useTranslation("common")

  return (
    <>
      <Head>
        <title>Studio Chifrezz</title>
        <meta name="description" content="Studio Chifrezz - Um estúdio de animação criativo e inovador." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <Container>
        <Video>
          <video
            loop
            muted
            autoPlay
            controls={false}
            onLoadedMetadata={(event) => (event.currentTarget.currentTime = 13)}
            aria-hidden="true"
          >
            <source src={srcVideo} type="video/mp4" />
            Seu navegador não suporta o formato de vídeo.
          </video>
        </Video>
        <div style={{paddingTop: "20em"}}>
          <h1>{t("hello")}</h1>
        </div>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "pt", ["common", "projects"])),
    },
  }
}

  export default Home
