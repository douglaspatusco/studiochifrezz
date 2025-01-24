import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useFetchProjects from '@/hooks/useFetchProjects'

import * as S from './styles'

const ProjectPage = () => {
  const { query } = useRouter()
  const [projectName, setProjectName] = useState<string | null>(null)
  const imagePath = `/images/projects-banners/banner-${query.project}.png`
  const { data } = useFetchProjects()

  const directors = data?.map((project) => project.technicalSheet?.directors)
  console.log(directors)

  // Filtra os dados do projeto com base no projectName
  const projectData = data?.find((project) => project.slug === query.project)
  console.log(projectData?.name)


  // Aguarda o carregamento do valor vindo de [query.project]
  useEffect(() => {
    if (query.project) {
      setProjectName(query.project as string)
    }
  }, [query.project])

  if (!projectName) {
    return <div>Loading...</div>
  }

  const technicalSheet = projectData?.technicalSheet;

  const roles = [
    { key: 'creators', label: 'Criadora' },
    { key: 'directors', label: 'Direção' },
    { key: 'production', label: 'Produção' },
    { key: 'artDirection', label: 'Direção de arte' },
    { key: 'soundtrack', label: 'Trilha Sonora' },
    { key: 'characterConcept', label: 'Conceito de Personagem' },
    { key: 'storyboard', label: 'Storyboard' },
    { key: 'consulting', label: 'Consultoria' },
  ];

  return (
    <>
      <Head>
        <title>{projectData?.name} | Studio Chifrezz</title>
      </Head>
      <S.ContainerProduct>
      <Image
      src={imagePath}
      alt={projectData?.name as string}
      width={2560}
      height={300}
      priority
      />
      <S.Infos>
        <S.TechnicalSheet>
          <h1>{projectData?.name}</h1>
          <div>
            <h2>{projectData?.description.gender}</h2>
            <h2>{projectData?.description.duration}</h2>
            <h2>{projectData?.description.targetAudience}</h2>
            <h2>{projectData?.status}</h2>
          </div>
        </S.TechnicalSheet>
        <S.Description>
          <p>
            {projectData?.sinopse}
          </p>
        </S.Description>
      </S.Infos>
        <S.CreditsContainer>
          <h1>Créditos</h1>
          <S.Credits>
            <S.Role>
              {roles.map(role =>
                technicalSheet?.[role.key]
                ? <h3 key={role.key}>
                    {role.label}
                  </h3>
                : null
              )}
            </S.Role>
            <S.Person>
              {roles.map(role =>
                technicalSheet?.[role.key]
                ? <h3 key={role.key}>
                    {technicalSheet[role.key]}
                  </h3>
                : null
              )}
            </S.Person>
          </S.Credits>
        </S.CreditsContainer>
      </S.ContainerProduct>
    </>
  )
}

export default ProjectPage
