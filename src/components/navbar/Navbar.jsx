import './navbar.css'
import LogoSVG from './../../assets/Icons.jsx'
import { useCart } from '../../hooks/useCart'
import { useScroll } from '../../hooks/useScroll'

export default function Navbar() {
  const isScrolled = useScroll()
  const { openCart, setOpenCart, cart } = useCart()

  function handleOpenCart() {
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
              {cart[0]?.quantity && (
                <div className="nav_buttons-noti">{cart[0]?.quantity}</div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
