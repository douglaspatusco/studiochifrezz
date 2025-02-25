import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import useFetchProjects from '@/hooks/useFetchProjects'
import useModal from '@/hooks/useModal'
import { imageData } from '@/data/projectsPics'
import { supports } from '@/data/supportsImages'

import ProjectNavigation from '@/components/Project/ProjectNavigation'
import Modal from '@/components/Modal'
import ProjectCredits from '@/components/Project/ProjectCredits'

import * as ProjectStyle from '@/styles/project.styles'
import AOS from 'aos'
import Loading from '@/components/Loading'

const ProjectPage = () => {
  const { t } = useTranslation(['projects', 'common'])
  const { query } = useRouter()
  const projectSlug = (query.project as string) || ''
  const { data } = useFetchProjects()
  const images = imageData[projectSlug] || []
  const modalProps = useModal(images)

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true })
  }, [])

  if (!data || !projectSlug) return <div>Loading...</div>

  // Encontra os dados do projeto vindo da API
  const projectData = data.find((project) => project.slug === projectSlug)
  if (!projectData) return <Loading />

  // Função para traduzir os dados do projeto, usando os dados da API como fallback
  const translateProject = (project: Project) => {
    return {
      name: t(`projects.${project.slug}.name`),
      sinopse: t(`projects.${project.slug}.sinopse`),
      status: t(`projects.${project.slug}.status`),
      description: {
        ...project.description,
        productionType: t(
          `projects.${project.slug}.description.productionType`
        ),
        gender: t(`projects.${project.slug}.description.gender`),
        targetAudience: t(
          `projects.${project.slug}.description.targetAudience`
        ),
        duration: t(`projects.${project.slug}.description.duration`)
      },
      technicalSheet: project.technicalSheet, // Aplicar a mesma lógica se houver traduções para estes campos
      achievments: project.achievments // Se necessário, aplicar tradução em cada item
    }
  }

  // Obtém os dados traduzidos
  const translatedProject = translateProject(projectData)
  return (
    <>
      <Head>
        <title>{translatedProject.name} | Studio Chifrezz</title>
      </Head>
      <ProjectStyle.ContainerProduct>
        <Image
          src={`/images/projects-banners/banner-${projectSlug}.png`}
          alt={translatedProject.name}
          width={2560}
          height={300}
          priority
        />
        <ProjectStyle.Infos>
          <ProjectStyle.TechnicalSheet>
            <h1>{translatedProject.name}</h1>
            <div>
              <h2>{translatedProject.description.gender}</h2>
              <h2>{translatedProject.description.productionType}</h2>
              <h2>{translatedProject.description.duration}</h2>
              <h2>{translatedProject.description.targetAudience}</h2>
              <h2>{translatedProject.status}</h2>
            </div>
          </ProjectStyle.TechnicalSheet>
          <ProjectStyle.Description>
            <p>{translatedProject.sinopse}</p>
          </ProjectStyle.Description>
        </ProjectStyle.Infos>
        <ProjectStyle.Gallery>
          {images.map((image, index) => (
            <ProjectStyle.ImageWrapper
              key={index}
              data-aos={index % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}
              onClick={() => modalProps.openModal(image, index)}
            >
              <Image
                src={image}
                alt={`Imagem ${index + 1} do projeto ${translatedProject.name}`}
                width={2560}
                height={1080}
              />
            </ProjectStyle.ImageWrapper>
          ))}
        </ProjectStyle.Gallery>
        <Modal
          isOpen={modalProps.modal.isOpen}
          closeModal={modalProps.closeModal}
          handlePrevious={modalProps.handlePreviousImage}
          handleNext={modalProps.handleNextImage}
        >
          <Image
            src={modalProps.modal.image}
            alt={`Imagem ${modalProps.modal.index + 1} do projeto ${translatedProject.name}`}
            width={2560}
            height={1080}
          />
        </Modal>
        <ProjectCredits
          technicalSheet={Object.fromEntries(
            Object.entries(translatedProject.technicalSheet || {}).map(
              ([key, value]) => [
                key,
                Array.isArray(value) ? value.join(', ') : (value ?? '')
              ]
            )
          )}
        />

        {projectSlug === 'kale' && (
          <ProjectStyle.Support>
            <h1>{t('supports', { ns: 'common' })}:</h1>
            <ProjectStyle.SupportsImages>
              {supports.map((support) => (
                <img key={support.src} src={support.src} alt={support.alt} title={support.alt} />
              ))}
            </ProjectStyle.SupportsImages>
          </ProjectStyle.Support>
        )}
        <ProjectNavigation currentSlug={projectSlug} projects={data} />
      </ProjectStyle.ContainerProduct>
    </>
  )
}

export default ProjectPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'pt', ['common', 'projects']))
    }
  }
}
