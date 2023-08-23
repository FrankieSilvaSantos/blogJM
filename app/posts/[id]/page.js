
import Postconnection from '@/app/postConnections/page'
import ButtonId from '../buttonId/page'
import styles from './id.module.css'


export default async function Id({params}) {


const posts = await Postconnection()


    
  return(

    <>  

 
    {console.log(params.id)}
      {posts.filter((name) => name.node.title == `${params.id.charAt(0).toUpperCase() + params.id.slice(1)}`    ).map((post) => (
        <section>
        <section className={`${styles.containerImgId}`}>
       <img className={`${styles.imgPostId}`} src={post.node.featureImage.url}></img>
       </section>


       
     
       <section style={{display:'flex',justifyContent:'center', marginTop: '20px' }}> <span className={`${styles.borderId}`}></span></section>
     
       
     
       
        <section className={`${styles.containerTextId}`}>

        <section className={`${styles.borderContainerId}`}>
          
          <section className={`${styles.containerTitleId}`}>
        <h1 className={`${styles.titleId}`}>{post.node.title}</h1>
        </section>
        <section className={`${styles.containerPId}`}>
       <p className={`${styles.pId}`}>{post.node.excerpt}</p>
       

       </section>

       <section className={`${styles.buttonIdContainer}`}>
       <ButtonId></ButtonId>


</section>
    
        </section>

        </section>



       
       </section>
       
   

    
          
      ))}

    </>

  )



}