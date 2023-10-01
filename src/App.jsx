import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleProduct from './pages/Home/SingleProduct/SingleProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:id',
    element: <span>Categoria</span>,
  },
  {
    path: '/product/:id',
    element: <SingleProduct />,
  },
  {},
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
