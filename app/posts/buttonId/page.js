'use client'


import { useState } from 'react'
import styles from './buttonId.module.css'
import Comment from '../comment/page'
import buttonCloseId from '../buttonCloseId/page'

export default function ButtonId() {

    const [comment,setComment] = useState(false)

    const buttonState = buttonCloseId()

    if(!buttonState) {
      setComment(false)
    }

    return (
    
        <>
        <section className={`${styles.containerButtonId}`}>
    <button onClick={() => setComment(true)} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${styles.buttonIdStyles}`}>
  COMMENT
</button>
</section>


{comment && 

  <section className={`${styles.commentContainer}`}>
  <Comment></Comment>
  </section>



}
</>

  )



}

    

