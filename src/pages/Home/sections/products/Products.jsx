import './products.css';
import tshirtTest from '/tshirttest2.webp';
import tshirtTest2 from '/tshirttest3.webp';
import tshirtTest5 from '/tshirttest5.webp';

export default function Products() {
  // Temporary data
  const tshirtCollection = [
    {
      Id: 1,
      img: tshirtTest,
      title: 'Camiseta 1',
    },
    {
      Id: 2,
      img: tshirtTest2,
      title: 'Camiseta 2',
    },
    {
      Id: 3,
      img: tshirtTest5,
      title: 'Camiseta 3',
    },
  ];

  return (
    <article className="products_section">
      <header className="products_content ">
        <div className="singleCard">
          <div className="singleCard_content">
            <div className="singleCardTitle">
              <h1>LA COLLECCION DE ARAUCA</h1>
            </div>
            <div className="headline">
              <p>
                Imagina un mundo lleno de posibilidades donde ARAUCA es tu
                pasaporte de autenticidad.
              </p>
            </div>
            <span>
              <p>
                Este es nuestro rincón especial, donde te contamos nuestra
                historia de una manera única.
              </p>
              <p>
                Aquí no encontrarás una llamada a la acción, solo una invitación
                a sumergirte en la calidad.
              </p>
              <p>
                Descubre la chispa de creatividad que nos impulsó a competir en
                un mercado feroz. Lo que nos hace únicos en nuestra búsqueda
                inquebrantable de la excelencia.
              </p>
            </span>
          </div>
        </div>
        {tshirtCollection.map((t) => {
          return (
            <>
              <div className="products_content-card">
                <div className="img_box">
                  <img src={t.img} alt="" />
                </div>
                <div className="content_box">
                  <div className="titleProduct">
                    <h2>{t.title}</h2>
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
            </>
          );
        })}
      </header>
    </article>
  );
}
