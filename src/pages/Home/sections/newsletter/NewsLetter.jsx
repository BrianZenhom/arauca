import './newsletter.css';
import imgtest from '/testimage.webp';
import GradientBtnTwo from './../../../../components/gradientBtn2/GradientBtnTwo';

export default function NewsLetter() {
  return (
    <article className="newsletter_section">
      <header className="newsletter_content container">
        <div className="imgnewsletter">
          <img src={imgtest} alt="" />
        </div>
        <form>
          <div className="newsletter_form-title">
            <h2>Únete a nuestra lista.</h2>
            <span>
              Recibe los emails de Arauca y obten{' '}
              <b>ofertas exclusivas, descuentos y mucho más.</b>
            </span>

            <div className="signup">
              <input type="email" placeholder="Ingresa tu correo" />
              <GradientBtnTwo text="SUSCRIBIRSE" />
            </div>

            <label>
              Al hacer click en suscribirme, esta de acuerdo con nuestros{' '}
              <a href="">Terminos & condiciones</a>
            </label>
          </div>
        </form>
      </header>
    </article>
  );
}
