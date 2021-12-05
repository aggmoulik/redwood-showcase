export const schema = gql`
  type Project {
    id: Int!
    email: String!
    title: String!
    website: String!
    github_url: String
    description: String!
    images: [Image]!
    twitter: String
    github: String
    tags: [String]
    slug: String
    createdAt: DateTime
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    email: String!
    title: String!
    website: String!
    github_url: String
    description: String!
    twitter: String
    github: String
  }

  input UpdateProjectInput {
    email: String
    title: String
    website: String
    github_url: String
    description: String
    twitter: String
    github: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
