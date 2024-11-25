import './Cart.css'
import { useCart } from '../hooks/useCart'
import { CloseIcon, MinusSign, PlusSign } from '../assets/Icons'
import { createPortal } from 'react-dom'

function CartItem({ img, price, title, quantity, addToCart }) {
  return (
    <li key={title}>
      <img src={img} alt="washed" />
      <div>
        <div className="cart_details">
          <strong>
            {title} - {price}€
          </strong>
          <small>Size: L</small>
          <small>Color: Sand</small>
        </div>
        <footer className="cart_mixed-button">
          <button>
            <MinusSign />
          </button>
          <span>{quantity}</span>
          <button onClick={addToCart}>
            <PlusSign />
          </button>
        </footer>
      </div>
    </li>
  )
}

export function Cart() {
  const { openCart, setOpenCart, addToCart, cart, clearCart } = useCart()

  return createPortal(
    <aside className={`cart ${openCart ? 'open' : ''}`}>
      <ul>
        <header className="cart_header">
          <strong>CART</strong>
          <button onClick={() => setOpenCart(false)}>
            <CloseIcon />
          </button>
        </header>
        {cart.map(product => (
          <CartItem
            key={product.id}
            addToCart={() => addToCart(product)}
            {...product}
          />
        ))}
        <button onClick={clearCart}>Clear bag</button>
      </ul>
    </aside>,
    document.body
  )
}
