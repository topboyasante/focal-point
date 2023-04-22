import React from 'react'
import Navbar from '../page-sections/navigation/Navbar'

function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Layout