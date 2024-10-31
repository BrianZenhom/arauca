import './navbar.css'
import LogoSVG from './../../assets/Logocomplete'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav className={isScrolled ? 'navbar navbarscrolled' : 'navbar'}>
        <div className="navbar_wrapper">
          <div className="header container">
            <div className="logo">
              <LogoSVG isScrolled={isScrolled} />
            </div>
          </div>
          <div className="nav_buttons-cta">
            <div className="nav_buttons">
              <span>Account</span>
            </div>

            <div className="nav_buttons">
              <span>Bag</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
