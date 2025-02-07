import { useTranslation } from 'next-i18next'
import * as ProjectStyle from '../../../styles/project.styles'

interface Role {
  key: string
  label: string
}

interface ProjectCreditsProps {
  technicalSheet: Record<string, string>
}

const roles: Role[] = [
  { key: 'creators', label: 'creator' },
  { key: 'directors', label: 'direction' },
  { key: 'production', label: 'production' },
  { key: 'artDirection', label: 'art-direction' },
  { key: 'soundtrack', label: 'soundtrack' },
  { key: 'characterConcept', label: 'character-concept' },
  { key: 'storyboard', label: 'storyboard' },
  { key: 'consulting', label: 'consulting' }
]

const ProjectCredits: React.FC<ProjectCreditsProps> = ({ technicalSheet }) => {
const { t } = useTranslation()
  if (!technicalSheet || Object.keys(technicalSheet).length === 0) return null

  return (
    <ProjectStyle.CreditsContainer>
      <h1>{t("credits")}</h1>
      <ProjectStyle.Credits>
        <ProjectStyle.Role>
          {roles.map((role) => technicalSheet?.[role.key] &&
            <h3 key={role.key}>
              {t(role.label)}
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
