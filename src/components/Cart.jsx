import './Cart.css'
import { useCart } from '../hooks/useCart'
import { CloseIcon, MinusSign, PlusSign } from '../assets/Icons'

export function Cart() {
  const { openCart, setOpenCart, cart } = useCart()

  return (
    <>
      <aside className={`cart ${openCart ? 'open' : ''}`}>
        <ul>
          <header className="cart_header">
            <strong>CART</strong>
            <button onClick={() => setOpenCart(false)}>
              <CloseIcon />
            </button>
          </header>
          {cart.map(item => {
            return (
              <li key={item.id}>
                <img src={item.img} alt="washed" />
                <div>
                  <div className="cart_details">
                    <strong>
                      {item.title} - {item.price}€
                    </strong>
                    <small>Size: L</small>
                    <small>Color: Sand</small>
                  </div>
                  <footer className="cart_mixed-button">
                    <button>
                      <MinusSign />
                    </button>
                    <span>{item.quantity}</span>
                    <button>
                      <PlusSign />
                    </button>
                  </footer>
                </div>
              </li>
            )
          })}
        </ul>

        <button>Clear</button>
      </aside>
    </>
  )
}
