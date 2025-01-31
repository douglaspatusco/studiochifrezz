import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useFetchProjects from '@/hooks/useFetchProjects'
import useModal from '@/hooks/useModal'
import { imageData } from '@/data/images'

import ProjectNavigation from '@/components/Project/ProjectNavigation'
import ProjectModal from '@/components/Project/ProjectModal'
import ProjectCredits from '@/components/Project/ProjectCredits'

import * as ProjectStyle from '../../styles/project.styles'
import AOS from 'aos'

const ProjectPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true })
  }, [])

  const { query } = useRouter()
  const { data } = useFetchProjects()
  const projectSlug = (query.project as string) || ""
  const images = imageData[projectSlug] || []
  const modalProps = useModal(images)

  if (!data || !projectSlug) return <div>Loading...</div>

  const projectData = data.find((project) => project.slug === projectSlug)
  if (!projectData) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{projectData.name} | Studio Chifrezz</title>
      </Head>
      <ProjectStyle.ContainerProduct>
        <Image
        src={`/images/projects-banners/banner-${projectSlug}.png`}
        alt={projectData.name}
        width={2560}
        height={300}
        priority
        />
        <ProjectStyle.Infos>
          <ProjectStyle.TechnicalSheet>
            <h1>{projectData.name}</h1>
            <div>
              <h2>{projectData.description.gender}</h2>
              <h2>{projectData.description.productionType}</h2>
              <h2>{projectData.description.duration}</h2>
              <h2>{projectData.description.targetAudience}</h2>
              <h2>{projectData.status}</h2>
            </div>
          </ProjectStyle.TechnicalSheet>
          <ProjectStyle.Description>
            <p>{projectData.sinopse}</p>
          </ProjectStyle.Description>
        </ProjectStyle.Infos>
        <ProjectCredits technicalSheet={Object.fromEntries(
          Object.entries(projectData.technicalSheet || {}).map(([key, value]) =>
            [key, Array.isArray(value) ? value.join(', ') : value ?? ""])
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
              alt={`Imagem ${index + 1} do projeto ${projectData.name}`}
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
