'use client'

import styles from './header.module.css'
import { useState } from "react"
import Link from 'next/link'


export default function Header() {

    const [navbar,setNavbar] = useState(false)

    return(

        <>

<nav class={`bg-transparent-800 ${styles.navStyles}`}>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" class={`relative inline-flex items-end justify-end rounded-md p-2   text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${styles.buttonHeader}`} aria-controls="mobile-menu" aria-expanded="false"
        onClick={() => setNavbar(!navbar)}>
          <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" stroke-strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
      
        </button>
      </div>
      <div class={` ${styles.logoPositioning}`}>
        <img class="h-8 w-auto" src="img/logo/logo.png" alt="Your Company"/>
            <h1 className={`${styles.tituloLogo}`}>GraphCMS</h1>
        </div>
    
      <div class="flex flex-1 items-end justify-end sm:items-stretch sm:justify-end">
       

      

<div class={`hidden sm:ml-6 sm:block `}>
<div class={`flex space-x-4 ${styles.divLink} `}>
 
  <Link href="/" class=" text-gray-300 focus:bg-black focus:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
  <Link href="/react" class="text-gray-300 focus:bg-black focus:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">React</Link>
  <a href="#" class="text-gray-300 focus:bg-black focus:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">Web Development</a>

</div>
</div>

      
    
      </div>
  
      </div>
    </div>



{navbar && (
  <div class="sm:hidden" id="mobile-menu">
  <div class="space-y-1 px-2 pb-3 pt-2">

    <Link href="/" class=" text-gray-300 hover:bg-black hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
    <Link href="/react" class="text-gray-300 hover:bg-black hover:text-white block rounded-md px-3 py-2 text-base font-medium">React</Link>
    <a href="#" class="text-gray-300 hover:bg-black hover:text-white block rounded-md px-3 py-2 text-base font-medium">Web Development</a>

  </div>
</div>

)}

</nav>

        </>

    )

}