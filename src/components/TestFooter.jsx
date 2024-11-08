import './testfooter.css'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function TestFooter() {
  const { filters } = useContext(FiltersContext)

  return <footer className="testfooter">{JSON.stringify(filters)}</footer>
}
