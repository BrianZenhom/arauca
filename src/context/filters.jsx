import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 15,
  })

  const handleOpenFilters = () => {
    setFiltersOpen(!filtersOpen)
  }

  const handleCloseFilter = () => {
    setFiltersOpen(false)
  }

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        handleOpenFilters,
        handleCloseFilter,
        setFiltersOpen,
        filtersOpen,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
