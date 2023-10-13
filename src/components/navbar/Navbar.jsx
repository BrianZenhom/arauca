import './navbar.css';
import LogoSVG from './../../assets/Logocomplete';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar({ isIntersecting }) {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () =>{
    if(window.scrollY > 60) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(()=>{
  window.addEventListener('scroll', handleScroll, {passive:true}) 

  return()=>{
    window.removeEventListener('scroll', handleScroll)
  }
  }, [])

  return (
    <nav className={isScrolled ? "navbar navbarscrolled" : 'navbar'}>
      <div className="header container">
        <div className={isIntersecting ? 'links' : 'links white_li'}>
          <div className="linksOne">
            <ul id={isScrolled ? 'visibleUl' : 'hiddenUl'}>
              <li>DROP</li>
              <li>MARCA</li>
            </ul>
          </div>
          <div className="linksTwo">
            <ul id={isScrolled ? 'visibleUl' : 'hiddenUl'}>
              <li>FAQS</li>
              <li>AYUDA</li>
            </ul>
          </div>
        </div>
        <div className="logo_wrapper">
          <div className="logo">
            <a href="/">
            <LogoSVG isIntersecting={isIntersecting} isScrolled={isScrolled} />
            </a>
          </div>
        </div>
      </div>
      <div className={isIntersecting ? 'UserIcons' : 'UserIcons white_li'}>
        <div>
          <AccountCircleIcon />
        </div>
        <div className="dropdown">
          <div className="login_text">
            <span>Inicia sesion o crea tu cuenta</span>
          </div>
          <form className="login">
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Contraseña" />
            <a href="">Olvide mi contraseña.</a>
            <button>Iniciar Sesion</button>
          </form>
        </div>
        <span>
          <ShoppingBagIcon />
        </span>
      </div>
      
    </nav>
  );
}
