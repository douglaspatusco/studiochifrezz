import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Container, Video } from '../styles/home.styles'
import { awardsImages } from '../data/awardsImages'
import CarouselInfinite from '@/components/CarouselInfinite'
import Image from 'next/image'
import NewsSection from '@/components/NewsSection'

export const Home = () => {
  const srcVideo = '/videos/banner-studiochifrezz-1920X600.mp4'
  const { t } = useTranslation('common')

  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const videoPreload = document.createElement('video')
    videoPreload.src = srcVideo
    videoPreload.preload = 'auto'

    videoPreload.oncanplaythrough = () => {
      setVideoLoaded(true)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Studio Chifrezz</title>
        <meta
          name="description"
          content="Studio Chifrezz - Um estúdio de animação criativo e inovador."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <Video>
        {!videoLoaded ? (
          <Image
            src="/images/banner-home-static.png"
            alt="Background"
            width={1920}
            height={600}
          />
        ) : (
          <video
            loop
            muted
            autoPlay
            aria-label="Banner Home"
          >
            <source src={srcVideo} type="video/mp4" />
          </video>
        )}
      </Video>
      <Container>
        <h1>{t('hello')}</h1>
        <NewsSection />
        <CarouselInfinite images={awardsImages} />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'pt', ['common']))
    }
  }
}

export default Home
