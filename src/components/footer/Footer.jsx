import LogoCompleteFooter from './../../assets/LogoCompleteFooter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_content container">
        <a href="#">
        <LogoCompleteFooter />
        </a>
        <div className="socials">
          <div className="socials2">
            <a href="https://instagram.com/arauca.brand">
              <InstagramIcon fontSize="inherit" color="inherit" />
            </a>
          </div>
          <div className="socials1">
            <a href="https://whatsapp.com">
              <WhatsAppIcon fontSize="inherit" />
            </a>
          </div>
        </div>
        <hr />
        <div className="footers_footer">
          &copy; 2023 ARAUCA BRAND. <br /> Todos los derechos reservados. 
          <div className="privacyterms">
            <a href="">Privacidad</a>
            <a href="">Terminos & Condiciones</a>
          </div>
        </div>
      </div>
      <div className="shoutout">
      <small className='developed'>
        <a href="https://brianzenhom.dev">Developed By Brian Zenhom</a>  
      </small>
      </div>
    </footer>
  );
}
