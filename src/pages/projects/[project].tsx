import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import * as S from './styles'
import Head from 'next/head'
import Image from 'next/image'

const ProjectPage = () => {
  const { query } = useRouter()
  const [projectName, setProjectName] = useState<string | null>(null)
  const [projects, setProjects] = useState<Project[]>([]);
  const imagePath = `/images/projects-banners/banner-.png`


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/apiProjects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

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
        <title>provisorio | Studio Chifrezz</title>
      </Head>0
      <S.ContainerProduct>
      <Image
      src={imagePath}
      alt={`provisorio`}
      width={2560}
      height={300}
      />
      <S.Infos>
        <S.FichaTecnica>
          <h1>Ficha Técnica</h1>
          <S.TechnicalSheet>
            <S.Role>
              <h3>Criadora</h3>
              <h3>Diretoras</h3>
              <h3>Produção</h3>
              <h3>Direção de arte</h3>
              <h3>Trilha Sonora</h3>
              <h3>Conceito de Personagem</h3>
              <h3>Storyboard</h3>
              <h3>Consultoria</h3>
            </S.Role>
            <S.Person>
              <h3>Lena Franzz</h3>
              <h3>Lena Franzz e Priscila Vilas Boas</h3>
            </S.Person>
          </S.TechnicalSheet>
        </S.FichaTecnica>
        {projects.map((project) => (
          <div key={project.slug}>
            <h2>{project.name}</h2>
            <p>{project.sinopse}</p>
            <p>{project.status}</p>
            <p>{project.description.productionType}</p>
          </div>
        ))}
        <S.Description>
          <h1>KALE DO MUSEU ASSUSTADOR</h1>
          <p>
          Kale assume a direção do museu assustador enquanto seus avós viajam, mas para provar que está à altura dessa missão ele precisa controlar o caos diário gerado por sua irmã mais nova e pelas assombrações que os dois precisam derrotar juntos, acompanhados por seu amigo Mano e ocasionalmente, o faxineiro Seu Neto.
          </p>
        </S.Description>
      </S.Infos>
      </S.ContainerProduct>
    </>
  )
}

export default ProjectPage
