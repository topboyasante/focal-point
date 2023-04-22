import { CSSPlugin, gsap } from 'gsap'
import React, { useEffect, useState } from 'react'
import {CgMenuGridR,CgCloseO} from 'react-icons/cg'

function Navbar() {

    const [navIsOpen, setNavIsOpen] = useState(false)

    const tl = gsap.timeline()
  
    useEffect(()=>{
      gsap.registerPlugin(CSSPlugin)
    })
  
    function openNavbar(){
    
      gsap.to(".nav-menu",{
         opacity:0
      })

      tl.fromTo(".navLink-container",
        {
          clipPath:'circle(0.0%)'
        },
        {
          clipPath: "circle(100%)",
          duration:1.2
        }
      )
      tl.to(".nav-menu-sm",{
        opacity:1
     })
      setNavIsOpen(true)
    }

    function closeNavbar(){
        gsap.to(".nav-menu-sm",{
            opacity:0
        })
        tl.fromTo(".navLink-container",
        {
          clipPath: "circle(100%)"
        },
        {
          clipPath:'circle(0%)',
          duration:1.2
        }
      )
      tl.to(".nav-menu",{
        opacity:1
      })
        setNavIsOpen(false)
      }

  return (
   <>
    {/* Actual NavigationBar */}
    <nav className='fixed w-screen h-[7vh] p-5 z-[30]'>

        <section className='flex max-w-[1600px] mx-auto justify-between items-center nav-menu'>
            {/* Logo */}
            <section className="logo">
                <span className='text-3xl md:text-5xl lg:text-5xl transparent'>fp.</span>
            </section>

            {/* toggle button */}
            <section className='text-4xl'>
                <CgMenuGridR onClick={openNavbar}/>
            </section>
        </section>

    </nav>

    {/* Toggled Menu */}
    <section className='fixed w-screen h-screen navLink-container z-[40]' onClick={closeNavbar}>
        <section className='flex max-w-[1600px] mx-auto justify-between items-center p-5 nav-menu-sm'>
            {/* Logo */}
            <section className="logo">
                <span className='text-3xl md:text-5xl lg:text-5xl transparent'>fp.</span>
            </section>

            {/* toggle button */}
            <section className='text-4xl'>
                <CgCloseO onClick={closeNavbar}/>
            </section>
        </section>
    </section>
  </>
  )
}

export default Navbar