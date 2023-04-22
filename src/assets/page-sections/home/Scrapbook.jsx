import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


function Scrapbook() {
    const imageScarpbook = [
        {
            link:'https://images.unsplash.com/photo-1681913783442-e551ea742373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681920980959-05ea263e2153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681931440933-0736e97cf0c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681913783442-e880c41b86a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681673211436-fb1ddaa2245e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681913781833-6bfe4a576997?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681958757914-4c003d548726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681238093193-1b3a8fcdf225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681825488477-c4e449a7aae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681886916229-d364e539fbf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681743139296-6f6f8aaedd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681631482352-74b60e2b61fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681823325167-6d8e4bf137f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681636277437-99a1dc17cf9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681844931449-e0992a27d157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            link:'https://images.unsplash.com/photo-1681516771351-dc8d395c122d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
      

    ]
  return (
    <main className='w-full h-full'>
        <section>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900:5}}>
                    <Masonry gutter='0rem'>
                        {
                            imageScarpbook.map((item)=>{
                                return(
                                    <img src={item.link} alt={item.link} key={item.link}/>
                                )
                            })
                        }
                    </Masonry>
            </ResponsiveMasonry> 
        </section>
    </main>
  )
}

export default Scrapbook