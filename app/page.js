import Image from 'next/image'
import request from 'graphql-request'
import { gql } from 'graphql-request'
import styles from './page.module.css'

export default async function Home() {

  
 
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

  return (

    


      

        <section className={`${styles.containerHome}`}>




{results.postsConnection.edges.map((result,index) => (


    <a key={index} href="#" className={`flex flex-col  items-center bg-violet-200 border border-purple-600 rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-violet-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${styles.cardContainerHome}`}>

    
   
 <img className={`object-cover w-full rounded-t-lg max-h-full md:h md:w-48 md:rounded-none md:rounded-l-lg ${styles.imgCharacterHome}`} src={result.node.featureImage.url} alt=""/>

 <div className={`flex flex-col justify-between p-4 leading-normal ${styles.cardBody}`}>
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-fuchsia-400 dark:text-white">{result.node.title}</h5>
     <p className="mb-3 font-bold text-white dark:text-gray-400">{result.node.excerpt}</p>
     {results.authorsConnection.edges.map((result) => (
        <section className={`${styles.authorSpecsHome}`}>
        <img className={`${styles.imgHome}`} src={result.node.photo.url}></img>
        <p className={`${styles.pHome} text-fuchsia-400`}>{result.node.name}</p>
        <p className={`${styles.pHome2} text-fuchsia-400`}><span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span> {result.node.createdAt.replace('T',' - ').substring(0,21)}</p>
        </section>
     ))}

      {console.log(results.authorsConnection.edges)}

  </div>
    


   
    
    </a>






    
  

       
 
     ))}
        </section>

      
  )
}
