import './navbar.css'
import LogoSVG from './../../assets/Logocomplete'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCart } from '../../hooks/useCart'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { openCart, setOpenCart } = useCart()

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

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

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
              <button>Account</button>
            </div>

            <div className="nav_buttons">
              <button onClick={handleOpenCart}>Bag</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
