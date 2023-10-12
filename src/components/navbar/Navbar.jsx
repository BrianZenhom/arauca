import './navbar.css';
import LogoSVG from './../../assets/Logocomplete';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function navbar({ isIntersecting }) {
  return (
    <nav className="navbar">
      <div className="header container">
        <div className={isIntersecting ? 'links' : 'links white_li'}>
          <div className="linksOne">
            <ul>
              <li>DROP</li>
              <li>MARCA</li>
            </ul>
          </div>
          <div className="linksTwo">
            <ul>
              <li>FAQS</li>
              <li>AYUDA</li>
            </ul>
          </div>
        </div>
        <li className="logo_wrapper container">
          <div className="logo">
            <LogoSVG isIntersecting={isIntersecting} />
          </div>
        </li>
      </div>
      <div className={isIntersecting ? 'UserIcons' : 'UserIcons white_li'}>
        <div className="dropdown">
          <div className="login_text">
            <span>Inicia sesion o crea tu cuenta</span>
          </div>
          <div className="login">
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Contraseña" />
          </div>
        </div>
        <div>
          <AccountCircleIcon />
        </div>
        <span>
          <ShoppingBagIcon />
        </span>
      </div>
    </nav>
  );
}
