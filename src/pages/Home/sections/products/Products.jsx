import './products.css'
import { tshirtCollection } from './../../../../services/tshirts'
import { PlusSign } from '../../../../assets/Icons'
import { Filters } from '../../../../components/Filters'
import ProductTshirts from './../../../../components/ProductTshirts'
import { useFilters } from '../../../../hooks/useFilters'
import { Cart } from '../../../../components/Cart'

export default function Products() {
  const { filterProducts, handleOpenFilters } = useFilters()

  const productList = filterProducts(tshirtCollection)

  return (
    <section id="products" className="products_section">
      <Filters />
      <Cart />
      <div className="products_fitler-button">
        <button onClick={handleOpenFilters} className="filters_button">
          <PlusSign /> Filtro
        </button>
      </div>
      <ProductTshirts products={productList} />
    </section>
  )
}
