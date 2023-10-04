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
      <header className="products_content container ">
        <div className="singleCard">
          <div className="singleCard_content">
            <div className="singleCard_wrapper">
              <div className="singleCardTitle">
                <h1>¿Porque Arauca?</h1>
              </div>
              <div className="headline">
                <span>
                  <p>
                    Somos diferentes y queremos vestir a aquellos que no desean
                    ser uno más entre la multitud. Aquellos que tienen una
                    seguridad arolladora y que con pasión logran todo aquello
                    que se proponen.
                  </p>
                  <p>
                    Traemos productos con historia, fusionando alta calidad con
                    compromiso firme hacia la sostenibilidad y meticulosidad en
                    cada detalle. Cada colección despertará tu entusiasmo y
                    desearás adquirir cada una de ellas.
                  </p>
                  <p>
                    Nuestra misión es ser el compañero de tu historia,
                    recordándote que solo tú eres el autor.
                    <br />
                  </p>
                  <b>¡No permitas que otros definan quién eres!</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {tshirtCollection.map((t) => {
          return (
            <>
              <div className="products_content-card">
                <div className="img_box">
                  <img className="image" src={t.img} alt="" />
                </div>
                <div className="content_box">
                  <div className="titleProduct">
                    <h2>{t.title}</h2>
                  </div>
                  <div className="sizeandcolor">
                    <div className="size">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                      <span>XXL</span>
                    </div>

                    <div className="color">
                      <div className="blanco"></div>
                      <div className="negro"></div>
                    </div>
                  </div>
                  <div className="buttonProduct">
                    <button>
                      <a href="#">Añadir</a>
                    </button>
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
