import React from 'react'
import Link from 'next/link'
import { WordWithLargeFirstLetter } from '@/styles/GlobalStyles'
import { Card, Picture, ProjectsList } from '@/styles/projects.styles'

interface Project {
  slug: string
  name: string
  description: {
    productionType: string
  }
}

interface ProjectSectionProps {
  title: string
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => (
  <div>
    <div>
      {title.split(' ').map((word, index) => (
        <WordWithLargeFirstLetter key={index}>
          {word.toUpperCase()}&nbsp;&nbsp;
        </WordWithLargeFirstLetter>
      ))}
    </div>
    <ProjectsList>
      {projects.map((project) => (
        <Card key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            <Picture
              title={project.name}
              src={`/images/projects-cards/card-${project.slug}.png`}
              alt={project.name}
              width={1000}
              height={1000}
            />
          </Link>
        </Card>
      ))}
    </ProjectsList>
  </div>
)

export default ProjectSection
