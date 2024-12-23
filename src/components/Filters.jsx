import './Filters.css'
import { useId } from 'react'
import { CloseIcon } from '../assets/Icons'
import { useFilters } from '../hooks/useFilters'
import { createPortal } from 'react-dom'

export function Filters() {
  const { filters, setFilters, filtersOpen, handleCloseFilter } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = event => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return createPortal(
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
            max="50"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
        <div className="filter_category">
          <label htmlFor={categoryFilterId}>Categorias</label>
          <select onChange={handleChangeCategory} id={categoryFilterId}>
            <option value="camisetas">camisetas</option>
          </select>
        </div>
      </div>
    </dialog>,
    document.body
  )
}
