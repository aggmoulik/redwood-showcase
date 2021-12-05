export const schema = gql`
  type Image {
    id: Int!
    url: String!
    Project: Project
    projectId: Int
  }

  type Query {
    images: [Image!]! @requireAuth
  }

  input CreateImageInput {
    url: String!
    projectId: Int
  }

  input UpdateImageInput {
    url: String
    projectId: Int
  }
`
