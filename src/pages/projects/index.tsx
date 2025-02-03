import React, { useMemo } from 'react'
import Head from 'next/head'

import useFetchProjects from '@/hooks/useFetchProjects'
import ProjectSection from '@/components/Project/ProjectSection'

import { useTranslation } from 'react-i18next'

import { ProjectsContainer } from '@/styles/projects.styles'

const Projects = () => {
  const { data = [], loading, error } = useFetchProjects()
  const { t } = useTranslation()

  const categorizedProjects = useMemo(() => ({
    AnimacaoSeriada: data.filter((project) => project.description.productionType === 'Animação Seriada'),
    CurtaMetragem: data.filter((project) => project.description.productionType === 'Curta Metragem'),
  }), [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Erro ao carregar projetos. Por favor, tente novamente.</p>

  return (
    <>
      <Head>
        <title>Projects | Studio Chifrezz</title>
      </Head>
      <ProjectsContainer>
        <ProjectSection title={t("animation-series")} projects={categorizedProjects.AnimacaoSeriada} />
        <ProjectSection title={t("short-films")} projects={categorizedProjects.CurtaMetragem} />
      </ProjectsContainer>
    </>
  )
}

export default Projects
