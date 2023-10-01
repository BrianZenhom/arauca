import './products.css';
import tshirtTest from '/tshirttest2.webp';

export default function Products() {
  return (
    <article className="products_section">
      <header className="products_content container">
        <div className="products_content-card">
          <div className="img_box">
            <img src={tshirtTest} alt="" />
          </div>
          <div className="content_box">
            <div className="titleProduct">
              <h2>Titulo</h2>
            </div>
            <div className="details">
              <div className="size">
                <h3>Talle:</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>

              <div className="color">
                <h3>Color:</h3>
                <span>Negro</span>
                <span>Blanco</span>
              </div>
              <div className="buttonProduct">
                <button>
                  <a href="#">Añadir</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </article>
  );
}
