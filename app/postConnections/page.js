import Home from "../page"
import request from 'graphql-request'
import { gql } from 'graphql-request'
export default async function Postconnection() {

    const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

    const query = gql`

  query PostConnections {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featureImage {
            url
          }
        }
      }
    }
    authorsConnection {
      edges {
        node {
          photo {
            url
          }
          name
          id
          bio
          createdAt
          post {
            author {
              id
              name
              photo {
                url
              }
              post {
                author {
                  bio
                  createdAt
                  name
                  id
                  publishedAt
                  updatedAt
                }
                excerpt
                featuredPost
                slug
                title
                updatedAt
              }
            }
          }
        }
      }
    }
    franchisesConnection {
      edges {
        node {
          id
        }
      }
    }
    node(id: "") {
      ... on Author {
        id
        name
        bio
        createdAt
        publishedAt
        updatedAt
      }
      ... on Comment {
        id
        email
        comment
        createdAt
      }
      ... on Franchise {
        id
        name
      }
    }
  }
  `
  const results = await request(graphqlApi,query)

    return  results.postsConnection.edges
    
}