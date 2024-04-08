import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/cart.context';
import './styles/utility.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
