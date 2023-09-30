import './products.css';
import tshirtTest from '/tshirttest2.webp';

export default function Products() {
  return (
    <div className="products_section">
      <div className="products_content container">
        <div className="products_card">
          <div className="products_card-title">
            <h4>Titulo del producto</h4>
            <span>Descripción hyper corta del producto.</span>
          </div>
          <img src={tshirtTest} alt="" />
          <div className="products_cta">
            <div className="button">
              <button>AÑADIR</button>
            </div>
            <div className="talla">
              <button>TALLES</button>
            </div>
          </div>
        </div>
        <div className="products_card">
          <div className="products_card-title">
            <h4>Titulo del producto</h4>
            <span>Descripción hyper corta del producto.</span>
          </div>
          <img src={tshirtTest} alt="" />
          <div className="products_cta">
            <div className="button">
              <button>AÑADIR</button>
            </div>
            <div className="talla">
              <button>TALLES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
