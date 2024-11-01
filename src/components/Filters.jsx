import './Filters.css'
import { useState, useId } from 'react'
import { CloseIcon } from '../assets/Logocomplete'

export function Filters({ filtersOpen, handleCloseFilter, changeFilters }) {
  const [minPrice, setMinPrice] = useState(15)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    // Algo está mal
    setMinPrice(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = event => {
    changeFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <dialog open className={filtersOpen ? 'filters show' : 'filters'}>
      <div
        className={filtersOpen ? `filter_selectors open` : 'filter_selectors'}
      >
        <div className="filter_header">
          <strong>Filtro</strong>
          <button onClick={handleCloseFilter}>
            <CloseIcon />
          </button>
        </div>
        <div className="filter_price">
          <label htmlFor={minPriceFilterId}>Precio mínimo</label>
          <input
            type="range"
            id={minPriceFilterId}
            min="15"
            max="200"
            onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>
        <div className="filter_category">
          <label htmlFor={categoryFilterId}>Categorias</label>
          <select onChange={handleChangeCategory} id={categoryFilterId}>
            <option value="camisetas">camisetas</option>
            <option value="hoodies">Cazadoras</option>
            <option value="jeans">Sudaderas</option>
          </select>
        </div>
      </div>
    </dialog>
  )
}
