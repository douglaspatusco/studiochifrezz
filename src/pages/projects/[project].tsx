import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import * as S from './styles'

const ProjectPage = () => {
  const { query } = useRouter()
  const [project, setProject] = useState<string | null>(null)
  const imagePath = `/images/projects-banners/banner-${project}.png`

  useEffect(() => {
    if (query.project) {
      setProject(query.project as string)
    }
  }, [query.project])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <S.ContainerProduct>
      <Image src={imagePath} alt={`${project}`} width={100} height={100} />
      <h1>{project}</h1>
    </S.ContainerProduct>
  )
}

export default ProjectPage
