import { useCart } from '../hooks/useCart'
import './Cart.css'
import { useId } from 'react'

export function Cart() {
  const cartCheckboxId = useId()
  const { openCart, setOpenCart } = useCart()

  return (
    <>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className={`cart ${openCart ? 'open' : ''}`}>
        <ul>
          <button onClick={() => setOpenCart(false)}>X</button>
          <li>
            <img src="/araucav1.webp" alt="washed" />
            <div>
              <strong>Washed sand - 15 €</strong>
              <footer>
                <small>Cantidad: 1</small>
                <button>+</button>
              </footer>
            </div>
          </li>
        </ul>

        <button>Clear</button>
      </aside>
    </>
  )
}
