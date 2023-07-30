import Image from 'next/image'
import request from 'graphql-request'
import { gql } from 'graphql-request'
import styles from './page.module.css'

export default async function Home() {

  
 
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

 

   


  const query = gql`

  query PostConnections {
    authors {
      bio
      createdAt
      id
      name
      publishedAt
      updatedAt
    }
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
          categories {
            name
            slug
          }
        }
      }
    }
  }
  `
  const results = await request(graphqlApi,query)

  return (
      

        <section className={`${styles.containerHome}`}>
      {results.authors.map((authors) => {
      return   <h1>{authors.name}</h1>
      })}
        </section>

      
  )
}
