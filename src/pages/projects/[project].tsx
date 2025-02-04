import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import useFetchProjects from '@/hooks/useFetchProjects'
import useModal from '@/hooks/useModal'
import { imageData } from '@/data/images'

import ProjectNavigation from '@/components/Project/ProjectNavigation'
import ProjectModal from '@/components/Project/ProjectModal'
import ProjectCredits from '@/components/Project/ProjectCredits'

import * as ProjectStyle from '@/styles/project.styles'
import AOS from 'aos'

const ProjectPage = () => {
  const { t } = useTranslation("projects")
  const { query } = useRouter()
  const projectSlug = (query.project as string) || ""
  const { data } = useFetchProjects()
  const images = imageData[projectSlug] || []
  const modalProps = useModal(images)

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true })
  }, [])

  if (!data || !projectSlug) return <div>Loading...</div>

  // Encontra os dados do projeto vindo da API
  const projectData = data.find((project) => project.slug === projectSlug)
  if (!projectData) return <div>Loading...</div>

  // Função para traduzir os dados do projeto, usando os dados da API como fallback
  const translateProject = (project: Project) => {
    return {
      name: t(`projects.${project.slug}.name`),
      sinopse: t(`projects.${project.slug}.sinopse`),
      status: t(`projects.${project.slug}.status`),
      description: {
        ...project.description,
        productionType: t(`projects.${project.slug}.description.productionType`),
        gender: t(`projects.${project.slug}.description.gender`),
        targetAudience: t(`projects.${project.slug}.description.targetAudience`),
        duration: t(`projects.${project.slug}.description.duration`),
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
        <ProjectCredits technicalSheet={Object.fromEntries(
          Object.entries(translatedProject.technicalSheet || {}).map(([key, value]) =>
            [key, Array.isArray(value) ? value.join(', ') : value ?? ""]
          )
        )}/>
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
        <ProjectModal {...modalProps} />
        {projectSlug === 'kale' && (
          <ProjectStyle.Support>
            <h3>Apoios:</h3>
            <Image
              src={`/images/apoios.PNG`}
              alt="Apoio"
              width={2400}
              height={250}
            />
          </ProjectStyle.Support>
        )}
        <ProjectNavigation currentSlug={projectSlug} projects={data} />
      </ProjectStyle.ContainerProduct>
    </>
  )
}

export default ProjectPage

import { loadTranslations } from '@/services/loadTranslations'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  return {
    props: {
      ...(await loadTranslations(locale ?? "pt", ["projects"])),
    },
  }
}

// Implementação do getStaticPaths com dados da API
export async function getStaticPaths() {
  const locales = ["pt", "en"] // Adicione os idiomas suportados
  const projectSlugs = Object.keys(imageData)

  const paths = locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({
      params: { project: slug },
      locale, // Inclui o idioma no path
    }))
  )

  return {
    paths,
    fallback: false
  }
}
