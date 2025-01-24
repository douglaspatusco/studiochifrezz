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
  console.log(data.length)

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
              { projectData?.technicalSheet?.creators ? <h3>Criado por</h3> : null}
              { projectData?.technicalSheet?.directors ? <h3>Direção</h3> : null}
              { projectData?.technicalSheet?.production ? <h3>Produção</h3> : null}
              { projectData?.technicalSheet?.artDirection ? <h3>Direção de arte</h3> : null}
              { projectData?.technicalSheet?.soundtrack ? <h3>Trilha Sonora</h3> : null}
              { projectData?.technicalSheet?.characterConcept ? <h3>Conceito de Personagem</h3> : null}
              { projectData?.technicalSheet?.storyboard ? <h3>Storyboard</h3> : null}
              { projectData?.technicalSheet?.consulting ? <h3>Consultoria</h3> : null}
            </S.Role>
            <S.Person>
              <h3>{projectData?.technicalSheet?.creators}</h3>
              <h3>{projectData?.technicalSheet?.directors}</h3>
              {Array.isArray(projectData?.technicalSheet?.production) ? (
                projectData?.technicalSheet?.production.map((creator, index) => (
                  <>
                    <h3 key={index}>{creator}</h3>
                  <br />
                  </>
                ))
              ) : (
                <h3>{projectData?.technicalSheet?.production}</h3>
              )}
              <h3>{projectData?.technicalSheet?.artDirection}</h3>
              <h3>{projectData?.technicalSheet?.soundtrack}</h3>
              <h3>{projectData?.technicalSheet?.characterConcept}</h3>
              <h3>{projectData?.technicalSheet?.storyboard}</h3>
              <h3>{projectData?.technicalSheet?.consulting}</h3>
            </S.Person>
          </S.Credits>
        </S.CreditsContainer>
      </S.ContainerProduct>
    </>
  )
}

export default ProjectPage
