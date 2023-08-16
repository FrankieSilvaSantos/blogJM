'use client'
import Image from 'next/image'
import React, { useState } from "react";
import Link from 'next/link';

import styles from './page.module.css'
import Postconnection from './postConnections/page'


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


export default async function Home() {

  const posts = await Postconnection()


  return (

   

      

        <section className={`${styles.containerHome}`}>


    {console.log(posts)}
  
   
   

   

<div className={`container mx-auto ${styles.containerCarouselMain}`}>
            <div className={`flex items-center justify-center   py-24 sm:py-8 px-4 ${styles.containerCarousel}`}>
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={3} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                   

                                    {posts.filter((name) => name.node.title === 'Alucard').map((post,index) => (
                                   
                                        <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>
                                  
                                  
                                        <div key={index} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                            <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                           
                                            <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title}</h2>
                                            
                                              
                                          
                                                <div className="flex h-full items-end pb-6">
                                                <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                                    <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                    
                                                </div>
                                              
                                            </div>
                                      
                                        </div>
                                      
                                        </Link>
                                           ))}
                                    </Slide>
                                    <Slide index={1}>

                                    {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                     
                                       <div key={index + 1} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                       <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                      
                                       <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                           <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                       
                                         
                                     
                                           <div className="flex h-full items-end pb-6">
                                           <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                               <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                               
                                           </div>
                                         
                                       </div>
                                 
                                   </div>
                                        
                                        </Link>
                                         ))}
                                    </Slide>
                                    <Slide index={2}>

                                    {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                      
                                        <div key={index + 2} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                        <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                       
                                        <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                        
                                          
                                      
                                            <div className="flex h-full items-end pb-6">
                                            <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                                <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                         
                                        </Link>
                                        ))}
                                    </Slide>

                                    <Slide index={3}>
                                    {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                     
                                        <div key={index + 3} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                        <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                       
                                        <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                        
                                          
                                      
                                            <div className="flex h-full items-end pb-6">
                                            <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                                <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                        
                                        </Link>
                                         ))}
                                    </Slide>
                                    
                                   
                                    
                                   
                                   
                                    
                                    
                                    
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" >
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>



                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={3} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                               
                                <Slide index={0}>

                                {posts.filter((name) => name.node.title === 'Alucard').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                      
                                        <div key={index} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                            <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                           
                                            <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title}</h2>
                                            
                                              
                                          
                                                <div className="flex h-full items-end pb-6">
                                                <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                                    <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                    
                                                </div>
                                              
                                            </div>
                                      
                                        </div>
                                         
                                        </Link>
                                        ))}
                                    </Slide>
                               
                                <Slide index={1}>

                                {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                     
                                        <div key={index + 1} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                            <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                           
                                            <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title}</h2>
                                            
                                              
                                          
                                                <div className="flex h-full items-end pb-6">
                                                <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                                    <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                    
                                                </div>
                                              
                                            </div>
                                      
                                        </div>
                                        
                                        </Link>
                                         ))}
                                    </Slide>
                                    <Slide index={2}>
                                    {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                             
                                        <div key={index + 2} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                        <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                       
                                        <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                        
                                          
                                      
                                            <div className="flex h-full items-end pb-6">
                                            <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                                <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                         
                                        </Link>
                                        ))}
                                    </Slide>

                                    <Slide index={3}>
                                    {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                     
                                        <div key={index + 3} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                        <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHome}`} />
                                       
                                        <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                        
                                          
                                      
                                            <div className="flex h-full items-end pb-6">
                                            <img className={`${styles.imgHome}`}  src={post.node.author.photo.url}/>
                                                <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHome}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                    
                                        </Link>
                                             ))}
                                    </Slide>
                                    
                                    
                                
                                
                                   
                                 
                                
                                    
                                 
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>



                                        {/* for small devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={3} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                {posts.filter((name) => name.node.title === 'Alucard').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                  
                                        <div key={index} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                            <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHomeSmall}`} />
                                           
                                            <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title}</h2>
                                            
                                              
                                          
                                                <div className="flex h-full items-end pb-6">
                                                <img className={`${styles.imgHomeSmall}`}  src={post.node.author.photo.url}/>
                                                    <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHomeSmall}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                    
                                                </div>
                                              
                                            </div>
                                      
                                        </div>
                                       
                                        </Link>
                                          ))}


                                    </Slide>
                                    <Slide index={1}>
                                    {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                
                                        <div key={index + 1} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                        <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHomeSmall}`} />
                                       
                                        <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                        
                                          
                                      
                                            <div className="flex h-full items-end pb-6">
                                            <img className={`${styles.imgHomeSmall}`}  src={post.node.author.photo.url}/>
                                                <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHomeSmall}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                        
                                        </Link>
                                         ))}

                                    </Slide>
                                    
                                    <Slide index={2}>
                                    {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                      
                                        <div key={index + 2} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                        <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHomeSmall}`} />
                                       
                                        <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                        
                                          
                                      
                                            <div className="flex h-full items-end pb-6">
                                            <img className={`${styles.imgHomeSmall}`}  src={post.node.author.photo.url}/>
                                                <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHomeSmall}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                         
                                        </Link>
                                        ))}
                                    </Slide>

                                    <Slide index={3}>
                                        
                                      {posts.filter((name) => name.node.title === 'Isaac').map((post,index) => (
                                      <Link href={`/posts/${post.node.slug}`} className={`${styles.linkStyles}`}>

                                        <div key={index + 3} className={`flex flex-shrink-0 relative w-full sm:w-auto `} style={{position:'relative'}}>
                                       
                                        <img src={post.node.featureImage.url} alt="post image" className={`object-cover object-center w-full ${styles.imgCharacterHomeSmall}`} />
                                       
                                        <div className=" bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className={`lg:text-xl leading-4 text-base lg:leading-5 font-bold  text-fuchsia-400 ${styles.titleCard}`}>{post.node.title} </h2>
                                        
                                          
                                      
                                            <div className="flex h-full items-end pb-6">
                                            <img className={`${styles.imgHomeSmall}`}  src={post.node.author.photo.url}/>
                                                <h3 className={`text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-fuchsia-400 ${styles.pHomeSmall}`}>{post.node.author.name} <span className={`${styles.iconHome}`}><iconify-icon icon="typcn:calendar"></iconify-icon></span><span className={`${styles.spanCardBody}`}>{post.node.createdAt.substring(0,10)}</span></h3>
                                                
                                            </div>
                                          
                                        </div>
                                  
                                    </div>
                                         
                                        </Link>
                                        ))}
                                    </Slide>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

             
            </div>
        </div>
        
        <section className={`${styles.containerDiv1}`}>
        <section className={`${styles.div1Styles}`}>

            <img src='/img/logo/logo.png' className={`rounded-full border border-x-gray-300 shadow-sm"  ${styles.imgDiv1}`}></img>

                                        <div className={`${styles.containerTextDiv1}`}>
            <h2 className={`${styles.tituloDiv1}`}>GamesBlog</h2>
            <p className={`${styles.pDiv1}`}>Here you're gonna find some of the weirdest people talking about the most random curiosities about your favorites characters</p>
            </div>
        </section>
        </section>
   
      
    
        

   

    
  
 
     
        </section>

      
  )
}