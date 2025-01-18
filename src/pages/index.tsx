import Head from "next/head"
import HeaderBar from "@/components/HeaderBar"

import { Container } from "./styles"

export const Home = () => {
  return (
    <>
      <Head>
        <title>Studio Chifrezz | Home</title>
        <meta name="Studio Chifrezz" content="Animation Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <Container>
        <HeaderBar />
        <div>
          Content
        </div>
      </Container>
    </>
  )
}

export default Home