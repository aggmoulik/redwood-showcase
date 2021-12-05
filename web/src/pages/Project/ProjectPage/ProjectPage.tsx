import ProjectCell from 'src/components/Project/ProjectCell'

type ProjectPageProps = {
  id: Int
}

const ProjectPage = ({ id }: ProjectPageProps) => {
  return <ProjectCell id={id} />
}

export default ProjectPage
