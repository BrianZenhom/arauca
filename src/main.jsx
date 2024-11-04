import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'

const root = ReactDOM.createRoot

root(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
