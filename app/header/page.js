'use client'

import styles from './header.module.css'
import { useState } from "react"
import Link from 'next/link'


export default function Header() {

    const [navbar,setNavbar] = useState(false)

    return(

        <>

<nav className={`bg-transparent-800 ${styles.navStyles}`}>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" className={`relative inline-flex items-end justify-end rounded-md p-2   text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${styles.buttonHeader}`} aria-controls="mobile-menu" aria-expanded="false"
        onClick={() => setNavbar(!navbar)}>
          <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
      
        </button>
      </div>
      <div className={` ${styles.logoPositioning}`}>
        <img className={`h-8 w-auto ${styles.logoImgHome}`} src="img/logo/logo.png" alt="Your Company"/>
            <h1 className={`${styles.tituloLogo}`}>GamesBlog</h1>
        </div>
    
      <div className="flex flex-1 items-end justify-end sm:items-stretch sm:justify-end">
       

      

<div className={`hidden sm:ml-6 sm:block `}>
<div className={`flex space-x-4 ${styles.divLink} `}>
 
  <Link href="/" className=" text-gray-300 focus:bg-black focus:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
  <Link href="/react" className="text-gray-300 focus:bg-black focus:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Franchises</Link>
  <a href="#" className="text-gray-300 focus:bg-black focus:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">Characters</a>

</div>
</div>

      
    
      </div>
  
      </div>
    </div>



{navbar && (
  <div className="sm:hidden" id="mobile-menu">
  <div className="space-y-1 px-2 pb-3 pt-2">

    <Link href="/" className=" text-gray-300 hover:bg-black hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
    <Link href="/react" className="text-gray-300 hover:bg-black hover:text-white block rounded-md px-3 py-2 text-base font-medium">Franchises</Link>
    <a href="#" className="text-gray-300 hover:bg-black hover:text-white block rounded-md px-3 py-2 text-base font-medium">Characters</a>

  </div>
</div>

)}

</nav>

        </>

    )

}