import Head from 'next/head'

import { Container, Video } from './styles'

export const Home = () => {
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
          <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WyUCPVqOAK8?vq=hd1080&autoplay=1&mute=1&controls=0&loop=1&playlist=WyUCPVqOAK8&"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          >
        </iframe>
      </Video>
      </Container>
    </>
  )
}

export default Home
