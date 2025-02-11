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
  StudioDescription,
  Us
} from '../../styles/about.styles'

interface StaffMember {
  name: string
  avatar: string
  description: string
  linkedin: string
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
        <StudioDescription>
          <h2>
            {t("about-description")}
          </h2>
          <div className='chars'>
            <img src="/images/about-image1.png" alt="Image 1" className='image1' />
            <img src="/images/about-image2.png" alt="Image 2" className='image2' />
            <img src="/images/about-image3.png" alt="Image 3" className='image3' />
            <img src="/images/about-image4.png" alt="Image 4" className='image4' />
          </div>
        </StudioDescription>
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
