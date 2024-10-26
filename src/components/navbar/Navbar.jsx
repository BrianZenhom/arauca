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
        <div className="links white_li">
          <div className="linksOne">
            <ul id={isScrolled ? 'visibleUl' : 'hiddenUl'}>
              <li>Drop</li>
              <li>Marca</li>
            </ul>
          </div>
          <div className="linksTwo">
            <ul id={isScrolled ? 'visibleUl' : 'hiddenUl'}>
              <li>Faqs</li>
              <li>Ayuda</li>
            </ul>
          </div>
        </div>
        <div className="logo_wrapper">
          <div className="logo">
            <a href="#">
              <LogoSVG isScrolled={isScrolled} />
            </a>
          </div>
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
