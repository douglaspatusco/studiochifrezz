import { useEffect } from 'react'
import Head from 'next/head'

import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'next-i18next'

import Carousel from '@/components/Carousel'
import { images } from '../../data/eventsPics'

import AOS from 'aos'

import {
  AboutContainer,
  Member,
  MemberReverse,
  DescriptionContainer,
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
      description: `${t('about-lena')}`,
      linkedin: 'https://www.linkedin.com/in/lenafranzz/'
    },
    {
      name: 'Luiza Ferraz',
      avatar: '/images/avatar-luiza.webp',
      description: `${t('about-luiza')}`,
      linkedin: 'https://www.linkedin.com/in/luizaferrazz/'
    },
    {
      name: 'Priscila Vilas Boas',
      avatar: '/images/avatar-priscila.webp',
      description: `${t('about-priscila')}`,
      linkedin: 'https://www.linkedin.com/in/priscila-vilas-boas-production/'
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    })
  }, [])

  return (
    <>
      <Head>
        <title>Sobre Nós | Studio Chifrezz</title>
      </Head>
      <AboutContainer>
        <DescriptionContainer>
          <h2>{t('about-description')}</h2>
          <Carousel
            images={images}
            autoPlay={true}
            autoPlayInterval={5000}
            showModal={true}
          />
        </DescriptionContainer>
        <Us>
          {staff.map((member, index) =>
            index % 2 === 0 ? (
              <Member key={member.name} data-aos="zoom-in-right">
                <a href={member.linkedin} target="_blank">
                  <img src={member.avatar} alt={member.name} />
                </a>
                <div>
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>
                </div>
              </Member>
            ) : (
              <MemberReverse key={member.name} data-aos="zoom-in-left">
                <a href={member.linkedin} target="_blank">
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
      ...(await serverSideTranslations(locale ?? 'pt', ['common', 'projects']))
    }
  }
}
