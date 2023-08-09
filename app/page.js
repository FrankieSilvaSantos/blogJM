import Image from 'next/image'

import styles from './page.module.css'
import Postconnection from './postConnections/page'


export default async function Home() {

  
 

 

    const posts = await Postconnection();


  

  return (

    


      

        <section className={`${styles.containerHome}`}>

{  console.log(posts)}
      

    
  
    
      
       
        

    



  
{posts.map((post) => (
   <a  href="#" className={`flex flex-col  items-center bg-violet-200 border border-purple-600 rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-violet-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${styles.cardContainerHome}`}>

     
  
    
      <img className={`object-cover w-full rounded-t-lg h-96 md:h md:w-48 md:rounded-none md:rounded-l-lg ${styles.imgCharacterHome}`} src={post.node.featureImage.url} alt=""/>
      
 

   
    
 <div className={`flex flex-col justify-between p-4 leading-normal ${styles.cardBody}`}>

     <h5 className={`mb-2 text-2xl font-bold tracking-tight text-fuchsia-400 dark:text-white ${styles.titleCardHome}`}>{post.node.title}</h5>
     <p className="mb-3 font-bold text-white dark:text-gray-400">{post.node.excerpt}</p>
    
     
    
 

       <section className={`${styles.authorSpecsHome}`}>
     

        
       
        <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
        <p className={`${styles.pHome} text-fuchsia-400`}>{post.node.author.name}</p>
        <p className={`${styles.pHome2} text-fuchsia-400`}><span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span> {post.node.createdAt.replace('T',' - ').substring(0,21)}</p>


      
        </section>


   

  </div>
    


    
    
    </a>
      ))}
   
   
      
    
        

   

    
  
 
     
        </section>

      
  )
}