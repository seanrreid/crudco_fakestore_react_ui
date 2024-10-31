import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../pages/Layout';
import ProtectedLayout from '../pages/ProtectedLayout';
import ErrorPage from '../pages/Error';
import Home from './Home';
import Categories, { loader as categoriesLoader } from './Categories';
import Products, { loader as productsLoader } from './Products';
import Cart from './Cart';
import SingleProduct, { loader as singleProductLoader } from './SingleProduct';
import Registration, { action as registrationAction } from './Registration';
import Login, { action as loginAction } from './Login';
import Dashboard, { action as dashboardAction } from './Dashboard';

const Routes = () => {
  const publicRoutes = [
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: '/products/:id',
          element: <SingleProduct />,
          loader: singleProductLoader,
        },
        {
          path: '/categories',
          element: <Categories />,
          loader: categoriesLoader,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/register',
          element: <Registration />,
          action: registrationAction,
        },
        {
          path: '/login',
          element: <Login />,
          action: loginAction,
        },
      ],
    },
  ];

  const protectedRoutes = [
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
          action: dashboardAction,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
