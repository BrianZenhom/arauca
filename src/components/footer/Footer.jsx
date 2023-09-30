import LogoComplete from '../../assets/Logocomplete';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_content container">
        <LogoComplete />
        <div className="socials">
          <div className="socials1">Instagram</div>
          <div className="socials2">Whatsapp</div>
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
