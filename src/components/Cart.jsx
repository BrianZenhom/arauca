import './Cart.css'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CloseIcon, MinusSign, PlusSign } from '../assets/Icons'

export function Cart() {
  const cartCheckboxId = useId()
  const { openCart, setOpenCart, cart } = useCart()

  return (
    <>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className={`cart ${openCart ? 'open' : ''}`}>
        <ul>
          <button className="cart_close-btn" onClick={() => setOpenCart(false)}>
            <CloseIcon />
          </button>
          <li>
            <img src="/araucav1.webp" alt="washed" />
            <div>
              <strong>Washed sand - {cart[0]?.price} €</strong>
              <footer>
                <button>
                  <MinusSign />
                </button>
                <span>Cantidad: {cart[0]?.quantity}</span>
                <button>
                  <PlusSign />
                </button>
              </footer>
            </div>
          </li>
        </ul>

        <button>Clear</button>
      </aside>
    </>
  )
}
