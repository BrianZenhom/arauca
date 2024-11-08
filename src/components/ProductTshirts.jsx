import { PlusSign } from '../assets/Logocomplete'
import { useCart } from '../hooks/useCart'

export default function ProductTshirts({ products }) {
  const { addToCart, cart } = useCart()

  console.log(cart)

  return (
    <div className="products_content container ">
      {products.map(product => {
        return (
          <div className="products_content-card" key={product.id}>
            <div className="products_content-card">
              <div className="img_box">
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: 938 / 1067,
                  }}
                  className="image"
                  src={product.img}
                  alt={product.title}
                />
              </div>
            </div>
            <div className="products_description">
              <div className="products_details">
                <span className="products_name">{product.title}</span>
                <span className="products_price">{product.price},00 €</span>
              </div>
              <button onClick={() => addToCart(product)}>
                <PlusSign /> Añadir
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
