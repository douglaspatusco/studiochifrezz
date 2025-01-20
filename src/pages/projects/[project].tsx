import { useRouter } from 'next/router'


const ProjectPage = () => {
  const { project } = useRouter().query

  return (
    <h1>{project}</h1>
  )
}

export default ProjectPage
