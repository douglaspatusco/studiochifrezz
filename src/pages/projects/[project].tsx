import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useFetchProjects from '@/hooks/useFetchProjects';
import ProjectNavigation from '@/components/ProjectNavigation';

import * as S from '../../styles/projects.styles';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handlePreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

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
        <S.Gallery>
          {images.map((image, index) => (
            <S.ImageWrapper
              key={index}
              data-aos={index % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}
              onClick={() => handleImageClick(image, index)}
            >
              <Image
                src={image}
                alt={`Imagem ${index + 1} do projeto ${projectData.name}`}
                width={2560}
                height={1080}
              />
            </S.ImageWrapper>
          ))}
        </S.Gallery>
        {isModalOpen && selectedImage && (
          <S.Modal onClick={closeModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <S.ArrowButton className="left" onClick={handlePreviousImage}>
                <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z">
                    </path>
                  </g>
                </svg>
              </S.ArrowButton>
              <Image
                src={selectedImage}
                alt="Imagem em destaque"
                width={1200}
                height={800}
              />
              <S.ArrowButton className="right" onClick={handleNextImage}>
                <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z">
                    </path>
                  </g>
                </svg>
              </S.ArrowButton>
              <button className='closeButton' onClick={closeModal}>X</button>
            </S.ModalContent>
          </S.Modal>
        )}
        <S.Support>
          {projectName === 'kale' && (
            <>
              <h3>Apoios:</h3>
              <Image
                src={`/images/apoios.PNG`}
                alt='Apoio'
                width={2400}
                height={250}
              />
            </>
          )}
        </S.Support>
        <ProjectNavigation currentSlug={projectSlug} projects={data} />
      </S.ContainerProduct>
    </>
  );
};

export default ProjectPage;
