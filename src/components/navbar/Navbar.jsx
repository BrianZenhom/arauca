import './navbar.css'
import LogoSVG, { CartIcon, UserLogo } from './../../assets/Logocomplete'
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
    <nav className={isScrolled ? 'navbar navbarscrolled' : 'navbar'}>
      <div className="header container">
        <div className="logo">
          <LogoSVG isScrolled={isScrolled} />
        </div>
      </div>
      <div className="UserIcons white_li">
        <div className="LoginIcon">
          <UserLogo />
        </div>

        <div className="ShoppingIcon">
          <CartIcon />
        </div>
      </div>
    </nav>
  )
}
