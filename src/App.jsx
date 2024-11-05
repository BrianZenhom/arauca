import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import ProductNavbar from './components/productnavbar/ProductNavbar'
import Footer from './components/footer/Footer'

const Layout = () => {
  return (
    <div className="product">
      <ProductNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'product/:id',
        element: <Product />,
      },
    ],
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
