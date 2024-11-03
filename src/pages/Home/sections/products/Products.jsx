import './products.css'
import { tshirtCollection } from './../../../../services/tshirts'
import { PlusSign } from '../../../../assets/Logocomplete'
import { useState } from 'react'
import { Filters } from '../../../../components/Filters'
import ProductTshirts from './../../../../components/ProductTshirts'

function useFilters() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filterProducts, filtersOpen, setFilters, setFiltersOpen }
}

export default function Products() {
  const { filterProducts, setFilters, setFiltersOpen, filtersOpen } =
    useFilters()

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
        changeFilters={setFilters}
      />
      <div className="products_fitler-button">
        <button onClick={handleOpenFilters} className="filters_button">
          <PlusSign /> Filtro
        </button>
      </div>
      <ProductTshirts products={productList} />
    </section>
  )
}
