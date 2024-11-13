import './products.css'
import { tshirtCollection } from './../../../../services/tshirts'
import { PlusSign } from '../../../../assets/Icons'
import { useState } from 'react'
import { Filters } from '../../../../components/Filters'
import ProductTshirts from './../../../../components/ProductTshirts'
import { useFilters } from '../../../../hooks/useFilters'
import { Cart } from '../../../../components/Cart'

export default function Products() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const { filterProducts } = useFilters()

  const productList = filterProducts(tshirtCollection)

  const handleOpenFilters = () => {
    setFiltersOpen(!filtersOpen)
  }

  const handleCloseFilter = () => {
    setFiltersOpen(false)
  }

  return (
    <section id="products" className="products_section">
      <Filters
        handleCloseFilter={handleCloseFilter}
        filtersOpen={filtersOpen}
      />
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
