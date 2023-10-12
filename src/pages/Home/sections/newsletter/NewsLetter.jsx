import './newsletter.css';
import imgtest from '/tshirttest4.webp';
import GradientBtnTwo from './../../../../components/gradientBtn2/GradientBtnTwo';

export default function NewsLetter() {
  return (
    <section id='drop' className="newsletter_section">
      <article className="newsletter_content container">
        <header className="imgnewsletter">
          <img src={imgtest} alt="" />
        </header>
        <form>
          <div className="newsletter_form-title">
            <h2>Únete a nuestra lista.</h2>
            <span>
              Recibe los emails de Arauca y obten{' '}
              <b>ofertas exclusivas, descuentos y mucho más.</b>
            </span>

            <div className="signup">
              <input type="email" placeholder="Ingresa tu correo" />
              <GradientBtnTwo text="SUSCRIBIRME" />
            </div>

            <label>
              Al hacer click en suscribirme, esta de acuerdo con nuestros{' '}
              <a href="">Terminos & condiciones</a>
            </label>
          </div>
        </form>
      </article>
    </section>
  );
}
