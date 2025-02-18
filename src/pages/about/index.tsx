import { useEffect } from 'react'
import Head from 'next/head'

import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'next-i18next'

import AOS from 'aos'

import {
  AboutContainer,
  Member,
  MemberReverse,
  DescriptionContainer,
  Us,
  EventsImagesContainer
} from '../../styles/about.styles'
import Carousel from '@/components/CarouselEventsPics'

interface StaffMember {
  name: string
  avatar: string
  description: string
  linkedin: string
}

interface EventPics {
  src: string
  eventName: string
}

const About = () => {
  const { t } = useTranslation()

  const staff: StaffMember[] = [
    {
      name: 'Lena Franzz',
      avatar: '/images/avatar-lena.webp',
      description: `${t("about-lena")}`,
      linkedin: 'https://www.linkedin.com/in/lenafranzz/'
    },
    {
      name: 'Luiza Ferraz',
      avatar: '/images/avatar-luiza.webp',
      description: `${t("about-luiza")}`,
      linkedin: 'https://www.linkedin.com/in/luizaferrazz/'
    },
    {
      name: 'Priscila Vilas Boas',
      avatar: '/images/avatar-priscila.webp',
      description: `${t("about-priscila")}`,
      linkedin: 'https://www.linkedin.com/in/priscila-vilas-boas-production/'
    }
  ]

  const eventsPics: EventPics[] = [
    {
      src: "/images/festivals/annecy2023/annecy2023-1.jpg",
      eventName: "Annecy 2023"
    },
        {
      src: "/images/festivals/annecy2023/annecy2023-2.jpeg",
      eventName: "Annecy 2023"
    },
    {
      src: "/images/festivals/annecy2023/annecy2023-3.jpeg",
      eventName: "Annecy 2023"
    },
    {
      src: "/images/festivals/annecy2024/annecy2024-1.png",
      eventName: "Annecy 2024"
    },
    {
      src: "/images/festivals/annecy2024/annecy2024-2.png",
      eventName: "Annecy 2024"
    },
    {
      src: "/images/festivals/decola2023/decola2023-1.jpeg",
      eventName: "Decola 2023"
    },
    {
      src: "/images/festivals/decola2023/decola2023-2.jpeg",
      eventName: "Decola 2023"
    },
    {
      src: "/images/festivals/max2023/max2023-1.jpeg",
      eventName: "Max 2023"
    },
    {
      src: "/images/festivals/max2023/max2023-2.jpeg",
      eventName: "Max 2023"
    },
    {
      src: "/images/festivals/max2023/max2023-3.jpeg",
      eventName: "Max 2023"
    },
    {
      src: "/images/festivals/max2023/max2023-4.jpeg",
      eventName: "Max 2023"
    },
    {
      src: "/images/festivals/quirino2023/quirino2023-1.jpeg",
      eventName: "Prêmios Quirino 2023"
    },
    {
      src: "/images/festivals/quirino2023/quirino2023-2.jpeg",
      eventName: "Prêmios Quirino 2023"
    },
    {
      src: "/images/festivals/quirino2023/quirino2023-3.jpeg",
      eventName: "Prêmios Quirino 2023"
    },
    {
      src: "/images/festivals/quirino2023/quirino2023-4.jpeg",
      eventName: "Prêmios Quirino 2023"
    },
    {
      src: "/images/festivals/ventanasur2023/ventanasur2023-1.jpeg",
      eventName: "Ventana Sur 2023"
    },
    {
      src: "/images/festivals/ventanasur2023/ventanasur2023-2.jpeg",
      eventName: "Ventana Sur 2023"
    },
    {
      src: "/images/festivals/ventanasur2023/ventanasur2023-3.jpeg",
      eventName: "Ventana Sur 2023"
    },
    {
      src: "/images/festivals/ventanasur2023/ventanasur2023-4.jpeg",
      eventName: "Ventana Sur 2023"
    },
    {
      src: "/images/festivals/ventanasur2023/ventanasur2023-5.jpeg",
      eventName: "Ventana Sur 2023"
    },
    {
      src: "/images/festivals/ventanasur2023/ventanasur2023-6.jpeg",
      eventName: "Ventana Sur 2023"
    },
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: false, // Animação ocorre apenas uma vez
      mirror: true // Animação ocorre quando o elemento entra no viewport
    })
  }, [])

  return (
    <>
      <Head>
        <title>Sobre Nós | Studio Chifrezz</title>
      </Head>
      <AboutContainer>
        <DescriptionContainer>
          <h2>
            {t("about-description")}
          </h2>
          <EventsImagesContainer>
            <Carousel />
          </EventsImagesContainer>
        </DescriptionContainer>
        <Us>
          {staff.map((member, index) =>
            index % 2 === 0 ? (
              <Member key={member.name} data-aos="zoom-in-right">
                <a href={member.linkedin} target='_blank'>
                  <img src={member.avatar} alt={member.name} />
                </a>
                <div>
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>
                </div>
              </Member>
            ) : (
              <MemberReverse key={member.name} data-aos="zoom-in-left">
                <a href={member.linkedin} target='_blank'>
                  <img src={member.avatar} alt={member.name} />
                </a>
                <div>
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>
                </div>
              </MemberReverse>
            )
          )}
        </Us>
      </AboutContainer>
    </>
  )
}

export default About

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "pt", ["common", "projects"])),
    },
  }
}
