import React from 'react';
import './hero.css';
import GradientBtn from './../../../../components/gradientBtn/GradientBtn';

const Hero = React.forwardRef((props, ref) => {
  return (
    <article ref={ref} className="hero_section">
      <main className="hero_section-content">
        <div className="hero_section-bg">
          <div className="hero_section-image container">
            <div className="hero_section-text">
              <h1>Arauca es la clave de tu autenticidad</h1>
              <span>
                <p>
                  La originalidad y autenticidad son la base de todo. Nuestro
                  enfoque exclusivo en la calidad garantiza el ajuste posible.
                </p>
              </span>
              <div className="cta">
                <GradientBtn text="Prueba la tuya" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
});
Hero.displayName = 'Hero';

export default Hero;
