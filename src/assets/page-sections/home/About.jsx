import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Marquee from "react-fast-marquee";

import CameraImg from '../../gallery/images/camera.png'
import Image from 'next/image';

function About() {

    const imageBg =  [
        {
            link:'https://images.unsplash.com/photo-1543086278-8a98bf905c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
        },
        {
            link:'https://images.unsplash.com/photo-1630663707660-f3ed6da4df3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
        },
        {
            link:'https://images.unsplash.com/photo-1531299983330-093763e1d963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80'
        },
        {
            link:'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1605044940529-82fdcc879bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
        },
        {
            link:'https://images.unsplash.com/photo-1602661054115-52466af90132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'
        },
        {
            link:'https://images.unsplash.com/photo-1602131133761-c698725d1d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1610257745158-86a6784f1efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681871188681-2362ae284742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681831356184-812188120825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681483476977-322d81693e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681797485212-7491d3f3619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681802731183-c07ee779dabd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
    ]

  return (
   <>
        <main className='w-full h-screen relative overflow-hidden'>
            <section className='absolute w-full h-full'>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900:3}}>
                    <Masonry gutter='0rem'>
                        {
                            imageBg.map((item)=>{
                                return(
                                    <img src={item.link} alt={item.link} key={item.link}/>
                                )
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry> 
            </section>
            <section className="absolute bg-black w-screen h-screen opacity-10"></section>
            <section className="absolute bottom-0 w-full p-5">
            <Marquee gradient={false} speed={120} direction='left'>
                        <p className='text-5xl lg:text-7xl'> a picture says a thousand, no a million words | capture your best (and worst) experiences |  </p>
            </Marquee>
            </section>
        </main>
        <main className='w-full lg:h-screen relative overflow-hidden'>
            <section className='w-full h-full'>
                <div className='grid lg:grid-cols-3 h-full'>
                    <img src="https://images.unsplash.com/photo-1679800631624-7962f955eb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="images3"
                    className='object-cover h-full w-full'/>
                    <div className='p-5 flex justify-center items-center'>
                        <div>
                            <h1 className='text-center text-3xl uppercase'>Welcome to focalpoint.</h1>
                            <p className='my-3 text-center text-xl'>FOCALPOINT is a creative and innovative photography company specializing in capturing timeless images that tell your story. With a team of experienced photographers 
                                and state-of-the-art equipment, we offer personalized experiences for weddings, portraits, events, and commercial photography. Our focus on quality and attention to 
                                detail has earned us a reputation as one of the leading photography companies in the industry. Let us help you capture your memories and create stunning images that 
                                you will treasure for a lifetime.
                            </p>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1680833910988-dc20bc1f8d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="images-4" 
                    className='object-cover h-full w-full'/>
                </div>
            </section>
        </main>
    </>
  )
}

export default About