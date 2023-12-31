import React from 'react';
import './hero.css';
import GradientBtn from './../../../../components/gradientBtn/GradientBtn';

const Hero = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="hero_section">
      <article className="hero_section-content">
        <header className="header">
        </header>
        <footer className="hero_section-bg">
          <div className="hero_section-image container">
            <div className="hero_section-text">
              <h1>Camisetas autenticas, se original. Se Arauca.</h1>
              <span>
                <p>
                  La originalidad y autenticidad son la base de toda persona. <br /> Nuestro
                  enfoque exclusivo en la calidad garantiza el mejor ajuste posible.
                </p>
              </span>
              <div className="cta">
                <GradientBtn text="VER COLECCION" />
              </div>
            </div>
          </div>
        </footer>
      </article>
    </section>
  );
});
Hero.displayName = 'Hero';

export default Hero;
