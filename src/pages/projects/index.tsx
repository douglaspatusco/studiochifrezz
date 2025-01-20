import Link from "next/link"
import { Card, Picture, ProjectsList, ProjectsContainer } from "./styles"
import Head from "next/head"

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Studio Chifrezz</title>
      </Head>
      <ProjectsContainer>
      <h1>CURTAS ANIMADOS</h1>
        <ProjectsList>
          <Card>
            <Link href={'/projects/hornzz'}>
              <Picture title="Hornzz" src={`/images/hornzz.webp`} alt="Hornzz" width={100} height={100} />
            </Link>
          </Card>
          <Card>
            <Link href={'/projects/quartzzo'}>
              <Picture title="Quartzzo" src={`/images/quartzzo.webp`} alt="Quartzzo" width={100} height={100} />
            </Link>
          </Card>
          <Card>
            <Link href={'/projects/rebu'}>
              <Picture title="Rebu" src={`/images/rebu.webp`} alt="Rebu" width={100} height={100} />
            </Link>
          </Card>
        </ProjectsList>
        <h1>SÉRIES DE TV</h1>
        <ProjectsList>
          <Card>
            <Link href={'/projects/kale'}>
              <Picture title="Kale" src={`/images/kale.webp`} alt="Kale" width={100} height={100} />
            </Link>
          </Card>
          <Card>
            <Link href={'/projects/roommate'}>
              <Picture title="Roommate" src={`/images/roommate.webp`} alt="Roommate" width={100} height={100} />
            </Link>
          </Card>
        </ProjectsList>
      </ProjectsContainer>
    </>
  )
}

export default Projects
