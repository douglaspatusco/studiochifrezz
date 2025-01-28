import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useFetchProjects from '@/hooks/useFetchProjects';
import ProjectNavigation from '@/components/ProjectNavigation';

import * as S from './styles';

import AOS from 'aos';

import { imageData } from '@/data/images';

const ProjectPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const { query } = useRouter();
  const { data } = useFetchProjects();

  const [projectName, setProjectName] = useState<string | null>(null);
  const imagePath = `/images/projects-banners/banner-${query.project}.png`;

  const projectSlug = query.project as string;

  const projectData = data?.find((project) => project.slug === projectSlug);

  useEffect(() => {
    if (query.project) {
      setProjectName(query.project as string);
    }
  }, [query.project]);

  if (!projectName || !data || !projectData) {
    return <div>Loading...</div>;
  }

  const technicalSheet = projectData.technicalSheet;

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

  const images = imageData[projectSlug] || [];

  return (
    <>
      <Head>
        <title>{projectData.name} | Studio Chifrezz</title>
      </Head>
      <S.ContainerProduct>
        <Image
          src={imagePath}
          alt={projectData.name}
          width={2560}
          height={300}
          priority
        />
        <S.Infos>
          <S.TechnicalSheet>
            <h1>{projectData.name}</h1>
            <div>
              <h2>{projectData.description.gender}</h2>
              <h2>{projectData.description.productionType}</h2>
              <h2>{projectData.description.duration}</h2>
              <h2>{projectData.description.targetAudience}</h2>
              <h2>{projectData.status}</h2>
            </div>
          </S.TechnicalSheet>
          <S.Description>
            <p>{projectData.sinopse}</p>
          </S.Description>
        </S.Infos>
        {technicalSheet && Object.keys(technicalSheet).length > 0 && (
          <S.CreditsContainer>
            <h1>Créditos</h1>
            <S.Credits>
              <S.Role>
                {roles.map((role) =>
                  technicalSheet?.[role.key] ? (
                    <h3 key={role.key}>{role.label}</h3>
                  ) : null
                )}
              </S.Role>
              <S.Person>
                {roles.map((role) =>
                  technicalSheet?.[role.key] ? (
                    <h3 key={role.key}>{technicalSheet[role.key]}</h3>
                  ) : null
                )}
              </S.Person>
            </S.Credits>
          </S.CreditsContainer>
        )}
        <S.Images>
          {images.map((image, index) => (
            <S.ImageWrapper
              key={index}
              data-aos={index % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}
            >
              <Image
                src={image}
                alt={`Imagem ${index + 1} do projeto ${projectData.name}`}
                width={2560}
                height={1080}
              />
            </S.ImageWrapper>
          ))}
        </S.Images>
        <ProjectNavigation currentSlug={projectSlug} projects={data} />
      </S.ContainerProduct>
    </>
  );
};

export default ProjectPage;
