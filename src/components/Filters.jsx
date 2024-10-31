import './Filters.css'
import { useState } from 'react'
import { CloseIcon } from '../assets/Logocomplete'

export function Filters({ filtersOpen, handleCloseFilter }) {
  const [minPrice, setMinPrice] = useState(15)

  const handleChangeMinPrice = event => {
    setMinPrice(event.target.value)
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
          <label htmlFor="price">Precio</label>
          <input
            type="range"
            id="price"
            min="15"
            max="200"
            onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>
        <div className="filter_category">
          <label htmlFor="category">Categorias</label>
          <select id="category">
            <option value="tshirts">Camisetas</option>
            <option value="hoodies">Cazadoras</option>
            <option value="jeans">Sudaderas</option>
          </select>
        </div>
      </div>
    </dialog>
  )
}
