import styles from './comment.module.css'
import ButtonCloseId from '../buttonCloseId/page'

export default function Comment() {

    return (

        <>

<div className={`flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg ${styles.containerComment}`}>
   <form className={`w-full max-w-xl bg-white rounded-lg px-4 pt-2 ${styles.containerComment2}`}>
    <section style={{position:'relative'}}>
        <section className={`${styles.containerButtonCloseId}`}>
        <ButtonCloseId></ButtonCloseId>
        </section>
       
        </section>

         <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
         <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea className={`bg-gray-100 rounded border border-gray-400 leading-normal resize-none  h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white ${styles.textareaComment}`} name="body" placeholder='Type Your Comment' ></textarea>
         </div>
         <div className="w-full md:w-full flex items-start md:w-full px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
               <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
               </svg>
               <p className="text-xs md:text-sm pt-px">Be respectful c:</p>
            </div>
            <div className="-mr-1">
               <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'/>
            </div>
         </div>
      </form>
   </div>

        </>

    )

}