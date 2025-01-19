import { Card, Picture, ProjectList, ProjectsContainer } from "./styles"
import Head from "next/head"

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Studio Chifrezz</title>
      </Head>
      <ProjectsContainer>
        <h1>PROJETOS</h1>
          <ProjectList>
            <Card>
              <Picture src={`/images/hornzz.webp`} alt="Hornzz" width={100} height={100} />
            </Card>
            <Card>
              <Picture src={`/images/kale.webp`} alt="Kale" width={100} height={100} />
            </Card>
            <Card>
              <Picture src={`/images/quartzzo.webp`} alt="Quartzzo" width={100} height={100} />
            </Card>
            <Card>
              <Picture src={`/images/roommate.webp`} alt="Roommate" width={100} height={100} />
            </Card>
            <Card>
              <Picture src={`/images/rebu.webp`} alt="Rebu" width={100} height={100} />
            </Card>
          </ProjectList>
      </ProjectsContainer>
    </>
  )
}

export default Projects
