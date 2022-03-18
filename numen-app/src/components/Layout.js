import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import NavBar from './NavBar'

export default function Layout({ children}) {
    
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() => {
      const hiddenMenu = () => {
          if (window.innerWidth > 768 && isOpen)  {

            setIsOpen(false)

          }
      }
      window.addEventListener("resize", hiddenMenu)

      return () => {
          window.removeEventListener('resize', hiddenMenu)
      }
    })
    

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="h-screen">
        <NavBar toggleOpen={toggleOpen} />
        {isOpen  && <Menu  toggleOpen = {toggleOpen}/> }
        { children }
    </div>
  )
}