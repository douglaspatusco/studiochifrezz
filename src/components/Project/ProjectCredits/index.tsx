import { useTranslation } from 'next-i18next'
import capitalizeFirstLetter from '@/services/capitalizaFirstLetter'
import { Credits, CreditsContainer, Person, Role } from './styles'

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
    <CreditsContainer>
      <h1>{capitalizeFirstLetter(t('credits'))}</h1>
      <Credits>
        {roles.map((role) => technicalSheet?.[role.key] &&
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Role key={role.key}>
              <h3>{t(role.label)}</h3>
            </Role>
            <Person key={role.key}>
              <h3>{technicalSheet[role.key]}</h3>
            </Person>
          </div>
        )}
      </Credits>
    </CreditsContainer>
  )
}

export default ProjectCredits
