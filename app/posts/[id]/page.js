import Postconnection from "@/app/postConnections/page"

export default async function Id({params}) {

  const posts = await Postconnection()
  

    
  return(

    <>

    {console.log(params.id)}
      {posts.filter((name) => name.node.title == `${params.id.charAt(0).toUpperCase() + params.id.slice(1)}`    ).map((post) => (

       <h1> {post.node.title}</h1>
          
      ))}
    
    </>

  )



}