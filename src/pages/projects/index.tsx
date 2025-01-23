import Head from "next/head"
import Link from "next/link"

import useFetchProjects from "@/hooks/useFetchProjects"

import { Card, Picture, ProjectsList, ProjectsContainer } from "./styles"
import { WordWithLargeFirstLetter } from "@/styles/GlobalStyles"

const Projects = () => {
  const { data, loading, error } = useFetchProjects()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  // Projetos divididos em duas listas com base no status
  const AnimacaoSeriada = data.filter(project => project.description.productionType === 'Animação Seriada')
  const CurtaMetragem = data.filter(project => project.description.productionType === 'Curta Metragem')

  return (
    <>
      <Head>
        <title>Projects | Studio Chifrezz</title>
      </Head>
      <ProjectsContainer>
        <div>
          <div>
            <WordWithLargeFirstLetter>ANIMAÇÃO&nbsp;&nbsp;</WordWithLargeFirstLetter>
            <WordWithLargeFirstLetter>SERIADA</WordWithLargeFirstLetter>
          </div>
          <ProjectsList>
            {AnimacaoSeriada.map((project) => (
              <Card key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <Picture
                  title={project.name}
                  src={`/images/projects-cards/${project.slug}.png`}
                  alt={project.name}
                  width={1000}
                  height={1000}
                  />
                </Link>
              </Card>
            ))}
          </ProjectsList>
        </div>
        <div>
          <div>
            <WordWithLargeFirstLetter>CURTAS&nbsp;&nbsp;</WordWithLargeFirstLetter>
            <WordWithLargeFirstLetter>METRAGENS</WordWithLargeFirstLetter>
          </div>
          <ProjectsList>
            {CurtaMetragem.map((project) => (
              <Card key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <Picture
                  title={project.name}
                  src={`/images/projects-cards/${project.slug}.png`}
                  alt={project.name}
                  width={1000}
                  height={1000}
                  />
                </Link>
              </Card>
            ))}
          </ProjectsList>
        </div>
      </ProjectsContainer>
    </>
  )
}

export default Projects
