import './products.css'
import { tshirtCollection } from './../../../../services/tshirts'
import { PlusSign } from '../../../../assets/Logocomplete'
import { useState } from 'react'
import { Filters } from '../../../../components/Filters'
import ProductTshirts from './../../../../components/ProductTshirts'

export default function Products() {
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
      <div className="products_fitler-button">
        <button onClick={handleOpenFilters} className="filters_button">
          <PlusSign /> Filtro
        </button>
      </div>
      <ProductTshirts products={productList} />
      <div className="single_card">
        <div className="single_card-content">
          <div className="single_card-wrapper">
            <div className="headline">
              <div className="single_card-title">
                <h2>¿Por qué Arauca?</h2>
              </div>
              <span>
                <p>
                  Somos diferentes y queremos vestir a aquellos que no desean
                  ser uno más entre la multitud. Aquellos que tienen una
                  seguridad arolladora y que con pasión logran todo aquello que
                  se proponen. <br /> Traemos productos con historia, fusionando
                  alta calidad con compromiso firme hacia la sostenibilidad y
                  meticulosidad en cada detalle. Cada colección despertará tu
                  entusiasmo y desearás adquirir cada una de ellas.
                </p>
                <p>
                  Nuestra misión es ser el compañero de tu historia,
                  recordándote que solo tú eres el autor.
                  <br />
                </p>
                <p>¡No permitas que otros definan quién eres!</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
