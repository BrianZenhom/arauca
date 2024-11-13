import { useCart } from '../hooks/useCart'
import './testfooter.css'

export function TestFooter() {
  const { cart } = useCart()

  return <footer className="testfooter">{JSON.stringify(cart, null, 2)}</footer>
}
