import './Cart.css'
import { useCart } from '../hooks/useCart'
import { CloseIcon, MinusSign, PlusSign } from '../assets/Icons'

export function Cart() {
  const { openCart, setOpenCart, cart } = useCart()

  return (
    <>
      <aside className={`cart ${openCart ? 'open' : ''}`}>
        <ul>
          <button className="cart_close-btn" onClick={() => setOpenCart(false)}>
            <CloseIcon />
          </button>
          {cart.map(item => {
            console.log(item)
            return (
              <li key={item.id}>
                <img src={item.img} alt="washed" />
                <div>
                  <strong>Washed sand - {item.price}€</strong>
                  <footer>
                    <button>
                      <MinusSign />
                    </button>
                    <span>Cantidad: {item.quantity}</span>
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
