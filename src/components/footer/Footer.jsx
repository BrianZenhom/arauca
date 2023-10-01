import LogoComplete from '../../assets/Logocomplete';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_content container">
        <LogoComplete />
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
          &copy; 2023 ARAUCA Clothing. Todos los derechos reservados.
          <div className="privacyterms">
            <a href="">Privacidad</a>
            <a href="">Terminos & Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
