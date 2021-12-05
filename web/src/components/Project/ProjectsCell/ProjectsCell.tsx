import type { FindProjects } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Projects from 'src/components/Project/Projects'

export const QUERY = gql`
  query FindProjects {
    projects {
      id
      email
      title
      website
      github_url
      description
      twitter
      github
      slug
      tags
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No projects yet. '}
      <Link to={routes.newProject()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ projects }: CellSuccessProps<FindProjects>) => {
  return <Projects projects={projects} />
}