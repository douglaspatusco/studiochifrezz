import * as ProjectStyle from '../../../styles/project.styles'

interface Role {
  key: string
  label: string
}

interface ProjectCreditsProps {
  technicalSheet: Record<string, string>
}

const roles: Role[] = [
  { key: 'creators', label: 'Criadora' },
  { key: 'directors', label: 'Direção' },
  { key: 'production', label: 'Produção' },
  { key: 'artDirection', label: 'Direção de arte' },
  { key: 'soundtrack', label: 'Trilha Sonora' },
  { key: 'characterConcept', label: 'Conceito de Personagem' },
  { key: 'storyboard', label: 'Storyboard' },
  { key: 'consulting', label: 'Consultoria' }
]

const ProjectCredits: React.FC<ProjectCreditsProps> = ({ technicalSheet }) => {
  if (!technicalSheet || Object.keys(technicalSheet).length === 0) return null

  return (
    <ProjectStyle.CreditsContainer>
      <h1>Créditos</h1>
      <ProjectStyle.Credits>
        <ProjectStyle.Role>
          {roles.map((role) => technicalSheet?.[role.key] &&
            <h3 key={role.key}>
              {role.label}
            </h3>
          )}
        </ProjectStyle.Role>
        <ProjectStyle.Person>
          {roles.map((role) => technicalSheet?.[role.key] &&
            <h3 key={role.key}>
              {technicalSheet[role.key]}
            </h3>
          )}
        </ProjectStyle.Person>
      </ProjectStyle.Credits>
    </ProjectStyle.CreditsContainer>
  )
}

export default ProjectCredits
