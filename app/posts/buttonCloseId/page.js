'use client'
import styles from './buttonCloseId.module.css'
import { useState } from 'react'

export default function ButtonCloseId() {

    const [button,setButton] = useState(true)

   

    return(

        <>
      
        <button onClick={() => setButton(false)} className={`bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100 ${styles.buttonCloseId}`} value='close'>X</button>
        
       

          
        
        
       </>

    )

}