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
        changeFilters={setFilters}
      />
      <div className="products_fitler-button">
        <button onClick={handleOpenFilters} className="filters_button">
          <PlusSign /> Filtro
        </button>
      </div>
      <ProductTshirts products={productList} />
      <h2 className="distinction_subtitle">¿Por qué ARAUCA?</h2>
      <div className="distinction_cards">
        <div className="single_card-content">
          <div className="single_card-wrapper">
            <div className="headline">
              <div className="single_card-title">
                <h3>Autenticidad y exclusividad</h3>
              </div>
              <p>
                Ofrecemos piezas exclusivas diseñadas para quienes desean
                destacar y reflejar autenticidad y confianza en su estilo.
              </p>
            </div>
          </div>
        </div>
        <div className="single_card-content">
          <div className="single_card-wrapper">
            <div className="headline">
              <div className="single_card-title">
                <h3>Calidad y compromiso genuino</h3>
              </div>
              <p>
                No compras solo una prenda; adquieres calidad duradera y una
                inversión en sostenibilidad, apoyando prácticas responsables que
                cuidan el medio ambiente.
              </p>
            </div>
          </div>
        </div>
        <div className="single_card-content">
          <div className="single_card-wrapper">
            <div className="headline">
              <div className="single_card-title">
                <h3>Ser tú mismo y narrar tu historia</h3>
              </div>
              <p>
                Te acompañamos en tu viaje personal, inspirándote a vivir y
                vestir según tu esencia. No solo usas una prenda; llevas una
                declaración de identidad que reafirma tu poder de definir quién
                eres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
