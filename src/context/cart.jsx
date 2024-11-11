import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [openCart, setOpenCart] = useState(false)

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  const removeFromCart = itemId => {
    setCart(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        setOpenCart,
        openCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
