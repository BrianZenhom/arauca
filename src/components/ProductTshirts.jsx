import { PlusSign } from '../assets/Logocomplete'
import { useCart } from '../hooks/useCart'

export default function ProductTshirts({ products }) {
  const { addToCart, cart } = useCart()

  console.log(cart)

  return (
    <div className="products_content container ">
      {products.map(t => {
        return (
          <div className="products_content-card" key={t.id}>
            <div className="products_content-card">
              <div className="img_box">
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: 938 / 1067,
                  }}
                  className="image"
                  src={t.img}
                  alt={t.title}
                />
              </div>
            </div>
            <div className="products_description">
              <div className="products_details">
                <span className="products_name">{t.title}</span>
                <span className="products_price">{t.price},00 €</span>
              </div>
              <button onClick={() => addToCart(t)}>
                <PlusSign /> Añadir
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
