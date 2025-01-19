import Head from 'next/head'

import { Container } from './styles'

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
        <div>Content</div>
      </Container>
    </>
  )
}

export default Home
