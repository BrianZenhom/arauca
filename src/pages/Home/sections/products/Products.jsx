import './products.css';
import tshirtTest from '/araucav1.webp';
import tshirtTest2 from '/araucav2.webp';
import tshirtTest5 from '/araucav1model.webp';

export default function Products() {
  // Temporary data
  const tshirtCollection = [
    {
      Id: 1,
      img: tshirtTest,
      title: 'Washed OS',
      price: `14,99`,
    },

    {
      Id: 2,
      img: tshirtTest2,
      title: 'Washed OS Black',
      price: `14,99`,
    },
    {
      Id: 3,
      img: tshirtTest5,
      title: 'Camiseta 3',
      price: `14,99`,
    },
  ];

  return (
    <section id='products' className="products_section">
      <article className="products_content container ">
       
        {tshirtCollection.map((t) => {
          return (
            <>
              <div className="products_content-card">
                <div className="img_box">
                  <img style={{width: '100%', height: '100%', aspectRatio:938/1067 }} className="image" src={t.img} alt="" />
                </div>
                <div className="content_box">
                  <div className="titleProduct">
                    <h2>{t.title}</h2>
                    <h3>{t.price} &euro;</h3>
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
                      <div className="blancoouter">
                        <div className="blanco"></div>
                      </div>
                      <div className="negroouter">
                        <div className="negro"></div>
                      </div>
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
         <header className="singleCard">
          <div className="singleCard_content">
            <div className="singleCard_wrapper">
              <div className="singleCardTitle">
                <h2>¿Por qué Arauca?</h2>
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
        </header>
      </article>
    </section>
  );
}
