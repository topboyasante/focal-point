import { gsap } from 'gsap'
import React,{useEffect} from 'react'

function Hero() {

  useEffect(()=>{
    const tl = gsap.timeline()
    tl.fromTo(".nav-menu",
    {
      opacity:0
    },
    {
      opacity:1,
      duration:1
    })
    gsap.fromTo(".header",
    {
      y:500,
    
    },
    {
      y:0,
      duration:1.5,
      stagger:0.25
    })
  })

  return (
    <main>
        <section className='relative w-screen h-screen'>
            <img src="https://images.unsplash.com/photo-1609972770318-add13a2d2c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" 
            className="absolute w-full h-full object-cover object-center"
            />
            <section className="absolute bottom-0 p-8 w-full">
              <section className='max-w-[1600px] mx-auto overflow-hidden'>
                <h1 className='text-[2em] md:text-[5em] xl:text-[8em] transparent header'>focalpoint.</h1>
              </section>
            </section>
        </section>
    </main>
  )
}

export default Hero