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
        <span>
          <AccountCircleIcon />
        </span>
        <span>
          <ShoppingBagIcon />
        </span>
      </div>
    </nav>
  );
}
