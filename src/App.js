import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/category/:id',
    element: <Category />
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
